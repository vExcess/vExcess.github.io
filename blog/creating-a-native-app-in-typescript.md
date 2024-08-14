<h1 style="border-bottom: none; margin-bottom: 0px;">I Tried Creating a Native App in TypeScript</h1>
<div style="border-bottom: 1px solid #aaa; padding-bottom: 12px;">
<div style="float: left; margin-right: 8px;"><img src="https://avatars.githubusercontent.com/u/41875927?v=4" height="50px"></div>
<div>Written by <a href="https://github.com/vexcess/">VExcess</a>
<br>
<span style="color: gray">20 minute read • Aug 13, 2024</span></div>
</div>
<br>
The story of how I tried and failed to compile a program in TypeScript to native code. This blog contains useful information on using Static Hermes in addition to details about shermes' faults. Lastly this blog contains my thought processes and rants about various softwares.

## Why TypeScript
Recently I've been working on a command line utility called [lnstat](https://github.com/vExcess/lnstat/tree/main) which calculates various statistics about source code. As this is a small hobby project I wanted developing it to be enjoyable which I took into account when deciding which language to use. The languages that I know are Zig, TypeScript, JavaScript, Rust, Java, and Python. Of those, the first three are the only ones I enjoy using. Since this project involves plenty of string processing I discarded Zig as a possibility as working with strings in systems level languages is a pain. My rule of thumb is to use JS for frontend code and TS for backend code because you can't directly run TS on the frontend, however I can run TS on the backend using Bun without needing to "compile" it first. Needing to "compile" a dynamically typed interpreted language to another dynamically typed interpreted language just to run it is plain stupid in addition to slowing down the development process and bloating your codebase.

## Distribution Issues
The issue with using TypeScript appears when we consider distributing the project. I want the program to be able to run via `lnstat` in the command line. One way I could do this is to create a native app that starts the script using Bun. However I should make it run with Node instead since Node is far more popular. But Node doesn't support running TS yet (although this may change in the future [module: add --experimental-strip-types](https://github.com/nodejs/node/pull/53725)) so I'll have to transpile it using esbuild when distributing the script. However this still requires that all users have Node installed. This isn't an issue for web developers that already have it, but I want lnstat to be used by anyone without needing to install Node (which is quite a process). 

I could make lnstat automatically install Node if it detects that it is not already installed, but doing this in a cross platform way would be difficult as I'd have to support Windows, Mac, and the many many Linux distros that each have different package managers. In addition I'd have to support both the x86_64 and ARM variants of each of those. Making things even more complicated, the user could have Node installed but it might be a too outdated version.

Another option is that I bundle a JS runtime with my script to create a standalone binary. I can do this using a Node compiler such as [pkg](https://github.com/vercel/pkg) or [nexe](https://github.com/nexe/nexe). The downside of this is a large binary size. Alternatively I could use a smaller JS engine such as [quickjs](https://github.com/bellard/quickjs) however this would likely require me to make custom file system API bindings and would be sacrificing performance as embeddable JS engines like quickjs are less optimized and do not have JIT compilation.

I'm left considering these following options:
1) Make application require Node to be pre-installed 
	- Pros:
		- App is a mere 36kB
		- App has good performance
	- Cons
		- Requires the user to have Node installed
2) Bundle Node into the app binary using pkg or nexe
	- Pros:
		- Doesn't require the user to have Node installed
		- App has good performance
	- Cons
		- App is a whopping 43MB
3) Package the app using an embeddable JS engine such as quickjs
	- Pros:
		- App is a relatively small ~246KB
		- Doesn't require the user to have Node installed
	- Cons
		- App has poor performance
		- quickjs is just a JS engine and I would have to provide file system API bindings

## Compiling TypeScript???
But what if there was an option that resulted in a small binary size, good performance, and didn't rely on Node being pre-installed? What if we could compile the TypeScript or JavaScript to native code ahead of time? I'm not the first person to wonder about such a possibility. 

