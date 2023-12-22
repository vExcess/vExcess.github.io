# Zig for WebAssembly guide
##### Written by Vexcess
###### Last Updated: December 21, 2023

There are quite a few Zig for WASM guides online, however almost all of them are out of date or do not go very in depth. The reason they are out of date is because the Zig language still hasn't reached 1.0 and is constantly releasing breaking changes to the language. Because these tutorials are not being updated I'm writing my own.

This guide assumes you have basic familiarity with Zig and WebAssembly.  
Here is the recommended starting place for learning Zig: [https://ziglearn.org/chapter-0/](https://ziglearn.org/chapter-0/)  
You can reference specific Zig language features here: [https://ziglang.org/documentation/master/](https://ziglang.org/documentation/master/)  
For WebAssembly reference: [https://developer.mozilla.org/en-US/docs/WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly)  

## Setup
First we need to setup our zig project. If you're only writing a small program you can just create a `my-project.zig` file, but if you're creating a bigger project you'll probably want to run `zig init-lib` in your terminal because a wasm module is essentially a library. You'll be fine if you use `zig init-exe` too, but for this tutorial's purpose we'll be focusing on writing a library.

Once you run `zig init-lib` Zig will generate the following file structure
```
src/
	main.zig
build.zig
```

In main.zig should have the following default code:
```js
const std = @import("std");
const testing = std.testing;

export fn add(a: i32, b: i32) i32 {
    return a + b;
}

test "basic add functionality" {
    try testing.expect(add(3, 7) == 10);
}
```

The important thing here is the `export` keyword right before the `add` function which tells the compiler to make the function visible to JavaScript when compiled to Web Assembly.

For fun you can run `zig test src/main.zig` just to make sure the compiler isn't broke and that the code actually works.

## Compiling
Now to compile code to wasm use one of the following commands.  
If you are writing an executable:  
`zig build-exe -O ReleaseSmall -target wasm32-freestanding src/main.zig`

If you are writing a library:  
`zig build-lib -O ReleaseSmall -target wasm32-freestanding -dynamic -rdynamic src/main.zig`

This will produce a `main.wasm` file. Which you can then run as normal.

The `-O` flag tells the compiler which output mode to use.
| Release Mode | Compile Speed | Safety Checks | Performance | Binary Size |
| ------------ | ------------- | ------------- | ----------- | ----------- |
| Debug        | fast          | yes           | slow        | large       |
| ReleaseFast  | slow          | no            | fast        | medium      |
| ReleaseSafe  | slow          | yes           | medium      | medium      |
| ReleaseSmall | slow          | no            | medium      | small       |

Personally I recommend using ReleaseSmall for web applications because your client will need to download the entire binary over wifi and using the other release modes can result in pretty big file sizes.

The `-target` flag tells the compiler which platform we are going to run the output on.  
The target is in the format `instructionSet-operatingSystem`. For web assembly there are two instruction sets `wasm32` and `wasm64` however wasm64 isn't standardized yet. Plus if your webpage requires over 4 GB of RAM then maybe you're doing something wrong... However if you really do need that 64 bit you can enable `--experimental-wasm-memory64` in your browser flags. There are also two operating system targets `freestanding` and `wasi`. WASI stands for "WebAssembly System Interface" and can be used when compiling for native wasm runtimes such as Wasmer or Wasmtime. But for our purposes of compiling for browser use we are going to use freestanding which means no operating system.

The `-dynamic` flag tells the compiler to make the output a shared library instead of a static library.  
I don't know why it has to be a shared library instead of a static one, but the why doesn't matter. All that's important is that you know it has to be.

The `-rdynamic` flag tells the compiler to export the symbols of an executable.  
If you don't add this flag your library will compile fine, but it won't export the functions you want to use, so make sure to add this flag.

Notice that when compiling your code as an executable instead of a library leave out the `-dynamic` and `-rdynamic` flags. Your resulting wasm will then have a single exported function named `_start` which you can then call to run the program.

Lastly, `src/main.zig` just tells the compiler where our entrypoint is.

## Calling Zig from JS
Usually you store the wasm file seperately from the HTML and import it via a network request, but browsers have this very annoying thing called CORS which prevents you from loading local files and since I'm too lazy to spin up a web server I'll hardcode the base64 of the wasm binary into my singular HTML file.
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Zig WASM Demo</title>
    <script src="https://cdn.jsdelivr.net/gh/vExcess/libraries@main/base64.js"></script>
</head>
<body>
    <script>
let base64File = "data:application/wasm;base64,AGFzbQEAAAABBwFgAn9/AX8DAgEABQMBABAGCQF/AUGAgMAACwcQAgZtZW1vcnkCAANhZGQAAAoJAQcAIAEgAGoL";

function b64ToArrayBuffer(base64) {
    return Base64.decodeArrayBuffer(base64.slice(base64.indexOf(",") + 1)); // strip header
}

const wasmSource = b64ToArrayBuffer(base64File);

const importObject = {};

// create a wasm module
const wasmModule = new WebAssembly.Module(wasmSource);
// create a new instance of our wasm module
const wasmInstance = new WebAssembly.Instance(wasmModule, importObject);
// store the exported functions that are in our wasm instance
const exports = wasmInstance.exports;

console.log(exports) // displays both all our exported functions and our wasm memory
// we can then call our Zig function from JavaScript like so:
console.log(exports.add(3, 7) === 10) // prints true
    </script>
</body>
</html>
```

Tada, you are now an expert at combining Zig with WebAssembly! The End.  
Just kidding. This is the point where many other wasm tutorials leave you, but if you want to do anything more than just adding two numbers together then things get more complicated.

## Calling JS from Zig
We can now call Zig code from JS, but what if we want to call JS from Zig?

Lets modify our main.zig file to contain the following code:
```js
extern fn console_log(a: i32) void;

fn add(a: i32, b: i32) i32 {
    return a + b;
}

export fn print10() void {
    console_log(add(7, 3));
}
```
The `extern` keyword is used to define the signature of an external function (in this case our JS code). This function signature has no body. Even though JS is not staticly typed, we must tell the Zig compiler what type of value we are going to pass into the JS function and what type of data it will return. Next from the JS side we need to define the function we are importing. We do this inside of an object named `env` in the `importObject` we pass into `new WebAssembly.Instance`. 

Here is our new HTML/JS code:
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Zig WASM Demo</title>
</head>
<body>
    <script>
const data = [0,97,115,109,1,0,0,0,1,8,2,96,1,127,0,96,0,0,2,19,1,3,101,110,118,11,99,111,110,115,111,108,101,95,108,111,103,0,0,3,2,1,1,5,3,1,0,16,6,9,1,127,1,65,128,128,192,0,11,7,20,2,6,109,101,109,111,114,121,2,0,7,112,114,105,110,116,49,48,0,1,10,12,1,10,0,65,10,16,128,128,128,128,0,11];

const wasmSource = new Uint8Array(data).buffer;

const importObject = {
    env: {
        console_log(num) {
            console.log(num)
        }
    },
};

const wasmModule = new WebAssembly.Module(wasmSource);
const wasmInstance = new WebAssembly.Instance(wasmModule, importObject);
const exports = wasmInstance.exports;

console.log(exports)
exports.print10()
    </script>
</body>
</html>
```
Now if you run the above HTML code you will now see the value `10` printed into your console. Zig did that!

Also in this example I stopped using base64 because either the base64 encoder or decoder wasn't working properly and was corrupting the wasm binary. So instead I just used a hex editor ([https://hexed.it/](https://hexed.it/)) to convert the wasm file into an array of bytes.

## Printing non-primitive values
We have successfully printed the integer 10, we can also easily print out other primitives such as floats and booleans, but what if we want to print a non-primitive value such as a string or array or object?

Your first intuition might just be to slap `std.debug.print("Hello World");` in your Zig code and expect it to work, but you would be wrong. This would result in a compiler error because printing requires making system calls to the operating system, but remember we are in a freestanding environment and don't have an operating system. This means we have to get into some low level memory management and implement our own system calls API. Now, we could design our own completely unique API, but it will be easier if we keep things standardized by implementing a specification that already exists. Forget Windows which is based on MS-DOS as it is a wretched software. Instead we will implement Linux which is based on Unix/Posix. Linux isn't 100% Posix compliant, but it's mostly Posix compliant.

#### Implementing Linux syscalls
The next step is to go read through a ton of Linux specifications to figure out what we have to do:

Linux documentation: [https://linux.die.net/man/2/write](https://linux.die.net/man/2/write)  
More Linux documentation: [https://man7.org/linux/man-pages/man2/write.2.html](https://man7.org/linux/man-pages/man2/write.2.html)  
Posix documentation: [https://en.wikipedia.org/wiki/Write_(system_call)](https://en.wikipedia.org/wiki/Write_(system_call))

After we finish reading the specification we know know that we must create a function with the signature `ssize_t write(int fd, const void *buf, size_t count);`. However that's ugly C code which is for boomers. Translating it into wasm32 compatible Zig we get `fn write(fd: i32, buf: usize, count: usize) i32;`.

`fd` stands for file descriptor. It can be given three possible values: 0, 1, and 2 which correlate to standard input, standard output, and standard error respectively.

`buf` is stands for buffer. It is a pointer to the location in memory from which to start writing data from.

`count` specifies the number of bytes to write starting from the location of buf.

If the function completes successfully it returns the number of bytes written, however if the function encounters an error -1 is returned;

Note that we aren't compliant unless we handle all possible values of fd correctly, but we're only going to implement fd == 1 and fd == 2. In addition to be compliant we'd have to provide feedback about the type of error that occured, but we aren't going to do that either.

Our new Zig code is this:
```js
extern fn write(fd: i32, buf: usize, count: usize) i32;

fn println(buf: []const u8) void {
    _ = write(1, @intFromPtr(buf.ptr), buf.len);
}

export fn main() void {
    println("Hello World!");
}
```

Note: use `@intFromPtr(buf.ptr)` instead of `@intFromPtr(&buf)` because the former is a pointer to the data and the latter is a pointer to the slice which points to the data.

Our new JavaScript code becomes:
```js
const data = [0,97,115,109,1,0,0,0,1,11,2,96,3,127,127,127,1,127,96,0,0,2,13,1,3,101,110,118,5,119,114,105,116,101,0,0,3,2,1,1,5,3,1,0,17,6,14,2,127,1,65,128,128,192,0,11,127,0,65,0,11,7,17,2,6,109,101,109,111,114,121,2,0,4,109,97,105,110,0,1,10,28,1,26,0,65,1,35,129,128,128,128,0,65,128,128,192,128,0,106,65,12,16,128,128,128,128,0,26,11,11,22,1,0,65,128,128,192,0,11,13,72,101,108,108,111,32,87,111,114,108,100,33,0];

const wasmSource = new Uint8Array(data).buffer;

let memory = null; // create a variable to later hold our wasm memory
const importObject = {
    env: {
        write(fd, addr, len) {
            try {
            	// read the message from the wasm memory's underyling buffer
                let buff = memory.buffer.slice(addr, addr + len);
                // use TextDecoder to convert the raw buffer into a string
                let str = new TextDecoder().decode(buff);
                switch (fd) {
                    case 1:
                        console.log(str); // standard output
                        return len;
                    case 2:
                        console.error(str); // standard error
                        return len;
                }
                return 0; // in the case that 0 bytes were written
            } catch (err) {
                return -1; // return -1 if an error occurs
            }
        }
    },
};

const wasmModule = new WebAssembly.Module(wasmSource);
const wasmInstance = new WebAssembly.Instance(wasmModule, importObject);
const exports = wasmInstance.exports;
// once we create our wasm instance we can store its memory into the `memory` variable
memory = exports.memory; 

exports.main()
```

If you run the above code "Hello World!" will be printed into your console.

## Handling errors and panics
In native Zig when the program panics it will display the panic information in the console. If you're smart you'll realize this has the same issue we encountered when we tried to do `std.debug.print`: panicing also requires syscalls. As a result the Zig compiler won't let us compile any code to wasm that could potentially error.

Zig won't allow us to export any functions that could potentially throw an error. For example the following program will NOT compile because bar can return an error.
```js
const SomeError = error{
    SomethingBadHappened
};
fn foo(num: i32) !i32 {
    if (num < 10) {
        return num;
    }
    return SomeError.SomethingBadHappened;
}
export fn bar(num: i32) !i32 {
    return foo(num);
}
```

To fix this you need to handle all errors yourself. If you are certain that the error will never occur you can just use `catch unreachable` and change the `!i32` to `i32`
```js
const SomeError = error{
    SomethingBadHappened
};
fn foo(num: i32) !i32 {
    if (num < 10) {
        return num;
    }
    return SomeError.SomethingBadHappened;
}
export fn bar(num: i32) i32 {
    return foo(num) catch unreachable;
}
```
However if the runtime reaches `unreachable` this is undefined behavior. The function might not return anything. It might return a garbage value. Nothing is for certain. Therefore you must properly handle the errors yourself like so:
```js
extern fn write(fd: i32, buf: usize, count: usize) i32;

pub fn panic(msg: []const u8) noreturn {
    _ = write(2, @intFromPtr(msg.ptr), msg.len);
    @trap();
}

const SomeError = error{
    SomethingBadHappened
};

fn foo(num: i32) !i32 {
    if (num < 10) {
        return num;
    }
    return SomeError.SomethingBadHappened;
}

export fn bar(num: i32) i32 {
    return foo(num) catch panic("zig wasm panic");
}
```
If the code reaches an error it calls panic which logs a custom error to the console and then calls @trap which exits the program and logs `Uncaught RuntimeError: unreachable` to the console with a Web Assembly stack trace.

# Entropy
Web Assembly is a perfect sandbox. There is no entropy which means a wasm program will run exactly the same every time unless you call to JavaScript. If we want to use random numbers in our wasm program we can use the following:
```js
const std = @import("std");
const RndGen = std.rand.DefaultPrng;

var rnd: std.rand.DefaultPrng = undefined;

export fn init(seed: u64) void {
    rnd = RndGen.init(seed);
}

export fn random() i32 {
    return rnd.random().int(i32);
}
```
We cannot initialize variables globally, but we can set them to undefined and then create an init function to call which initializes our random number generator. The JavaScript side of this is the following. Note how for a u64 we must pass in an BigInt.
```js
const wasmInstance = new WebAssembly.Instance(wasmModule, importObject);
const exports = wasmInstance.exports;

exports.init(BigInt(Math.random() * 10000 | 0));
console.log(exports.random())
console.log(exports.random())
console.log(exports.random())
console.log(exports.random())
```

# Sending strings to Zig
We already went over how to send strings from Zig to the JS console. If we want to send a string from JS to Zig we can use a similiar strategy. Similiar to the entropy example we can create uninitialized global arrays and then initialize it from JS and from there we figure out a way to manage all the strings we send to Zig. Basically we write our own implementations of malloc and free.






