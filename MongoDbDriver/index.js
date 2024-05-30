const express = require("express")
const app = express();
const {connectToDb , getDb} = require('./db');
const { ObjectId } = require("mongodb");

app.use(express.json());
// Db connection
let db
connectToDb((err)=>{
    if(!err){
        app.listen(5500, ()=>{console.log("express app is listening on port 4000")
            
        })
        db = getDb()
    }
    
    
})

app.get("/books" , (req,res)=>{
    // Implementing pagination 
    
    const pageNum = req.query.pageNo || 0  
    const booksPerPage = 3
    // Here if page number is 0 that means skip is 0 and only first 3 will be returned as we still doing limit()
    // If page is 1 (that means page actually is 2 as count is starting from 0 )and we want to skip first 3 so,this  .skip(pageNum * booksPerPage) will work
    db.collection('books')
    .find()
    .skip(pageNum * booksPerPage)
    .limit(booksPerPage)
    .sort({author : 1})
    .toArray()
    .then((books)=>{
        res.status(200).json(books)
    }).catch((err) => res.status(500).json({error : err}))
    
    
}) 


// Let us fetch on book through its objectId

app.get('/books/:id' , (req, res) =>{
    const id = new ObjectId(req.params.id);
    
    if(!ObjectId.isValid(id)){
        res.status(400).json({err :"not valid"})
    }
    db.collection('books')
    .findOne({_id : id})
    .then((doc)=>{
        res.status(200).json(doc)
    })
    .catch((err) => res.status(500).json({"error":err}))
})

// To insert a book in existing db
app.post("/books" , (req,res) =>{
    const book = req.body
    db.collection('books')
    .insertOne(book)
    .then((result)=>{
        res.status(200).json(result)
        
    })
    .catch((err) => res.status(500).json({error :err}))
})
// To delete a book from existing db
app.delete('/books/:id' , (req,res) =>{
    const id = new ObjectId(req.params.id);
    db.collection('books')
    .deleteOne({_id : id})
    .then((result) =>{
        res.status(200).json(result)
    })
    .catch((err) =>{
        console.log(err);
    })
})


// To update a book in existing db

app.patch('/books/:id', (req,res)=>{
    const id = new ObjectId(req.params.id)
    const updateObj = req.body
    db.collection('books')
    .updateOne({_id : id},{$set : updateObj})
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err) =>{
        console.log(err);
    })
})

