function buildResponse(responseCode, mimetype, content) {
    let response = "HTTP/1.1 " + responseCode + "\r\n";
    response += "Content-Type: " + mimetype + "\r\n";
    console.log(`This is the content length ${content.length}`.red.bold)
    response += "Content-Length: " + content.length;
    response += "\r\n\r\n";
    return Buffer.concat([Buffer.from(response), Buffer.from(content)])
}

function buildOKResponse(mimetype, content) {
    let response = buildResponse("200 OK", mimetype, Buffer.from(content));
    console.log(`Here's the response \r\n${response}`.green.bold)
    return response;
}

module.exports = {
    buildResponse,
    buildOKResponse
}