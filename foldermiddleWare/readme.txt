middleware are functions that have access to the request and response objects in an Express application's request-response cycle. They can modify these objects, execute any code, end the request-response cycle, or call the next middleware function in the stack. Middleware functions are essentially the building blocks of Express applications, allowing you to add various functionalities and features to your server.

Functionality Extension: Middleware allows you to extend the functionality of your Express application by executing code before or after handling a request.
Request-Response Cycle: When a request is made to an Express server, it goes through a series of middleware functions before reaching the final route handler. Each middleware function can modify the request and response objects as needed.
Chaining: Middleware functions are chained together using the next function. When a middleware function is done, it calls next() to pass control to the next middleware in the stack. If next() is not called within a middleware function, the request-response cycle is terminated.
Order Matters: The order in which middleware functions are defined is crucial because they are executed sequentially in the order they are defined. Middleware defined earlier in the code is executed first.
Error Handling: Middleware can also handle errors by defining error-handling middleware functions. Error-handling middleware functions take four arguments (err, req, res, next) and are used to catch and process errors that occur during the request-response cycle.

middleware function is executed for every request coming to the server and so we do not have a route specified for them .
let us see how can we log the details of every request coming to server using a middleware.


app.use((req, res,next) =>{
    console.log("A new request is made");
    console.log(req.hostname , "hostname");
    console.log(req.path , "pathname");
})

these logs will be printed each time you will make a  request to the server.For home page the logs looks like :A new request is made
localhost hostname
/ pathname




There is this another middleware - express.static - It's a built-in middleware function provided by Express itself. This middleware is used to serve static files such as HTML, images, CSS, JavaScript, and other resources from a directory on the server.
By default express does not allow access to your server files from browser like here you can see that style.css even though is given as a link in the head.ejs but is not accessible through browser . but you can use express.static middleware to serve it on the browser or you can say simply to allow access to a file or folder on server you can use this middleware.
all you have to write app.use(express.static('public')) where public is the name of the directory whose files you want to serve .
You dont have to have a req res object and next function for this inbuild middleware.


Third party middlewares:
third-party middlewares refer to middleware functions that are not included in the core Express framework but are developed by third-party developers or organizations. These middlewares provide additional functionalities that you can easily integrate into your Express application to enhance its capabilities.
Here are some common examples of third-party middlewares for Express.js:

Body parsing middlewares: These middlewares parse incoming request bodies in various formats such as JSON, URL-encoded, or multipart form data. Examples include body-parser and multer.
Logging middlewares: Logging middlewares log request and response details, such as URLs, status codes, and response times, to help with debugging and monitoring. Examples include morgan and express-winston.
Security middlewares: Security middlewares add security-related features to your Express application, such as CORS (Cross-Origin Resource Sharing) handling, CSRF (Cross-Site Request Forgery) protection, and helmet (HTTP headers security) integration. Examples include cors, csurf, and helmet.
Authentication and authorization middlewares: These middlewares handle user authentication and authorization, allowing you to secure your routes and endpoints. Examples include Passport.js for authentication and express-jwt for JWT (JSON Web Token) authentication.


let us do a practical for morgan:
Morgan is a popular HTTP request logging middleware for Node.js web applications, including those built with Express.js. It provides a simple and customizable way to log HTTP requests to the server, including details such as request method, URL, response status code, response time, and more.



so far we have learnt about mongodb , mongodb compass - GUI ,mongodb atlas - service for more info go to Mongo directory readme.
We have a connection string that will help our application to get connected to the db hosted by atlas.
This connection string requires name and password which you can get from the database access wher you have set it so that only an admin user can connect to your database.

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
We can use a mongodb API to connect to our db but Mongoose makes it a little easier to connect .
It makes easier to interact with MongoDB databases from Node.js applications.
 Mongoose allows you to define schemas for your MongoDB documents. Schemas define the structure of documents, including the fields, data types, validation rules, and default values.
  With Mongoose, you can create models based on your defined schemas. Models represent collections in your MongoDB database and provide methods for interacting with documents in those collections.
  Mongoose simplifies CRUD (Create, Read, Update, Delete) operations with MongoDB. It provides methods for creating, reading, updating, and deleting documents, abstracting away the complexity of working directly with the MongoDB driver.
  Mongoose supports middleware functions, which are functions that execute before or after certain operations (such as saving a document or removing a document). Middleware can be used for tasks like data manipulation, logging, or triggering additional actions.


we are going to create a blog schema with the help of Mongoose .