import http from 'http';
import url from 'url';

const PORT = process.env.PORT || '4500';

const server = http.createServer((req, res) => {
  if (!req.url) {
    server.emit('Invalid URL', new Error('This URL does not exist'));
    return;
  }

  if (req.method !== 'GET') {
    res.write(`This ${req.method} is not acceptable`);
    return;
  }

  const { pathname, search } = url.parse(req.url);

  if (pathname !== '/calculator') {
    server.emit('error', new Error('Invalid URL'));
    return;
  }

  const urlParams = new URLSearchParams(search!);

  const a = Number(urlParams.get('a'));
  const b = Number(urlParams.get('b'));

  if (!a || !b) {
    throw new Error('Please insert both numbers');
  }
  const sum = a + b;
  const rest = a - b;
  const multiply = a * b;
  const divide = a / b;

  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.write(`
          <html>
            <head>
              <title>Calculator</title>
              <link rel="shortcut icon" href="#">
            </head>
            <body>
              <h1>Calculator Result</h1>
              <p>${a} + ${b} = ${sum}</p>
              <p>${a} - ${b} = ${rest}</p>
              <p>${a} * ${b} = ${multiply}</p>
              <p>${a} / ${b} = ${divide}</p>
            </body>
          </html>
        `);

  res.end();
});

server.on('listening', () => {
  console.log('listening on port' + PORT);
});

server.listen(PORT);
