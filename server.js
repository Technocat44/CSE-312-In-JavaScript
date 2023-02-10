/** Reference: CSE 312 Lecture 26 Example Architecture 2

https://www.youtube.com/watch?v=GCqClBBEDfA&list=PLOLBRzMrfILdJjAcdUMVW_70G5mXpKBSN&index=26&t=765s

*/

// Buffer.from() || similar to .encode() 
// https://www.educative.io/answers/what-is-bufferfrom-in-nodejs

const colors = require('colors')

const PORT = 8080;
const HOST = '0.0.0.0';

const net = require('net');

const server = net.createServer()
const { buildOKResponse } = require("./response/response")
const { headerParser } = require("./response/headerParser")
 
// (socket) => {
//     socket.on("data", function(data) {
//         const clientId = socket.remoteAddress + ":" + socket.remotePort
//         console.log(`The client id is : ${clientId} and this is the data\r\n${data}`.blue.bold)
//     })
//     socket.write(buildOKResponse('text/plain; charset=utf-8', "Homepage"));

// })

server.listen( {host: HOST,
  port: PORT,
  exclusive: true,
});

server.on("connection", (socket) => {
    socket.on("data", function(data) {
        const clientId = socket.remoteAddress + ":" + socket.remotePort
        // want to intercept data and parse it
        console.log(`The client id is : ${clientId}`.blue.bold)
        const [headerDict, body, requestType] = headerParser(data);
        console.log(`The headerDict ${headerDict}, the body ${body.toString()}, the requestType ${requestType}`)
    })
    socket.write(buildOKResponse('text/plain; charset=utf-8', "Homepage"));
})

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') { 
        console.log('Address in use, retrying...'); 
        setTimeout(() => { 
          server.close(); 
          server.listen(PORT, HOST); 
        }, 1000); 
      } 
})

// server.on('data', (data) => {
//    console.log(`this is the data\r\n${data}`.blue.bold)
// })


