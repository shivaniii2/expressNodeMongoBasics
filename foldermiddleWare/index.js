const express = require('express')
const app = express();
const path = require('path')
const morgan = require('morgan')
const blogs = [
    { title : ' chiki finds eggs' , snippet : 'Lorem epsum dolar amet'},
    { title : ' shivani finds eggs' , snippet : 'Lorem epsum dolar amet'},
    { title : ' mickey finds eggs' , snippet : 'Lorem epsum dolar amet'},
    
]

const db = "mongodb+srv://shivani:hiimickey123@cluster0.lbj1wsi.mongodb.net/"


app.listen(4500,()=> console.log("server is listening on port number 4500"))
app.set('view engine' , 'ejs');
app.set('views', path.join(__dirname, '../view1') )
app.use(express.static('public'))//when you set up the static file serving middleware using express.static, it instructs Express to serve static files from the specified directory (in this case, the public directory).


app.use(morgan('dev'))
// you can use this morgan third part middleware as an http request logger instead of eriting your own middleware from scratch to log  as you have done below.

//aZ0mopcnYFLKg0Eo
app.use((req, res,next) =>{
    console.log("A new request is made");
    console.log(req.hostname , "hostname");
    console.log(req.path , "pathname");
    console.log(__dirname , "dirname");
    next()
})

app.get('/' , (req, res) =>{
    res.render('index' , {title :"Home", blogs:blogs})
})

app.use((req, res,next) =>{
    console.log("Moved to next middleware")
    next()
    
    // This middleware wont be called as the response is already returned by '/' route handler  - order matters - executes top to down.
}

)
    
    
app.get('/about', (req,res)=>{
    res.render('about' , {title:'About'})
})

app.get('/new-blog', (req, res)=>{
    res.render('createBlog', {title: 'Create new blog'})
})
