// @desc       This method should return an object 
// @input      Raw Bytes object of a client request
// @return     An array which contains an object key value pairs of the headers, and the body of the request as raw bytes, and the type of the request
// @returnType [Object , bytes, string]
function headerParser(request) {
    console.log(`Here is the request\r\n${request}`.bgGreen.bold)
    let headerDict = {};
    // request is one large bytes, split it on \r\n\r\n
    let header_bodySplit = BufferParser(request); // [headers -> bytes, body -> bytes]
    let newBuff = header_bodySplit[0].toString(); // [newBuff -> string]
    let body = header_bodySplit[1]; // [body -> bytes]
    let newBuffArray = newBuff.split('\r\n'); // [newBuffArray -> string array]
    let requestType = typeOfRequest(newBuffArray[0])
    newBuffArray.shift(); 
    for (let x of newBuffArray) {
        const [key, ...rest] = x.split(':')
        const value = rest.join(':')
        headerDict[key.trim()] = value.trim();
    }
    //         [Object , bytes, string]
    console.log(headerDict)
    console.log(body.toString())
    console.log(requestType)
    return [headerDict, body, requestType]
}

// @desc    This method splits the headers from the body
// @input   Raw bytes object of a client request
// @return  A list which contains the headers and body split
function BufferParser(buffer) {
    let splitWith = '\r\n\r\n';
    let start = 0;
    let bufferIndex = buffer.indexOf(splitWith, start) // should be first occurence of substring
    let newBuffer = buffer.slice(start, bufferIndex); // should cut off the body of the request
    let body = buffer.slice(bufferIndex, buffer.length+1)
    return [newBuffer, body]
}

// Parses the first line of a request to tell if it's a GET, POST, DELETE
function typeOfRequest(firstLine) {
    let requestType = firstLine.split(" ", 1)[0];
    return requestType;
}
module.exports = {
    headerParser
}

