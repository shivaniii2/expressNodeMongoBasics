const http = require('http');
const server = http.createServer((req,res)=>{
    console.log('request made');
    console.log(req.url);
    console.log(req.method);
    if(req.url ==="/contact"){
        res.end("hii let us know about contact us page")
    }else{
        res.end("hii people")
    }
   
})

const port = 8000;
server.listen(port,()=>{
    console.log("listening on the port 8000");
})