### Surma's Attempt
The first instance I came across of a person attempting to do so is documented by this article here: [I turned JS into a compiled language (for fun and Wasm)](https://surma.dev/things/compile-js/). Surma's approach to compiling JS was to transpile it to C++, however he gave up on the project realizing that efficiently compiling JS to native code is a nearly impossible task. 

### My Attempt
After reading Surma's article I foolishly thought perhaps I could do the same thing and get further into the project than he did. I attempted to transpile JS to Zig rather than C++ which turns out is harder due to Zig's strictness and syntactical differences from JS. The following small program demos how far I got with the project.
```js
const string1 = "hello"
let string2 = "world"
string2 = 123;
console.log(string1 + " " + string2)

let x = [1, 2, 3]
console.log(x[0])
```
My code successfully takes the above JS code, transpiles it to Zig, compiles the Zig, and then runs the native binary 
```
vexcess@vexcess-IdeaPad-5-Pro-16ACH6:~/Desktop/js2zig$ bun run ./src/index.ts 
JavaScript transpilation complete
Output to ./out/out.zig
Zig build complete
hello 123.0
1.0
```
As you can see my js2zig project supports dynamic typing, basic array lookups, implicit casts, and basic operations. However it took so much effort just to get to the point of supporting such a simple JS program that I realized this project is beyond my abilities. As as result, I abandoned the js2zig project.

### Porffor
The next project attempting to compile JS is [porffor](https://github.com/CanadaHonk/porffor). The Porffor compiler is written entirely in JS. As a person who has written a compiler in JavaScript, writing a compiler in JS is a bad decision. But as Atwood's Law says, "any application that can be written in JavaScript, will eventually be written in JavaScript". The Porffor project also appears to be aimed more towards compiling JavaScript to web assembly than native code. I don't understand why you'd want to compile JS to WASM because then you still can't run it natively. You need a web assembly engine such as the ones in web browsers, but web browsers can already run JS so I don't know what they've accomplished other than creating a more convoluted way to run JavaScript. Lastly, I couldn't find any information on how to bind external functions (file system apis) to code compiled with Porffor. 

### Static Hermes
The last project I'm aware of that compiles JS to native is [static hermes (shermes)](https://github.com/facebook/hermes).  Unlike Porffor, Static Hermes is written in C++ for much faster compilation times. In addition shermes supports compiling TypeScript in addition to JavaScript unlike Porffor which only compiles JavaScript. The benefit of this is that shermes can leverage the type information that TS provides to result in more efficient code. As such I chose to go with Static Hermes in my attempt to compile my app to a standalone executable.

## Compiling shermes
Static Hermes is not production ready and therefore does not provide built binaries and you must compile it from source.
I went to the Github discussion at [https://github.com/facebook/hermes/discussions/1137](https://github.com/facebook/hermes/discussions/1137) to learn how to use shermes. One of the people there created a blog post on how to use shermes which you can find here [Compiling Typescript to native code
](https://medium.com/@gautam1168/compiling-typescript-to-native-code-0238d69ca582). You can also find more information here: [BuildingAndRunning.md](https://github.com/facebook/hermes/blob/main/doc/BuildingAndRunning.md). I won't go over the compilation steps here as you can get that information from the 3 links above.

Unforunately on my 6GB RAM laptop the compilation process crashes due to running out of memory (side note: as much as I love Linux, Windows is far superior at memory management). Therefore I had to build the project in WSL on my gaming PC (which runs Windows solely because game developers refuse to cross compile games for Linux) which has 16GB RAM and copy the built project over to my laptop. I learned that it is necessary that I build the project in the exact same location in WSL as I will store it on my laptop.

Once I had shermes compiled and copied over I added it to my PATH by adding the following to my .bashrc file
```sh
# shermes
export PATH="/home/vexcess/shermes-linux-x86_64/build_release/bin:$PATH"
```

## Running Programs using shermes
Lets say you have a program `main.ts`
```ts
function sum(arr: number[]): number {
  let result: number = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

const result = sum([1, 2, 3, 4, 5]);
print(result);
```

To run the program using shermes use
```
shermes -typed -exec ./main.ts
```
The `-typed` flag tells shermes we are compiling TypeScript rather than JavaScript. The `-exec` flag tells shermes to immediately run the resulting native code without outputting it to the file system. If you wish to create a native executable rather than immediately running the code replace `-exec` with `-o a.out` where a.out is the name of the output file.

## Immediate Results
Now that I can run programs using shermes I decided to benchmark them and analyze the resulting binary size. The resulting binaries from shermes were only a few dozen KB. That's quite small! In addition my [benchmarks](https://github.com/vExcess/js-engine-bench) show that shermes is on average 3.4x faster than quickjs at running the same JS program. That's significantly faster! In theory, shermes should get even better performance when running TypeScript programs due to the additional type information (although I have not measured this).

## Importing External Dependencies
Because shermes is just an engine and not a runtime I need to write my own `node:fs` implementation. In 
Gaurav Gautam's article he demonstrates how to call C code from TypeScript. But C is a horrid language. It was created at a time when we knew very little about language design. C did get a lot of things right and that's why its usage is so prevelant today, but it also got many things wrong. For its time it was revolutionary and I'd choose programming in C over assembly any day, but we now have nearly 50 years more experience about language design than we did when C was created. It only makes sense that new code should be written in a new and improved language. 

The two most popular C alternatives today are Rust and Zig. I do not feel that Rust is a good successor to C because Rust follows an entirely different philosophy than C. While C strives to be simplistic and direct. Rust has an insanely tall learning curve and creates abstractions every opportunity it gets. Zig is the language I see replacing C. It is a simple language that I was able to grasp within only a few days. Like C, it is fairly direct so that you understand what is happening under the hood without everything being hidden by magical abstractions.

### Setup
I mainly do web development so I am highly unqualified to be giving advice on how to create native libraries to interop with your compiled TypeScript code. The way I do things is probably not the best way, but it does work and sometimes good enough is all that matters when programming. Anyways, here's how to include external dependencies using object files.

First, setup the following file structure
```
my-project
	include
    	my-lib.h
    lib
    my-lib.zig
    my-script.ts
```
As you can see there are few things we need.
1) A directory to store the header files in
2) A directory to store the compiled object files in
3) The Zig source code
4) The script that will use the native library

