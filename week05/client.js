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
    return new Promise((resolve, reject){
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
      client.on('data', (data)=>{
        resolve(data.toString())
        client.end();
      })
    })

  }

}

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

request.send()

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
