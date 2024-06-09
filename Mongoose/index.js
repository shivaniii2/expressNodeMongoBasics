const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose')
const Blog = require('../Models/blogs.js')

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

// This I wrote to actually add some data in my empty blogs collection although you can do it directly through mongodb compass so commenting it for now as now two documents are already there.


// app.get('/add-blogs' , (req, res) =>{
//     const blog = new Blog ({
//         title:'second ever blog',
//         snippet:'About my blog',
//         body:'More about my blog'
//     })
//     blog.save()
//     .then((result) =>{
//         res.send(result)
//     })
//     .catch((err) =>{
//         console.log(err);
//     })
// })







app.get('/' , (req,res) =>{
    res.redirect('/blogs')
})
// To get all the blogs in the collection
app.get('/blogs' , (req,res) =>{
    Blog.find()
    .then((result) =>{
        res.render('index' , {title : "All Blogs" ,blogs : result })
    })
    .catch((err) =>{
        console.log(err);
    })
})

// To save a new blog document 
app.post('/blogs' , (req,res) =>{
    const blog = new Blog(req.body)
    blog.save()
    .then((result) =>{
        res.redirect('/blogs')
    })
    .catch((err) =>{
        console.log(err);
    })
    
})
// To get to a single blog
app.get('/blogs/:id' , (req,res) =>{
    const id = req.params.id
    Blog.findById(id)
    .then((result) =>{
        res.render('details' , {title : "Detail page" , blog:result})
    })
    .catch((err) =>{
        console.log(err);
    })
})

app.delete('/blogs/:id' , (req,res) =>{
    const id = req.params.id
    Blog.findByIdAndDelete(id)
    .then(result => {
        res.json({redirect : '/blogs'})
    })
    .catch(err => console.log(err))
})

app.get('/about', (req,res)=>{
    res.render('about' , {title:'About'})
})
app.get('/new-blog', (req, res)=>{
    res.render('createBlog', {title: 'Create new blog'})
})
