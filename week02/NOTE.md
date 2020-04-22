编程通识别

语言按语法分类 非形式语言 中文，英文 形式语言（乔姆斯基谱系） 0型 无限制文法 1型 上下文无关文法 2型 上下文相关文法 3型 正则文法

产生式（BNF） 用尖括号括起来的名称来表示语法结构名 语法结构分成基础结构和需要用其他语法结构定义的复合结构 基础结构 终结符 符合结构 非终结符 引号和中间的字符表示终结符 可以有括号 *表示重复多次 |表示或 +表示至少一次

四则运算 1+2*3 终结符 Number 非终结符 MultiplicativeExpression addtiveExpression

产生式理解乔姆斯基谱系 0型 无限制文法 ?::=? 1型 上下文相关文法 [?::=?**? 2型 上下文无关文法**]() **[?::=? 3型 正则文法]() [::=]()[]()[::?]()[]()**

**[其他产生式 AdditiveExpression: MultiplicativeExpression AdditiveExpression+ MultiplicativeExpression AdditiveExpression- MultiplicativeExpression

语言的分类 形式语言-用途 数据描述语言 编程语言 形式语言-表达方式 声明式语言 命令型语言

图灵完备性 命令式-图灵机 goto if和while 声明式-lambda 递归

动态与静态 动态 在用户的社保/在线服务器上 产品实际运行时 Runtime 静态 在程序员社保上 产品开发时 Compiletime

类型系统 动态类型系统和静态类型系统 强类型和若类型 String+number Stinrg == Boolean 复合类型 结构体 函数签名 子类型 逆变/协变

一般命令式编程语言 Atom - Expression - Statement - Structure - Program

JavaScript Atom Expression Statement Structure Program/Module

Atom Grammar Latieral Variable Keywords WhiteSpace Line Terminator

Runtime Types Exection Context

Types Number String Boolean object Null Undefined Symbol

Number IEE 754 Double Float Sign (1) Exponent (11) Fraction (52)

Number-Grammar DecimalLiteral 0 0. .2 1e3 BinaryIntegerLiteral 0b111 OctallintegerLiteral 0o10 HexIntegerLiteral OxFF

String Character Code Point Encoding ADCII USC GB GB2312 GBK(GB13000) GB18030 ISO-8859 BIG 5

String-Grammar "abc" 'abc' `abc`

Boolean true false

Null & Undefined null undefined void 0;

通过这周的学习，了解了语言产生的语法，语言的分类，语言所具备的特征，从编程语言，最小项模块这个角度去分析JavaScript，使我对JavaScript有了深入的了解。]()**
