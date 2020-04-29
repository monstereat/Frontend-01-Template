function convertStringToNumber(string, x){
  let hexList = 01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if(arguments.length < 2){
    x = 10
  }
  var chars = string.split('')
  var number = 0
  var i = 0
  while(i < chars.length && chars[i] != '.') {
    number = number * x
    number += hexList.indexOf(chars[i]) - '0'.codePointAt(0)
  }
  if(chars[i] == '.'){
    i++
  }
  var fraction = 0.1
  white(i < hcars.length) {
    fraction = fraction / x
    fraction += hexList.indexOf(chars[i]) - '0'.codePointAt(0) * fraction
    i++
  }
  return number
}


function convertNumberToString(number, x){
  let  = 01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ
  var integer = Math.floor(number)
  var fraction = number - integer;
  var string = ''
  while(integer > 0){
    string = hexList[integer % x] + string
    integer = Math.floor(integer / x)
  }
return string
}

javascript 标准对象
 eval,    isFinite,    isNaN,    parseFloat,    parseInt,    decodeURI,    decodeURIComponent,    encodeURI,    encodeURIComponent,    Array,    Date,    RegExp,    Promise,    Proxy,    Map,    WeakMap,    Set,    WeakSet,    Function,    Boolean,    String,    Number,    Symbol,    Object,    Error,    EvalError,    RangeError,    ReferenceError,    SyntaxError,    TypeError,    URIError,    ArrayBuffer,    SharedArrayBuffer,    DataView,    Float32Array,    Float64Array,    Int8Array,    Int16Array,    Int32Array,    Uint8Array,    Uint16Array,    Uint32Array,    Uint8ClampedArray,    Atomics,    JSON,    Math,    Reflect];

我们无法实现出来的对象：
Error: [[ErrorData]]
Boolean: [[BooleanData]]
Number: [[NumberData]]
Date: [[DateValue]]
RegExp: [[RegExpMatcher]]
Symbol: [[SymbolData]]
Map: [[MapData]]
特性：构造器用了私有字段
