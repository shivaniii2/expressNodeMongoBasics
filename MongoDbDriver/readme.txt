please refer to the entire mongo folder and specifically mongodbdrivers.txt to know what they do.

we are here keeping a separate db.js file to write functions that will eventually make a connection initially to the database and we will keep that connection in another function so that we can retrieve the connection once we already have connected to it.



let us see what is db.js actually doing :

import { MongoClient } from "mongodb";
This line imports the MongoClient class from the mongodb package, which allows us to interact with a MongoDB database.
module.exports = {

This begins the definition of what will be exported from the module, making these functions available for other files to use.

connectToDb : () => {
    MongoClient.connect('mongodb+srv://shivani:hiimickey123@cluster0.lbj1wsi.mongodb.net/bookstore')
    .then((client)=>{
        dbConnection = client.db()
    })
},


This function initiates a connection to the MongoDB database using the connection string provided.
MongoClient.connect returns a promise, which, when resolved, provides a client object.
The client.db() method is called to get a reference to the database, which is then assigned to the dbConnection variable.



Passing a callback to the connectToDb function so that we can call that function once the connection is established.`



Now in the index.js we just called the connectToDb anf if no error is there then in the callback we started listening to the request .
In the get /books route handler code looks like :
db.collection('books')        === Accesses the books collection in the database.
    .find()                  === Retrieves all documents in the collection using .find().
    .sort({ author: 1 })     === Sorts the documents by the author field in ascending order.
.toArray()           ===   This method collects all documents returned by the cursor into array. Returns a  promise that resolves with the array of documents.
    

.then((books) => {
    res.status(200).json(books);
})
When the promise resolves, the books array contains all the documents.
Sends a response with the status code 200 and the books array as JSON.


When you perform a query in MongoDB, the result set can potentially be large, and instead of returning all documents at once, MongoDB returns a cursor.
A cursor is essentially a pointer to the result set. It allows you to iterate over the documents returned by the query, fetching them in batches as needed. This is more memory-efficient, especially when dealing with large result sets.
converting the cursor into an array using .toArray(), it means collecting all the documents pointed to by the cursor into a JavaScript array. This makes it easier to work with the results, especially when you need to manipulate or process the entire result set at once.



If you want to validate whether a given string is a valid ObjectId in MongoDB, you can use the ObjectId.isValid() method provided by the MongoDB driver. This method checks if a string is in the correct format to be a MongoDB ObjectId.

most of the methods provided by the MongoDB Node.js driver return promises. This includes methods for inserting, updating, and deleting documents, as well as various other database operations.


Let us now see how can we make a POST request where we are going to insert a document in a collection in db.

Just encountered an issue while inserting a new document in the books collection where the raw data I am sending in the postman request body is null for my route handler but it should be the JSON that I am actually sending . This is happening as earlier I was not using express.json() middleware in my app . 

Express does not have built-in support for parsing JSON bodies on its own. You need to use middleware to enable this functionality. The middleware responsible for parsing JSON bodies is provided by the express.json() method.
When a request is sent with JSON data in the body, the express.json() middleware parses the JSON data and makes it available in req.body so that you can access it in your route handlers.
In your case, the request body sent from Postman contained JSON data representing a book object. Without the JSON body parsing middleware, req.body would be undefined, and your server wouldn't know how to handle the incoming data.
By including express.json() middleware in your application, you ensure that Express parses incoming JSON requests(Converting that raw JSON data into a format that the server-side application can easily work with, typically a JavaScript object.) automatically, allowing you to access the JSON data in your route handlers. This enables you to work with JSON data seamlessly in your Express application.
