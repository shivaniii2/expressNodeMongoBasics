const express = require('express')
const app = express();
const path = require('path')

app.set('view engine' ,'ejs') ;
app.set('views' , path.join(__dirname , '../view1'))
const blogs = [
    { title : ' chiki finds eggs' , snippet : 'Lorem epsum dolar amet'},
    { title : ' shivani finds eggs' , snippet : 'Lorem epsum dolar amet'},
    { title : ' mickey finds eggs' , snippet : 'Lorem epsum dolar amet'},
    
]
   
app.listen(4000,()=> console.log('server is listening on port 4000'))
app.get('/',(req,res)=>{
    res.render('index', {title:'Home', blogs:blogs})
})
app.get('/about', (req,res)=>{
    res.render('about' , {title:'About'})
})

app.get('/new-blog', (req, res)=>{
    res.render('createBlog', {title: 'Create new blog'})
})
