In your Mongoose folder/ index.js you can see that there is a list of routes that are starting like /blogs. when our app is too big then all the routes at one place becomes a mess so it is important to have them organise . That is when express router comes in play .

Let us understand express router in detail :

The express.Router class in Express.js is a powerful tool for creating modular and maintainable route handlers. It allows you to create a mini-application or sub-application within your main Express application. This is especially useful for organizing routes into manageable sections, such as user-related routes, product-related routes, etc.


You create a router instance by calling express.Router().
You can define routes on the router just like you would on the main app object.
You can use the router in your main app and specify a base path for all routes defined in the router.For our case main app is  index.js of this directory and we are going to define routes in Router folder.

Let us move all of our blog routes to blog.js after creating a router instance by calling express.Router.

Now in the index.js file we are just using it like a middleware with this line app.use(blogs) and everything is sorted express router which is a sub app inside the main app where all the routes related to blogs are defined .