"What are you doing creating header files for Zig code?" you might ask. When the Zig code compiles we get `.o` files which are object files containing the machine code of the program, however the object files themselves don't tell a caller how to interface with the code. Therefore we need header files to tell the compiler how to use the object files. Ideally the Zig compiler would generate the header files for us. This is actually a feature that the Zig compiler intends to have, but at the current moment the [header file generator in the Zig compiler is broken](https://github.com/ziglang/zig/issues/18188). Such is the life of using pre-1.0 software. Unfortunately this means we must write the header files by hand.

To start write the following to the `my-lib.h` file:
```c
int add(int, int);
```

In `my-lib.zig` have the following
```rs
export fn add(a: i32, b: i32) i32 {
    return a + b;
}
```

In `my-script.ts`:
```ts
const _add = $SHBuiltin.extern_c({ include: "my-lib.h" }, function add(a: c_int, b: c_int): c_int {
    throw 0;
});
const result = _add(1, 2);
print(result);
```
The `throw 0` doesn't seem to be necessary, but Gaurav's tutorial does it so I guess I will too. 

### Create Object Files
We are now ready to compile the project. The first step is to compile the Zig code into an object file
```sh
zig build-obj -fno-stack-check -fPIC my-lib.zig
rm fs-polyfill.o.o
mkdir lib || true
mv my-lib.o ./lib/mylib.o
```
`-fno-stack-check` disables stack probing in safe builds. This allows stack overflows to potentially corrupt out of stack data, but for whatever reason it's necessary for the Zig code to work with the C code. `-fPIC` Force enables Position Independent Code. This means the code emitted by the Zig compiler can be placed anywhere in memory and still work which is important for a library. The `fs-polyfill.o.o` should not exist and is actually a [bug in the Zig compiler](https://github.com/ziglang/zig/issues/13179) so we remove it. Such is the life of using pre-1.0 software. Next we create the `lib` directory and move the `my-lib.o` file into it. It's not technically necessary to put the .o file in its own directory, but it pays to be tidy.

