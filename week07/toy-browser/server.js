const http  = request("http")

const server = http.createServer((req, res)=>{
  console.log("request received")
  console.log(req.headers)
  res.setHeader('Content-Type': 'text/plain');
  res.setHeader('X-Foo', 'bar')
  res.writeHead(200, { 'Content-type': 'text/plain' })
  res.end(
      `<html maa=a>
    <head>
      <style>
    body div #myid{
      width: 100px;
      background-color: #ff5000;
    }
    body div img{
      width: 300px;
      background-color: #ff1111;
    }
      </style>
    </head>
    <body>
      <div>
        <img id="myid" />
        <img />
      </div>
    </body>
    </html>`
  )
})

server.listen(8088)