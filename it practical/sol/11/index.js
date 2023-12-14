import http from "http";

const host = "localhost";
const port = 10000;

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Hello world, This is my Node.js server");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Listening on port ${port}`);
});