### Create Environment Variable
Next we must define the `CPATH` environment variable so that shermes knows where to find the header files at. I accomplished this using the following bash
```sh
CWD=$(pwd)
export CPATH=$CWD/include
```

### Compile Project
Lastly, we compile our script using shermes
```sh
shermes -typed -exec -Wc,lib/my-lib.o my-script.ts
```
The `-Wc,` flag passes the following argument to the underlying C compiler. This tells shermes where the .o file is.

If all goes well you will see `3` output to your console.

## Getting rid of annoying TS errors
Right now VS Code's TS server is reporting a bunch of errors because it doesn't know that shermes globals exist. I quickly solve this by creating a `global.d.ts` file:
```ts
type c_int = number;
type c_ptrdiff_t = number;
type c_ptr = number;

declare namespace $SHBuiltin {
    function extern_c(includes: any, fn: Function): Function;
}

declare function print(...args: any): void;
```

## Porting lnstat to hermes
Now that I'm able to compile JS to native code using shermes, I theoretically just need to port lnstat to be shermes compatible. This turned out to be a bit more difficult than I imagined. I thought I would just need to create a quick file system polyfill, but that was very wrong.

### Passing strings between Zig and JS
The first thing I needed to do was be able to pass strings from JS to Zig so that my JS can dictate which files to read. I can imagine sophisticated ways to do this, but for now I'm just going to create an array of buffers in Zig and then let JS access bytes of those buffers.

