const express = require('express');
const router = express.Router();
const Blog = require('../Models/blogs.js')



router.get('/' , (req,res) =>{
    res.redirect('/blogs')
})
// To get all the blogs in the collection
router.get('/blogs' , (req,res) =>{
    Blog.find()
    .then((result) =>{
        res.render('index' , {title : "All Blogs" ,blogs : result })
    })
    .catch((err) =>{
        console.log(err);
    })
})

// To save a new blog document 
router.post('/blogs' , (req,res) =>{
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
router.get('/blogs/:id' , (req,res) =>{
    const id = req.params.id
    Blog.findById(id)
    .then((result) =>{
        res.render('details' , {title : "Detail page" , blog:result})
    })
    .catch((err) =>{
        console.log(err);
    })
})

router.delete('/blogs/:id' , (req,res) =>{
    const id = req.params.id
    Blog.findByIdAndDelete(id)
    .then(result => {
        res.json({redirect : '/blogs'})
    })
    .catch(err => console.log(err))
})

router.get('/about', (req,res)=>{
    res.render('about' , {title:'About'})
})
router.get('/new-blog', (req, res)=>{
    res.render('createBlog', {title: 'Create new blog'})
})
module.exports  = router