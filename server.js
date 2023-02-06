/** Reference: CSE 312 Lecture 26 Example Architecture 2

https://www.youtube.com/watch?v=GCqClBBEDfA&list=PLOLBRzMrfILdJjAcdUMVW_70G5mXpKBSN&index=26&t=765s

*/

// Buffer.from() || similar to .encode() 
// https://www.educative.io/answers/what-is-bufferfrom-in-nodejs


function buildResponse(responseCode, mimetype, content) {
    let response = "HTTP/1.1" + responseCode + "\r\n";
    response += "Content-Type: " + mimetype + "\r\n";
    response += "Content-Length: " + content.length + "\r\n";
    response += "\r\n\r\n";
    return Buffer.concat([Buffer.from(response), Buffer.from(content)])
}

function buildOKResponse(mimetype, content) {
    let response = buildResponse("200", mimetype, Buffer.from(content));
    return response;
}


const net = require('net');

const server = net.createServer((socket) => {
    socket.on("data", function(data) {
        const clientId = socket.remoteAddress + ":" + socket.remotePort
        console.log("The client id is : " + clientId)
    })
    socket.write(buildOKResponse('text/plain; charset=utf-8', "Hello there"));

})

server.listen( {host: '0.0.0.0',
  port: 8080,
  exclusive: true,
});

