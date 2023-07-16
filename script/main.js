const https = require("https");
const fs = require("fs");
const port = 443;
const ipAddress = '192.168.123.111';
const options = {
  key: fs.readFileSync("c:/private.key"),
  cert: fs.readFileSync("c:/certificate.crt"),
  
};
const server = https.createServer(options, (req, res) => {
  // 요청 처리
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, HTTPS!');
});

server.listen(port,ipAddress, () => {
  console.log('HTTPS server is running');
});