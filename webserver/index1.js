const http = require('http')
const fs = require("fs")
const _ = require("lodash")

const server = http.createServer((request,res)=> {
    
    const numbers = [2,4,6,9]
    const filterNo = _.filter(numbers,(num) => num>2)
    console.log(filterNo);
    
    
    
    let path = './view'
   // console.log(request);
    // setHeader method on response object to tell about the type of contentb we are sending back as a response
    res.setHeader('Content-Type','text/html')
    if(request.url==='/'){
        path += '/index.html'
        res.statusCode = 200;
    }else if(request.url === '/about'){
        path += '/about.html'
        res.statusCode = 200;
    }else if(request.url === '/about-me'){
        res.setHeader('Location','/about')
        res.statusCode = 200;
        res.end()
    }
    else{
        path += '/error.html'
        res.statusCode = 404
    }
    // writing the response
    // res.write('<p>hello people I am going to italy</p>')
    // res.write('<p>I am amazing</p>')
    // res.end()
    // Let us write in a more cleaner fashion by sending an entire html page.
    
    fs.readFile(path ,(err,data) =>{
        if(err){
            console.log(err,"error occured during reading the file");
            res.end()
        }else{
            res.write(data);
            res.end()
        }
    })
    
})

const port = 4430
server.listen(port, ()=>{
    console.log("server is listening on port 4430");
})