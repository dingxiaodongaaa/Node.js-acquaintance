const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

// 创建新的 http 服务器并返回
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader = ('Content-Type', 'text/plain')
  res.end('hello world\n')
})

// 服务器监听指定的端口和主机名，当服务器就绪之后回调函数就会执行
server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}`)
})
