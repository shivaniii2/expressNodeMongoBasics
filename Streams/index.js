//let us  create a server first 

const http = require("http")
const fs = require("fs")

const server = http.createServer();
server.on('request',(req,res)=>{
    const rstream = fs.createReadStream('Streams/readme.txt');
    let totalLength =0
    rstream.on("data", (chunk)=>{
        totalLength += chunk.length;
        res.write(chunk)
        // Here res is a writable stream that is why we can use .write on it
        // otherwise we can always write the readable stream using fs module 
        
        // const writeStream = fs.createWriteStream('Streams/readme1.txt');
        // writeStream.write(chunk)
        // so we have successfully written what we were receiving as a readable stream.
        
    })
    rstream.on("end",()=>{
        console.log(`${totalLength} amount of data is received`);
    })
    rstream.on("error", (err)=>{
      
        console.log("bye",err);
    })
    
})

const port = 8080
server.listen(port,()=>{
    console.log('server has started on port 8000');
})



// Here we are actually reading a data from a file which we have created as a readablestream using createReadStream method of fs core module and then we are writting it to a writable stream which is nothing but response in our case.

// refer to pipe folder