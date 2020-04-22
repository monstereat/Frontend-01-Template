- 写一个正则表达式 匹配所有 Number 直接量

  ```
  /^(\.\d+|(0|[1-9]\d*)\.?\d*?)([eE][-\+]?\d+)?$|^0[bB][01]+$|^0[oO][0-7]+$|^0[xX][0-9a-fA-F]+$/
  ```

- 写一个 UTF-8 Encoding 的函数

  ```js
  function strToUTF8(str){
    return Uint8Array.from(encodeURIComponent(str).replace(/%(..)/g,(m,v)=>{return String.fromCodePoint(parseInt(v,16))}), c=>c.codePointAt(0))
  }
  ```

  

- 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号（老师答案，还有待研究怎么写出来的）

  ```
  '(?:[^'\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*'
  ```

