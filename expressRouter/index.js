const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose')
const blogs = require('../Router/blogs.js')


app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname , '../view1') )
const dbConnectionUrl ='mongodb+srv://shivani:hiimickey123@cluster0.lbj1wsi.mongodb.net/blogify';

// Here is the connection of my node js app  to the database  through mongoose.
mongoose.connect(dbConnectionUrl)
.then((result) =>{
    app.listen(3500,()=>{
        console.log("App is listening on port 3500");
    })
    
}).catch((err) => console.log(err))

app.use(express.urlencoded({extended: false}))
app.use(blogs)

