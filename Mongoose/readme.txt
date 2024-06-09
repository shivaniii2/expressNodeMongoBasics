Mongoose is a popular Object Data Modeling (ODM) library for MongoDB and Node.js

Let us understand the defination first .

Mongoose allows developers to define schemas and models that correspond to MongoDB collections and documents,respectively. This way, you can work with JavaScript objects that are mapped to MongoDB documents.

You define schemas that enforce structure on your data. A schema is like a blueprint for a MongoDB document, defining what fields the document will have, their data types, and any constraints or default values.

Mongoose provides built-in data validation based on the schema definitions. It ensures that data being saved to the database meets the criteria set in the schema.

Mongoose supports middleware, which are functions that run at specific stages of the document lifecycle (e.g., before saving, after saving, before updating). 

Mongoose provides a robust API for building and executing database queries.This API allows developers to perform various operations on MongoDB collections, such as creating, reading, updating, and deleting documents.


Creating Documents
You can create and save new documents to the database using the model's save method or the create method.

Reading Documents
Mongoose provides various methods for querying the database.
find: Retrieve multiple documents.
findOne: Retrieve a single document.

Updating Documents
You can update documents using various methods such as updateOne, updateMany, and findByIdAndUpdate.

Deleting Documents
You can delete documents using methods like deleteOne, deleteMany, and findByIdAndDelete.


While both the native MongoDB driver and Mongoose allow you to perform CRUD operations, Mongoose provides additional features.  Mongoose's schema enforcement, validation, middleware, and query-building capabilities make it a powerful tool for working with MongoDB in a more structured and maintainable way.



Let us see all this in action now :
firstly just the basic express app for my blogify app :)

You installed mongoose from npm as it is a third party library .
You made a connection through mongoose to your mongo db database named blogify using the connection string you have .
This process is of connecting to database is an asynchronous task that returns a promise .If the connection is successful, the promise resolves with no value.
If an error occurs during the connection attempt, the promise rejects with an error object containing details about the error.



Let us now create a schema to enforce structure on your data and a model to provide methods to perform CRUD (Create, Read, Update, Delete) operations and queries on the collection. This makes it easy to interact with the database without writing raw database queries.
Let us create a new folder models for that and now refer to the readme.txt there .


A point to remember : Mongoose models provide more convenient methods that simplify interacting with MongoDB collections. These methods make it easier to perform common database operations and abstract away much of the boilerplate code you would need to write when using the native MongoDB driver.
Here are some of the convenient methods provided by Mongoose models: save , findById, findOne etc.
many of the methods provided by Mongoose models, such as find, insert, update, and delete, are also available in the native MongoDB driver. However, Mongoose models offer additional features like Schema Definitions and Validation,
Pre and Post Hooks( Mongoose supports middleware, also known as hooks, which allow you to execute custom logic before or after certain operations (e.g., saving a document, updating, deleting)),Timestamps etc.



Let us add new documents to blogs collection through mongoose.
Blogs is the mongoose model - corresponds to blogs collection on which you can perform operations.
For details on models and schemas refer ti the readme file in Models folder


A small takeaway for today :

When a user submits a form with the POST method, the data from the form fields is typically sent to the server in the URL-encoded format.This format is one of the common ways to encode the data so it can be transmitted over HTTP.

In the URL-encoded format, form data is encoded as key-value pairs, where each key and value are separated by an equals sign (=), and each pair is separated by an ampersand (&). Special characters are percent-encoded to ensure the data can be safely transmitted over HTTP.

example : username=John%20Doe&password=secret


To handle this URL-encoded data in an Express application, you use the express.urlencoded() middleware.
This middleware parses the URL-encoded data and makes it available in req.body.

when a user submits a form with the POST method, the data is sent in the body of the HTTP request. This is different from a GET request, where data is appended to the URL as query parameters.
 In GET requests, data is appended to the URL as query parameters. This means that all the data sent to the server is visible in the URL itself.
 In POST requests, data is included in the body of the request. This means the data is not visible in the URL and is more suitable for sending sensitive or large amounts of data.
 
 
 username=JohnDoe&password=secret so this will be inside the body of http request in case of a POST request.
  In GET requests, data is appended to the URL as query parameters
  
  
I hope you know that why that constant loading kind of hang is there in your browser when you are not handling a promise properly as it is in unresolved state .


Ok so get and Post request is a bit simplere as forms of HTML support these methods in their method attribute but for a delete request in your node app you have to make a fetch API call  to the server with an endpoint and a method : DELETE
(like you did in details.ejs file) and then wrote a delete route in the js file to delete the blog corresponding to the id in the request params by using findByIdAndDelete method and then send a json {redirect : '/blogs'} as a response back to the browser .

When making asynchronous requests (like using fetch or AJAX), the client (browser) does not automatically handle HTTP redirects the same way it does with traditional form submissions. Instead, the server can send a JSON response indicating what the client should do next. The client-side code then reads this JSON response and performs the necessary actions (like redirecting the user).

Let us understand about express router :

 Refer to another folder Expressrouter 