The init function allocates the array of buffers and then I have several self explanatory functions for interfacing with those buffers. I'm also too lazy to free the memory so I'll just let the OS clean it up for me. For such a small project this will be fine. Also note that I am using my [vexlib](https://github.com/vExcess/zig-vexlib/tree/main) library. 
```ts
var buffers: Array(Uint8Array) = undefined;

export fn init() void {
    const generalPurposeAllocator = std.heap.GeneralPurposeAllocator(.{}){};
    vexlib.init(generalPurposeAllocator);

    // create empty array of buffers
    buffers = Array(Uint8Array).alloc(10);
}

export fn createBuffer(capacity: u32) u32 {
    buffers.append(Uint8Array.alloc(capacity));
    return buffers.len - 1;
}

export fn getBufferLen(buffIdx: u32) u32 {
    return buffers.get(buffIdx).len;
}

export fn setBufferLen(buffIdx: u32, len: u32) void {
    buffers.get(buffIdx).len = len;
}

export fn getBufferByte(buffIdx: u32, idx: u32) u8 {
    return buffers.get(buffIdx).get(idx);
}

export fn setBufferByte(buffIdx: u32, idx: u32, val: u8) void {
    buffers.get(buffIdx).set(idx, val);
}
```

I then import all these in my TypeScript code
```ts
const init = $SHBuiltin.extern_c({ include: "fs-polyfill.h" }, function init(): void {
    throw 0;
});

const createBuffer = $SHBuiltin.extern_c({ include: "fs-polyfill.h" }, function createBuffer(a: c_int): c_int {
    throw 0;
});

const getBufferLen = $SHBuiltin.extern_c({ include: "fs-polyfill.h" }, function getBufferLen(a: c_int): c_int {
    throw 0;
});

const setBufferLen = $SHBuiltin.extern_c({ include: "fs-polyfill.h" }, function setBufferLen(a: c_int, b: c_int): void {
    throw 0;
});

const getBufferByte = $SHBuiltin.extern_c({ include: "fs-polyfill.h" }, function getBufferByte(a: c_int, b: c_int): c_int {
    throw 0;
});

const setBufferByte = $SHBuiltin.extern_c({ include: "fs-polyfill.h" }, function setBufferByte(a: c_int, b: c_int, c: c_int): void {
    throw 0;
});
```


Next I create two TS functions that read and write to the Zig buffers from JS strings
```ts
function getZigString(idx: number) {
    const len = getBufferLen(idx);
    let bytes: number[] = [];
    for (let i = 0; i < len; i++) {
        const byte = getBufferByte(idx, i);
        bytes.push(byte);
    }
    const enc = new TextDecoder("utf-8");
    return enc.decode(bytes);
}

function createZigString(value_: string): number {
    const enc = new TextEncoder();
    const buff = enc.encode(value_);
    const idx = createBuffer(buff.length);
    setBufferLen(idx, buff.length);
    const value = new String(value_);
    for (let i = 0; i < buff.length; i++) {
        setBufferByte(idx, i, value.charCodeAt(i));
    }
    return idx;
}
```

But here is where I run into a long time scourge of programmers: string encoding. In a perfect world where English is the only language we can use ASCII where each byte is a single character as English only has 26 characters. However other European languages with accent marks exist and also people thought emojis are cool so we got UTF-16 where every character is 16 bits allowing there to be 16,384 different characters. This would have been fine except Asian languages also had to exist and hanzi-based writing systems are terribly inefficient in terms of information storage. For example Chinese itself has 98,682 different characters allocated to it. And so we got UTF-32 that supports all 26 English characters, 1481 other European characters, 3782 emojis, 98682 Chinese characters and all the other Asian and other languages alphabets. But now we have a memory usage issue. Each character takes 32 bits which is horribly inefficient. So we get UTF-8 which has variable length encoding solving the memory inefficiency, but now accessing characters is complicated.

Fortunately I don't have to worry about this complexity because I can just rely on JavaScript's built in `TextEncoder` and `TextDecoder` APIs to do the heavylifting for me, except that I can't because shermes doesn't support theses APIs because they are not part of the ECMAScript specification.

#### Porting TextEncoder and TextDecoder
Of course I'm not gonna implement it myself so I steal code from here: [https://github.com/anonyco/FastestSmallestTextEncoderDecoder](https://github.com/anonyco/FastestSmallestTextEncoderDecoder) (10/10 repo name btw) and guess what? It doesn't work with shermes!

The first issue is that shermes doesn't support accessing properties of strings so I must access it from the prototype and call it using Function.call.
For example I must replace
```ts
function decoderReplacer(encoded: string) {
	encoded.charCodeAt(0)
```
with
```ts
const charCodeAt = String.prototype.charCodeAt;
function decoderReplacer(encoded: string) {
	charCodeAt.call(encoded, 0)
```
The next issue I ran into is that shermes doesn't support ES5 "classes" where you manually edit the prototype of a function. So I had to rewrite the code to use ES6 classes (which are objectively better, but kinda weird that shermes doesn't support the old way of doing things).

Next I discover that shermes doesn't support optional parameters. This is a big drag so I have to manually rewrite the code to not use optional parameters.

Lastly for this section, shermes does not support using typed arrays or ArrayBuffer as a type so I must use any instead like so 
```ts
decode(inputArrayOrBuffer: any /* TypedArray | ArrayBuffer */) {
```
This makes sense since shermes TS support is experimental. Hopefully it gets improved in the future. And just like that my `getZigString`  and `createZigString` functions now work.

### console.log Polyfill
This ones pretty simple. Also I know that "polyfill" is probably an incorrect term, but I'm gonna use it anyways.
```ts
const console = {
    log: print,
};
```

