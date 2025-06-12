<h1 style="border-bottom: none; margin-bottom: 0px;">WHY? NullPointerException while assigning to field of non-null object</h1>
<div style="border-bottom: 1px solid #aaa; padding-bottom: 12px;">
<div style="float: left; margin-right: 8px;"><img src="https://avatars.githubusercontent.com/u/41875927?v=4" height="50px"></div>
<div>Written by <a href="https://github.com/vexcess/">VExcess</a>
<br>
<span style="color: gray">8 minute read • June 12, 2025</span></div>
</div>
<br>

Here is an odd behavior I came across. Given the following code:
```java
class Main {
    public static class Foo {
        public int idk = 0;
    }
    
    public static Foo foo = null;
    
    public static int bar() {
        foo = new Foo();
        foo.idk = 111;
        System.out.println("AAA foo.idk: " + foo.idk);
        return 123;
    }

    public static void main(String[] args) {
        foo.idk = bar();
        System.out.println("BBB foo.idk: " + foo.idk);
    }
}
```
#### I would expect this code to behave like so if the expression `foo.idk = bar()` is evaluated left to right:
1) foo is null
2) a NullPointerException is thrown because we are attempting to assign to a variable that is null

Expected Output:
> Exception in thread "main" java.lang.NullPointerException: Cannot assign field "idk" because "Main.foo" is null

#### Or if the expression is evaluated right to left I would expect this behavior:
1) foo is null
2) foo gets assigned to a new instance of Foo
3) foo.idk gets assigned to 111
4) the value of foo.idk (111) is printed
5) foo.idk gets assigned to 123
6) the value of foo.idk (123) is printed

Expected Output:
> AAA foo.idk: 111  
> BBB foo.idk: 123

#### However neither of the expected behaviors match the observed behavior which is this:
1) foo is null
2) foo gets assigned to a new instance of Foo
3) foo.idk gets assigned to 111
4) the value of foo.idk (111) is printed
5) a NullPointerException is throw while assigning foo.idk to 123

Output:
> AAA foo.idk: 111  
> Exception in thread "main" java.lang.NullPointerException: Cannot assign field "idk" because "Main.foo" is null

A NullPointerException is thrown while assigning to the variable `foo` during step 5 despite the fact that `foo` is NOT null (demonstrated by printing the value of `foo.idk` in step 4 without error)

