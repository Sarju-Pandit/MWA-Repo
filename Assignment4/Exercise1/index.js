const Rx = require('rx');
const http = require('http');
const url = require('url');
const { fork } = require('child_process');

const requests_ = new Rx.Subject();

function fileReader(e) {
  let address = e.req.url;
  q = url.parse(address, true);
  q = q.query;

  if(q.url == undefined) return;

  const childProcess = fork('fileReader.js');
  childProcess.send(q);
  childProcess.on('message', src => {
      e.res.writeHead(200, { 'Content-Type': 'text/plain' });
      e.res.end(src)
  })
}

requests_.subscribe(fileReader)

const hostname = 'localhost';
const port = 8080;

http.createServer((req, res) => {
  requests_.onNext({ req: req, res: res });
}).listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});