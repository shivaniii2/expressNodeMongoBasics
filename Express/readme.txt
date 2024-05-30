
Express.js, often simply referred to as Express.
It is a  popular minimalist web application framework for Node.js.
It is designed for building web applications and APIs quickly and with minimal code.
 Express provides a simple yet powerful routing mechanism that allows developers to define routes based on HTTP methods (GET, POST, PUT, DELETE, etc.) and URL patterns. This makes it easy to define how the application responds to different HTTP requests.
 
 
 Let us see how can we build different api's that are responding to get requests according to the route.
 
 Firstly install express in your project npm install express

Note : With Express.js, you don't need to explicitly create an HTTP server using the http core module as you would typically do in plain Node.js. Express abstracts away the low-level details of creating an HTTP server, allowing you to focus more on defining routes, handling requests, and building your application's logic.Let us see all in action.
 
 
 with Express.js, you typically don't need to use res.write and res.end like you would in plain Node.js for every response. Express abstracts away these low-level details.
 
 
 In an Express.js application, app.listen is used to create an HTTP server and start listening for incoming requests. When you call app.listen, you specify the port number on which the server should listen for incoming connections.
 
 
 When you use res.send in Express.js, it automatically infers the appropriate status code and content type based on the type of data you provide as an argument to the send function.
 
 
 res.sendFile is a method in Express.js that sends a file as an HTTP response. It is commonly used to serve static files such as HTML, images, CSS, JavaScript, etc.
 sendFile methods takes another.
 
 please refer to path and paths.txt  for basics.
 
 
 res.redirect(route) - this is what we use inplace of that setting 'Location' header in the response to redirect a route request to another route . Let us see that in action .



For 404 page we are going to use app.use() , until now the only thing I know about it is that express is going to go from up to down in terms of your linr of code and we are going to write it at the end as when no url matches the urls already  defined  then app.use will be executed .