## This is the official behavior
According to the Java specification [https://docs.oracle.com/javase/specs/jls/se23/html/jls-15.html#jls-15.26.1](https://docs.oracle.com/javase/specs/jls/se23/html/jls-15.html#jls-15.26.1) this is how Java must behave.

If the left-hand operand expression is a field access expression e.f (§15.11), possibly enclosed in one or more pairs of parentheses, then:  
- First, the expression e is evaluated. If evaluation of e completes abruptly, the assignment expression completes abruptly for the same reason.  
- Next, the right-hand operand is evaluated. If evaluation of the right-hand expression completes abruptly, the assignment expression completes abruptly for the same reason.  
- Then, if the field denoted by e.f is not static and the result of the evaluation of e above is null, then a NullPointerException is thrown.  
- Otherwise, the variable denoted by e.f is assigned the value of the right-hand operand as computed above.

## It's not just Java
I decided to check if other languages also have this weird quirk. Turns out most do! I tested Java, C#, Dart, JavaScript, and Python. All have this odd behavior.

As pointed out to me by Donkey Dan the uwu man, C is the exception to this. It simply decides that modifying the left side of an assignment in the right side is undefined behavior.
[https://en.cppreference.com/w/c/language/eval_order.html](https://en.cppreference.com/w/c/language/eval_order.html)
> The side effect of updating lhs is sequenced after the value computations, but not the side effects of lhs and rhs themselves and the evaluations of the operands are, as usual, unsequenced relative to each other (so the expressions such as i=++i; are undefined)

## Expressing the behavior programmatically
The observed behavior seems to function like so
```java
var left = resolve(assignmentExpression.left.objectName);
var right = evaluate(assignmentExpression.right);
if (left == null) {
    throw NullPointerException();
} else {
    left[expression.left.fieldName] = right;
}
```
But my expected behavior is that the code would function like one of the following two examples
```java
var left = resolve(assignmentExpression.left.objectName);
if (left == null) {
    throw NullPointerException();
} else {
    var right = evaluate(assignmentExpression.right);
    left[expression.left.fieldName] = right;
}
```
or
```java
var right = evaluate(assignmentExpression.right);
var left = resolve(assignmentExpression.left.objectName);
if (left == null) {
    throw NullPointerException();
} else {
    left[expression.left.fieldName] = right;
}
```

## Java bytecode
Java is run in the JVM which is a stack machine. Perhaps if we look at the bytecode we can understand what would have caused this peculiar behavior to be chosen by language implementations. I decompiled the Java code using `javap -v`. Here is the relevant section of the constant pool
```
Constant pool:
   #1 = Methodref          #2.#3          // java/lang/Object."<init>":()V
   #2 = Class              #4             // java/lang/Object
   #3 = NameAndType        #5:#6          // "<init>":()V
   #4 = Utf8               java/lang/Object
   #5 = Utf8               <init>
   #6 = Utf8               ()V
   #7 = Class              #8             // Main$Foo
   #8 = Utf8               Main$Foo
   #9 = Methodref          #7.#3          // Main$Foo."<init>":()V
  #10 = Fieldref           #11.#12        // Main.foo:LMain$Foo;
  #11 = Class              #13            // Main
  #12 = NameAndType        #14:#15        // foo:LMain$Foo;
  #13 = Utf8               Main
  #14 = Utf8               foo
  #15 = Utf8               LMain$Foo;
  #16 = Fieldref           #7.#17         // Main$Foo.idk:I
  ...
  #36 = Methodref          #11.#37        // Main.bar:()I
```
And here are the relevant instructions in main
```
Code:
      stack=2, locals=1, args_size=1
         0: getstatic     #10                 // Field foo:LMain$Foo;
         3: invokestatic  #36                 // Method bar:()I
         6: putfield      #16                 // Field Main$Foo.idk:I
```

### Constant pool
The first important part the constant pool is #10
> #10 = Fieldref           #11.#12        // Main.foo:LMain$Foo;

The `Fieldref` means the variable is a reference to a field. The `Main.foo:LMain$Foo;` can be broken up into 3 parts:
- `Main` - the variable is declared in the class `Main`
- `foo` - the variable is named "foo"
- `LMain$Foo`
    - `L` - the variable is a pointer
    - `Main$Foo` - the variable points to an instance of the class `Foo` which is declared in the class `Main`

Describing #16
> #16 = Fieldref           #7.#17         // Main$Foo.idk:I

\#16 is also a reference to a field. `Main$Foo.idk:I` can also be broken down
- `Main$Foo` - the variable is a property of an instance of the class `Foo` defined in the class `Main`
- `idk` - the variable is named "idk"
- `I` - the variable is an integer

And lastly, #36
> #36 = Methodref          #11.#37        // Main.bar:()I

The `Methodref` means the variable is a reference to a method. And the `Main.bar:()I` is broken down as follows:
- `Main` - the method is defined in the class `Main`
- `bar` - the method is named "bar"
- `()` - the method takes no arguments
- `I` - the method returns an integer


### Main bytecode
There are three main instructions performed here. Helpfully, Wikipedia gives us documenation about the operands and behaviors of each of the bytecodes [https://en.wikipedia.org/wiki/List_of_Java_bytecode_instructions](https://en.wikipedia.org/wiki/List_of_Java_bytecode_instructions)
```
getstatic     #10                 // Field foo:LMain$Foo;
invokestatic  #36                 // Method bar:()I
putfield      #16                 // Field Main$Foo.idk:I
```

#### bytecode documentation
| Mnemonic | Other bytes [count]: [operand labels] | Stack [before] → [after] | Description |
| -------- | ------- | -------- | ------- |
| getstatic | 2: indexbyte1, indexbyte2 | 	→ value | get a static field *value* of a class, where the field is identified by field reference in the constant pool *index* (indexbyte1 << 8 \| indexbyte2) |
| invokestatic | 2: indexbyte1, indexbyte2 | [arg1, arg2, ...] → result | invoke a static method and puts the result on the stack (might be void); the method is identified by method reference *index* in constant pool (indexbyte1 << 8 \| indexbyte2) |
| putfield | 2: indexbyte1, indexbyte2 | objectref, value →	| set field to *value* in an object *objectref*, where the field is identified by a field reference *index* in constant pool (indexbyte1 << 8 \| indexbyte2) |

Each opcode can take operands from the java bytecode and take operands from the stack. We see that each of these three instructions takes a 2 byte integer as an operand. This 2 byte integer is an index into the constant pool which specifies which variable to operate on.

##### getstatic     #10
getstatic doesn't pop any values off the stack. It simply takes the index, in this case #10, to lookup our variable `foo` which is a pointer. It then dereferences the pointer (gets the value the pointer was pointing to) and pushes the value onto the stack. In this case the value is null so our stack looks like this
```
null
```

##### invokestatic  #36
invokestatic takes the index, in this case #36, to lookup our method `bar`. Because `bar` has no arguments, no values are popped off the stack. invokestatic then calls our method and pushes the return value (in our case an integer of value 123) to the stack. The stack now looks like so
```
123
null
```

##### putfield      #16
putfield takes the index, in this case #16, to lookup the field to set (in this case the field "idk" of type integer). It then pops the top value off the stack to be the value it will set the object's field to. Then, it pops the next value off the stack to be the object it will set the field value on. If the object value is null (in our case it is) a NullPointerException is thrown, otherwise the field on the object is set to the value. putfield does not push anything to the stack so the stack is now empty.

#### Defining this programmatically
I think the above behavior I walked through in English can be defined programmatically something like this:
```java
Array<FieldRef|MethodRef> constantPool = [];
constantPool[10] = FieldRef(Field(
    name: "foo",
    value: Value(Pointer<Foo>(Value(null)))
));
constantPool[36] = MethodRef(Method<Int>(){ ... });
constantPool[16] = FieldRef(Field(
    name: "idk",
    value: null
));

Value getstatic(Short index) {
    // ref = FieldRef(Field(Value(Pointer<Foo>(Value(null)))))
    FieldRef ref = constPool[index];

    // field = Field(Value(Pointer<Foo>(Value(null))))
    Field field = ref.dereference();

    // pointer = Pointer<Foo>(Value(null))
    Pointer pointer = field.value.unwrap();

    // value = Value(null)
    Value value = pointer.dereference();

    // Value(null)
    return value;
}

Value invokestatic(Short index) {
    // ref = MethodRef(Method<Int>(){ ... })
    MethodRef ref = constPool[index];

    // method = Method<Int>(){ ... }
    Method method = ref.dereference();

    // value = Value(123)
    Value value = method();

    // Value(123)
    return value;
}

void putfield(Short index) {
    // ref = FieldRef(Field(String("idk")))
    FieldRef ref = constPool[index];

    // ref = Field(String("idk"))
    Field field = ref.dereference();
 
    // stack state: [Value(null), Value(123)]
    Value value = stack.pop();
    // stack state: [Value(null)]
    Value object = stack.pop();
    // stack state: []

    if (object == Value(null)) {
        // this is where we exit
        throw new NullPointerException();
    } else {
        object.set(field.name, value);
    }
}

stack.push(
    getstatic(10) // returns Value(null)
)
// stack state: [Value(null)]

stack.push(
    invokestatic(36) // returns Value(123)
)
// stack state: [Value(null), Value(123)]

putfield(16) // throws NullPointerException
```

## Insights
Now that I've walked through the bytecode I understand why Java doesn't throw an exception as soon as the left-hand side is evaluated to be null. It is because the JVM doesn't know it's performing an assignment until it has already evaluated the operands. This is because the operands to an instruction must already be on the stack before the moment an instruction is reached. So to throw an exception as soon as the left-hand side of the assignment is evaluted as null the JVM would need to inject extra opcodes to check for null immediately. Something like
```
getstatic     #10
checkifnull
invokestatic  #36
putfield      #16
```
However, the Java designers did not do this because more opcodes in the binary means a larger binary size, slower execution, and potentially a wasted opcode if a new `checkifnull` opcode was added (each opcode is a single byte allowing only 256 opcodes to exist; they must be used sparingly).

## Solutions
However, I can think of two ways that the JVM could avoid its weird behavior without using extra opcodes.

### Solution 1 - Make instructions operate on pointers rather than values
1) Make getstatic push a pointer onto the stack rather than a value
2) Make putfield take the pointer off the stack, then dereference it before operating on it

This would fix the null error on a non-null value by avoiding dereferencing `foo` until we reach putfield. However, I imagine this solution might have performance overhead in other scenarios resulting from constantly creating pointers from values just to dereference the pointers later.

### Solution 2 - Run invokestatic before getstatic
1) Swap invokestatic and getstatic
2) Swap the order in which values are popped off the stack in the implementation of putfield

This would mean the JVM is evaluating the right-hand side of the assignment expression before the left-hand side. This would fix the unintuitive behavior by waiting to resolve the `foo` until after evaluating `bar`. I can't think of any potential downsides of this. After all, right to left is how chained assignment expressions are interpreted, why not make it how a single assignment expression is evaluated.
```java
a = b = c
// same as
b = c
a = c
// rather than
a = b
b = c
```

## Information wanted!
If you are a compiler developer or a JVM maintainer, I would love to hear why Java (along with other languages) do not evaluate assignment expressions right to left as described in my "Solution 2". Is evaluating it left to right somehow faster? Is there some downside to Solution2 that I can't think of? Please let me know.