
MongoDB is a popular NoSQL database management system.
It stores data in a flexible, JSON-like format called BSON (Binary JSON).
MongoDB uses a document-oriented data model, which means it stores data in collections that are composed of documents.
Each document is a set of key-value pairs.
something like this comes up in my mind : json like data > documents > collection. 

A collection in MongoDB is a grouping of MongoDB documents.
It's (collection) the equivalent of a table in a relational database, but with a dynamic schema.
Collections don't enforce a schema; documents within a collection can have different structures.
A schema, in the context of databases, refers to a blueprint or structure that defines the organization, format, and constraints of the data stored in a database.
In MongoDB, although it is a NoSQL database and doesn't enforce a rigid schema like traditional relational databases, a schema can still be defined using tools like Mongoose (for Node.js) or similar libraries. In this context, a schema describes the structure of documents within a collection, including the fields, data types, validation rules, and other constraints.

I am unable to run mongodb server locally through mongo shell due to some apple privacy . 

But as I have tried mongodb atlas   - a mongodb service that allows me to host my database online , I am going to use that connection string it gave me earlier .


This is the connection string atlas gave me : mongodb+srv://shivani:hiimickey123@cluster0.lbj1wsi.mongodb.net/ I needed to put it in the mongosb compass to create a connection but due to some issue I am unable to connect mongodb compass its a  to mongodb atlas.
MongoDB Compass is the official graphical user interface (GUI) for MongoDB, developed by MongoDB, Inc. It's a desktop application that provides users with a visual way to interact with their MongoDB databases.

some basics - like create a new database then create a new collection and then add documents to it then edit/update or  delete  I have performed simply.


Now let us see how to perform some basics through mongodb compass shell - for this we have commands like

show dbs - to show dbs
use dbname - to use a particular db 
show collections - to show collections in a db.
help - to get all the commands.



Let us now add a document in the existing collection through compass shell and not through GUI. 
db.collectionname.insertOne({BJSON}) 
lets do this practically----->>>>>>>db.books.insertOne({"title":"hello world", "author":"ss", "rating":"5", "pages":"700"})
{ acknowledged: true,
  insertedId: ObjectId("6639e5e7d22c3822105025cd") }


And its done guys 😃


You can also insert multiple documents in a collection using insertMany([array of documents to be inserted])
