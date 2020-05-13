const net = require('net')

class Request {
  // method, url = host + port +path
  constructor(options) {
    this.method = options.method || 'get';
    this.host = options.host;
    this.port = options.port || 80;
    this.path = options.path || "/";
    this.body = options.body || {};
    this.headers = options.headers || {};
    if(!this.headers['Content-Type']) {
      this.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    if(this.headers['Content-Type'] === 'application/json'){
      this.bodyText = JSON.stringify(this.body)
    }else if(this.headers['Content-Type'] === 'application/x-www-form-urlencoded'){
      this.bodyText = Object.keys(this.body).map(key => `${key}=encodeURIComponent(${this.body[key]})`).join('&')
    }

    this.headers['Content-Type'] = this.bodyText.length
  }

  toString(){
    return `${this.method} ${this.path} HTTP/1.1\r
      ${Object.keys(this.headers).map(key => `${key}: ${this.headers[key]}`).join('\r\n')}
      \r
      ${this.bodyText}
    `
  }

  open(method, url){

  }
  send(connection) {
    return new Promise((resolve, reject)=>{
      const parser = new ResponseParse;
      if(connection){
        connection.write(this.toString())
      }else{
        connection = net.createConnection({
          host: this.host,
          port: this.port,
        }, ()=>{
          connection.write(this.toString())
        })
      }
      connection.on('data', (data)=>{
        parser.receive(data.toString())
        if(parse.isFinished){
          resolve(parser.response)
        }
        // resolve(data.toString())
        connection.end();
      })
      connection.on('error', (err)=>{
        reject(err);
        connection.end()
      })
    })

  }

}

class response {

}

class ResponseParse {
  constructor(){
    this.WAITING_STATUS_LINE = 0
    this.WAITING_STATUS_LINE_END = 0
    this.WAITING_HEADER__NAME = 2
    this.WAITING_HEADER_SPACE = 3
    this.WAITING_HEADER_VALUE = 4
    this.WAITING_HEADER_LINE_END = 5
    this.WAITING_HEADER_BLOCK_END = 6
    this.WAITING_BODY = 7

    this.current = this.WAITING_STATUS_LINE
    this.statusLine = ''
    this.headers = {}
    this.headerName = "";
    this.headerValue = "";
    this.bodyParser = null
  }

  get isFinished() {
    return this.bodyParser && this.bodyParser.isFinished
  }

  get response() {
    this.statusLine.match(/HTTP\/1.1 ([0-9]+) ([\s\S]+)/);
    return {
      statusCode: RegExp.$1,
      statusText: RegExp.$2,
      headers: this.headers,
      body: this.bodyParser.content.join('')
    }
  }

  receive(string){
    for (let i = 0; i < string.length; i++) {
      this.receiveChar(string.charAt(i))
    }
  }
  receiveChar(char){
    if(this.current === this.WAITING_STATUS_LINE){
      if(char === '\r'){
        this.current = this.WAITING_HEADER_LINE_END
      } if(char === '\n'){
        this.current = this.WAITING_HEADER__NAME
      }else {
        this.statesLine += char
      }
    }
    else if (this.current === this.WAITING_STATUS_LINE_END) {
      if (char === '\n') {
        this.current = this.WAITING_HEADER__NAME
      }
    }else if(this.current === this.WAITING_HEADER__NAME){
      if(char === ':'){
        this.current = this.WAITING_HEADER_SPACE
      }else if(char === '\r'){
        this.current = this.WAITING_HEADER_BLOCK_END
        if(this.header['Transfer-Encoding'] === 'chunked'){
          this.bodyParser = new TrunkedBodyParse()
        }
      }else {
        this.headerName += char
      }
    } else if (this.current === this.WAITING_HEADER_SPACE) {
      if (char === ' ') {
        this.current = this.WAITING_HEADER_VALUE
      }
    }else if (this.current === this.WAITING_HEADER_VALUE) {
      if(char === '\r'){
        this.current = this.WAITING_HEADER_LINE_END
        // 处理header多行问题
        this.headers[this.headerName] = this.headerValue
        this.headerName = ""
        this.headerValue = ""
      }else {
        this.headerValue += char
      }
    }else if (this.current === this.WAITING_HEADER_LINE_END) {
      if (char === '\n') {
        this.current = this.WAITING_HEADER__NAME;
      }
    }else if(this.current === this.WAITING_HEADER_BLOCK_END){
      if(char === '\n'){
        this.current = this.WAITING_BODY
      }
    }else if(this.current === this.WAITING_BODY){
      this.bodyParser.receiveChar(char)
    }
  }
}

class TrunkedBodyParse {
  constructor() {
    this.WAITING_LENGTH = 0
    this.WAITING_LENGTH_LINE_END = 1
    this.READING_TRUNK = 2
    this.WAITING_NEW_LINE = 3
    this.WAITING_NEW_LINE_END = 4
    this.length = 0
    this.conetnt = []
    this.isFinished = false
    this.current = this.WAITING_LENGTH
  }
  receiveChar(char){
    if(this.current === this.WAITING_LENGTH){
      if(char === '\r'){
        if(this.length === 0){
          this.isFinished = true
        }
        this.current = this.WAITING_LENGTH_LINE_END
      }else {
        this.length *= 10
        this.statesLine += char.charCodeAt(0) - '0'.charCodeAt(0)
      }
    }else if(this.current === this.WAITING_LENGTH_LINE_END){
      if(char === '\n'){
        this.current = this.READING_TRUNK
      }
    }else if(this.current === this.READING_TRUNK){
      this.conetnt.push(char)
      this.length--
      if(this.length === 0){
        this.current = this.READING_TRUNK
      }
    }else if(this.current === this.WAITING_NEW_LINE){
      if(char === '\r'){
        this.current = this.WAITING_NEW_LINE_END
      }
    }else if(this.current === this.WAITING_LENGTH_LINE_END){
      if(char === '\n'){
        this.current = this.WAITING_LENGTH
      }
    }
  }
}

void async function() {
  let request = new Request({
    method: 'POST',
    host: "127.0.0.1",
    path: "/",
    port: "8088",
    headers:{
      ["X-Foo2"]: "customed",
    },
    body: {
      name: 'winter'
    }
  })
    let response = await request.send()
    console.log(response)
}();



// let request = new Request({
//   method: 'POST',
//   host: "127.0.0.1",
//   path: "/",
//   port: "8088",
//   headers:{
//     ["X-Foo2"]: "customed",
//   },
//   body: {
//     name: 'winter'
//   }
// })
// console.log(request.toString())
// request.wirte(request.toString())