### process Polyfill
Also needed to polyfill the `process` global variable
```ts
const process = {
    argv: ["ab", "cd", "ef"],
    stdout: {
        write: print
    }
};
```

### node:fs Polyfill
Now that I have a way to pass strings between Zig and JS and have fixed a few other things I can create my file system polyfill. I first create my file system functions in Zig
```ts
export fn readDir(buffIdx: u32) u32 {
    const items = fs.readDir(String.using(buffers.get(buffIdx).*));
    const rangeStart = buffers.len;
    var i: u32 = 0; while (i < items.len) : (i += 1) {
        buffers.append(items.get(i).bytes);
    }
    const rangeEnd = buffers.len;
    return (rangeStart << 16) | rangeEnd;
}

export fn lStat(buffIdx: u32) u32 {
    const stat = fs.lStat(String.using(buffers.get(buffIdx).*));
    return switch (stat.kind) {
        .directory => 1,
        .file => 2,
        else => 0
    };
}

export fn readFile(buffIdx: u32) u32 {
    const content = fs.readFile(String.using(buffers.get(buffIdx).*));
    buffers.append(content);
    return buffers.len - 1;
}
```
Rather than passing in a string, they accept an index in the buffer array which tells the function where to find the string to use. I can now import these functions from JS the same way I've demonstrated multiple times already
```ts
const readDir = $SHBuiltin.extern_c({ include: "fs-polyfill.h" }, function readDir(a: c_int): c_int {
    throw 0;
});

const lStat = $SHBuiltin.extern_c({ include: "fs-polyfill.h" }, function lStat(a: c_int): c_int {
    throw 0;
});

const readFile = $SHBuiltin.extern_c({ include: "fs-polyfill.h" }, function readFile(a: c_int): c_int {
    throw 0;
});
```

Next I create the `fs` variable in my TS. Unfortunately shermes wasn't allowing me to create an object literal for fs so I had to create a class for it. But then shermes also doesn't support static methods so I had to create a whole class just to create one instance of it. It feels like I'm programming in Java all over again...
```ts
class fsClass {
    // NOTE: shermes doesn't support static methods
    readdirSync(path: string): string[] {
        const addr = createZigString(path);
        const range = readDir(addr);
        const rangeStart = range >> 16;
        const rangeEnd = range & (2**16 - 1);
        let out: string[] = [];
        for (let i = rangeStart; i < rangeEnd; i++) {
            out.push(getZigString(i));
        }
        return out;
    }

    lstatSync(path: string): fs_Stats {
        const addr = createZigString(path);
        const kind = lStat(addr);
        return new fs_Stats(kind);
    }

    createReadStream(path: string, options: { encoding: string }): fs_ReadStream {
        // the only supported encoding is "utf8"
        return new fs_ReadStream(path);
    }
}

// NOTE: When I tried creating a singleton using an object literal isntead of a class
// shermes reported `warning: ft: unsupported property for typed object, assuming 'any'`
const fs = new fsClass();
```

I also created an fs_Stats class for creating results from `lstatSync`. Here I note that shermes doesn't support private variables so I had to use the old fashioned way of creating private variables which is creating a public variable prefixed by `_`. Another thing to note is that shermes doesn't support TypeScript enums
```ts
class fs_Stats {
    // NOTE: shermes doesn't support private variables
    _kind: number = 0;

    constructor(kind: number) {
        this._kind = kind;
    }

    isDirectory(): boolean {
        // NOTE: shermes doesn't support enums
        const DIRECTORY = 1,
              FILE = 2,
              UNKNOWN = 0;
        return this._kind === DIRECTORY;
    }
}
```

