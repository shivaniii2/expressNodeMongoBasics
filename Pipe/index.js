const fs = require("fs");
const http = require("http")
const myServer = http.createServer();

myServer.on("request", (req,res) =>{
    const readableStream = fs.createReadStream('Pipe/readme.txt');
   // readableStream.pipe(res)
    // this is basically replacing that res.write() method as now pipe will automatically write the stream to the response
    
    const writeStream = fs.createWriteStream('Pipe/write.txt')
    readableStream.pipe(writeStream)
    
    // so the pipe method has successfully wrote the readable stream in the specified path .
    
    readableStream.on("error", (err) => console.log(err))
})

const port = 7000
myServer.listen(port , ()=>{
    console.log("server is listening on port 7000");
})
// as server is listening on port 7000 which means that whenever this port will be  accessed through user's web browser then the 'request' event will fire on http server you created and next lines of code where you are reading from a readable stream and then piping it to writable stream is happening. 