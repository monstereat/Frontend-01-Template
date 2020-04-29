通过两节课的学习，使我对表达式，表达式编译过程，程序执行过程有了更加深入的了解，在这之 前对于表达式的理解，仅仅停留在使用的程度，对于工作中经常用到的语句，循环，异常捕获等异常 错误的解决，通常没有什么解决的思路，通过老师的讲解，对这部分知识的难点，需要注意的点有 了深刻的认识，系统可以在工作中学以致用，不断提升自己。 Expression a.b a[b] foo`string` super.b super['b'] new.target new Foo()

Call foo() super() foo()['b'] foo().b

Left Handside & Right Handside a.b = c a+b = c

Update a++ a-- --a ++a

Unary delete a.b void foo() typeof a +a -a ~a !a await a

Exponental **

Multiplicative */% Additive +- Shift <<>>>>> Relationship <><=>=instanceofin

# Equality

# !=

!== Bitwise &^|

Logical && || Conditional ?:

Completion Record [[type]]: normal,break,continue,return,or throw [[value]]Types [[target]]:label

简单语句 ExpressionStatement EmptyStatement DebuggerStatement ThrowStatement ContinueStatement BreakStatement ReturnStatement 复合语句 BlockStatement IfStatement SwitchStatement IterationStatement WithStatement LabelledStatement TryStatement BlockStatement {}

Iteration while() do while() for(;;) for( in ) for( of )

标签 循环 break continue LabelledStatement IterationStatement ContinueStatement BreakStatement SwitchStatement

try try {

} catch( ) {

} finally {

}

声明 FunctionDeclaration GeneratorDeclaration AsyncFunctionDeclaration AsyncGeneratorDeclaration VariableStatement ClassDeclaration LexicalDeclaration

声明 function class function * const async function let async function var

预处理 var a = 2 void function(){ a = 1 return var a }()

```
console.log(a)
```

作用域 var a = 2; void function (){ a = 1; { var a; } }(); console.log(a);

Object