Lastly, I need to polyfill the Stream API which I do using this
```ts
type callbackFxn = (chunk: string) => void;

class fs_ReadStream {
    _path: string = "";
    _dataListener: callbackFxn = (chunk: string): void => {};
    _endListener: callbackFxn = (chunk: string): void => {};
    _hasEndListener = false;

    constructor(path: string) {
        this._path = path;
    }

    on(event: string, callback: callbackFxn): fs_ReadStream {
        switch (event) {
            case "data": {
                // NOTE: shermes seg faults when creating an array of functions
                // Thread 1 "lnstat" received signal SIGSEGV, Segmentation fault.
                // 0x00007ffff7e9396c in _sh_fastarray_push () from /home/vexcess/shermes-linux-x86_64/build_release/lib/libhermesvm.so
                this._dataListener = callback;

                // I'm not sure how I would implement this asyncronously
                const strAddr = createZigString(this._path);
                const contentAddr = readFile(strAddr);
                const data = getZigString(contentAddr);
                this._dataListener(data);
                break;
            }
            case "end": {
                this._endListener = callback;
                if (!this._hasEndListener) {
                    this._endListener("");
                    this._hasEndListener = true;
                }
                break;
            }
        }
        return this;
    }
}
```
A stream should be allowed to have multiple event listeners, however doing so practically requires having an array of functions. Unfortunately creating an array of functions causes shermes to seg fault so I had to resort to only allowing 1 callback per event using a hardcoded variable. Lastly streams are supposed to be asynchronous. That's literally the entire point of using them, but I wasn't sure how to accomplish that so I make the stream start reading synchronously immediately after the data event listener is attached.

### Porting lnstat to be shermes compatible
Now that I've polyfilled all lnstat's dependencies I just need to port lnstat itself. Turns out there is a lot of very basic and commonly used methods that shermes doesn't support yet so I had to polyfill all the following
```ts
// NOTE: shermes does not support accessing properties of numbers
function Number_toString(num: number): string {
    return Number.prototype.toString.call(num);
}

// NOTE: shermes does not support Array.prototype.includes
function Array_includes(self: string[], item: string): boolean {
    for (let i = 0; i < self.length; i++) {
        if (self[i] === item) {
            return true;
        }
    }
    return false;
}

// NOTE: shermes does not support Array.prototype.slice
function Array_slice(self: string[], start: number, stop: number): string[] {
    let subArr = [];
    for (let i = start; i < stop; i++) {
        subArr.push(self[i]);
    }
    return subArr;
}

// NOTE: shermes does not support Array.prototype.map
function Array_map(self: any, fxn: (item: any) => any): any {
    let newArr = [];
    for (let i = 0; i < self.length; i++) {
        newArr.push(fxn(self[i]));
    }
    return newArr;
}

// NOTE: shermes does not support Array.prototype.find
function Array_find(self: any, fxn: (item: any) => boolean): any {
    for (let i = 0; i < self.length; i++) {
        if (fxn(self[i])) {
            return self[i];
        }
    }
    return undefined;
}

// NOTE: shermes does not support Array.prototype.join
function Array_join(self: any, joiner: string): string {
    let out = "";
    for (let i = 0; i < self.length; i++) {
        out += self[i] + joiner;
    }
    return out;
}
```

Next shermes doesn't support IntersectionTypeAnnotation so I had to manually make ExtStats a copy of FileStats and add the rest of the fields it has.
```ts
type FileStats = {
    lines: number,
    code: number,
    comments: number,
    blanks: number,
    avgLength: number,
    maxLength: number
};

// NOTE: shermes doesn't support IntersectionTypeAnnotation
type ExtStats = /* FileStats & */{
    lines: number,
    code: number,
    comments: number,
    blanks: number,
    avgLength: number,
    maxLength: number,
    files: number,
};
```

Also shermes doesn't support using Array or Map as a datatype so I had to use `any` instead
```ts
type DirStats = {
    path: string,
    extsStats: any /* Map<string, ExtStats> */,
    subDirs: any /* Array<DirStats> */
};
```

