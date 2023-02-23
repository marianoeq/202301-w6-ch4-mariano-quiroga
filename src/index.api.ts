// import http from 'http';
// import url from 'url';
// import * as dotenv from 'dotenv';
// import { getAllKnowledge } from './methods.js';

// dotenv.config();

// const PORT = process.env.PORT || '4500';

// const server = http.createServer((req, res) => {
//   switch (req.method) {
//     case 'GET':
//       if (!req.url) {
//         server.emit('error', new Error('Invalid URL'));
//         return;
//       }

//       res.writeHead(200, { 'Content-Type': 'application/json' });

//       break;
//     case 'POST':
//       break;
//     case 'PATCH':
//       break;
//     case 'DELETE':
//       break;
//     default:
//       '';
//   }

//   res.end();
// });

// server.on('listening', () => {
//   console.log('listening on ' + PORT);
// });
// server.listen(PORT);
