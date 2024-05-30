
const express = require('express');

const app = express()  
// here in the above line we are creating an instance of the Express application by calling the express() function. This app object represents our Express application, which we will use to define routes, middleware, and other configurations for our server.

const path = require('path')

app.listen(3000,()=>{
    console.log("App is listening on port 3000");
})

app.get('/',(req,res)=>{
    // res.send('<p>hi</p>')
    
    const pathToFile = path.join(__dirname,'../view/index.html')
    console.log(pathToFile);
    res.sendFile(pathToFile)
    
})


app.get('/about',(req,res)=>{
    const pathToFile = path.join(__dirname,'../view/about.html')
    res.sendFile(pathToFile)
    
})


// Redirect 
app.get('/about-us',(req,res)=>{
   res.redirect('/about')
    
})

//404


app.use((req, res)=>{
    const pathToFile = path.join(__dirname,'../view/error.html')
    res.sendFile(pathToFile)
})