In addition, shermes doesn't support computed field accesses so I had to do this. Brings me back to my experiences of writing shaders in GLSL.
```ts
// NOTE: shermes doesn't support computed access to exact object types
function computedAccess(obj: any, item: string) {
    switch (item) {
        case "js": {
            return obj.js;
        }
        case "html": {
            return obj.html;
        }
        // ...
        case "txt": {
            return obj.txt;
        }
        case "csv": {
            return obj.csv;
        }
    }
    return undefined;
}
```

You know how I said you have to do `String.prototype.charCodeAt.call(encoded, 0)` instead of `encoded.charCodeAt(0)`. Turns out you can also do `encoded_ = new String(encoded); encoded_.charAt(0)`. This is still annoying, but is a little less tedious. I'm not exactly sure what side effects this causes because I have never used `new String()` in my JavaScript code before and I don't think any other sane person has either.

The next thing is that shermes doesn't support KeyofTypeAnnotation. Once again I am forced into replacing all my useful type annotations with `any`
```ts
for (const prop in extStats) {
	dirExtStats[prop/* as keyof ExtStats*/] += extStats[prop/* as keyof FileStats*/];
}
```

Lastly, when I try adding a number to a string shermes throws "binary operation: + cannot be applied to string and number". This is a serious impairment. Without implicit type casting JavaScript is not JavaScript. Anyways those were all the issues I encountered porting my project to be shermes compatible.

### Result
And finally I am able to compile my TypeScript code to native code using shermes without producing any errors! The result is only 1.7 MB. Have I finally made a self standing, small, and fast build of lnstat?!?!
```
vexcess@vexcess-IdeaPad-5-Pro-16ACH6:~/Desktop/lnstat/src-shermes$ ./lnstat 
Segmentation fault (core dumped)
```
Nope... The resulting executable produced by shermes immediately seg faults when run. But hey maybe this is an issue in my Zig code and I can fix it. Lets see where it's seg faulting by running it in a debugger.
```
vexcess@vexcess-IdeaPad-5-Pro-16ACH6:~/Desktop/lnstat/src-shermes$ gdb lnstat
GNU gdb (Ubuntu 12.1-0ubuntu1~22.04.2) 12.1
...
Starting program: /home/vexcess/Desktop/lnstat/src-shermes/lnstat 
[Thread debugging using libthread_db enabled]
Using host libthread_db library "/lib/x86_64-linux-gnu/libthread_db.so.1".
[New Thread 0x7ffff552e640 (LWP 54135)]

Thread 1 "lnstat" received signal SIGSEGV, Segmentation fault.
0x00007ffff7e9388a in _sh_fastarray_load () from /home/vexcess/shermes-linux-x86_64/build_release/lib/libhermesvm.so
```
Nope it isn't my code that's segfaulting. It's a shared object internal to shermes. And since I'm not a maintainer of shermes and have next to no experience with C++ there is nothing I can do about it. Such is the life of using pre-1.0 software.

## Post Mortem
Well I'm very disappointed I wasn't able to successfully compile lnstat to a native executable using shermes due to what I believe must be a bug somewhere in the shermes compiler. However this isn't all that unexpected since shermes is a very young project that is not production ready. One of the shermes collaboraters even warned "it is not ready to be tried out, since what works or doesn't is not documented, or it may even change or regress from commit to commit".

I'm hoping that perhaps in the future shermes will be mature enough that I can compile lnstat to native without the issues mentioned above. But ultimately maybe I am approaching this project the wrong way. Rather than trying to compile JavaScript/TypeScript to native code ahead of time, perhaps I should be learning a new language that is similiar enough to JavaScript that it feels the same but is stricter than JS in some regards so that it is trivial to compile. One such language that might fit that description is the Dart language created by Google. I have never used Dart, but it can transpile to JavaScript for usage in web pages. In addition it can compile to native executables. As such I think it might be the language that I am looking for and I'm highly considering learning it. Once I do I might just rewrite lnstat in Dart rather than waiting for shermes to become a stable product.
