EJS stands for embeded javascript.
install it in your project using npm
EJS is a view engine .
A  view engine is used to generate HTML dynamically on the server side.
The terms "template engine" and "view engine" are often used interchangeably.Both refer to the same concept: a tool for generating dynamic HTML content based on templates and data.

To use a view engine in an Express.js application, you need to configure it using the app.set() method. You specify the view engine you want to use and the directory where your views (templates) are located.



By default it looks for view files (templates) in a directory named "views." This is the default behavior set by Express.js. But you can always set a custom directory the way i did using 
app.set('views', cutsom directory path).

when using the EJS view engine in Express.js, the view files (templates) inside the "views" folder (in our case it is view1) should have the ".ejs" file extension.This is because EJS (Embedded JavaScript) is the template engine that processes these files, and it expects them to have the ".ejs" extension to identify them as EJS templates.

 Once the view engine is configured, you can render views (templates) in your route handlers using the res.render() method. You specify the name of the view file (without the file extension) and pass data to be used in the template.
javascript


To render the  dynamic data that you are sending from your route handler, in your template file you need to write ejs syntax. Let us see how it looks like.
<%= variable %> this is how a single value render syntax looks like in ejs.

we can also use loop methods like for foreach on arrays in ejs.  we have this array of objects in our route handling file and we are passing this array to the render method . Now let us render all the elements of array on the browser using ejs.

Did you see that everything which is not a template/HTML is inside those <% %>
here is a little overview that I learnt from live project :



ejs library is used to render files. EJS stands for "Embedded JavaScript," and it is a template engine that allows you to embed JavaScript code within HTML or other text-based files. EJS templates contain placeholders or variables that will be replaced with dynamic content when rendering the template.
The basic syntax for defining variables in EJS templates is to use <%= variable %> for simple variable substitution. When the template is rendered, the <%= variable %> will be replaced with the value of the variable.
For example, suppose you have a simple EJS template like this:
htmlCopy code
<h1>Hello, <%= name %>!</h1>
And you have an object with a name property:
javascriptCopy code
const data = { name: 'John' };
When you render the template using EJS, the <%= name %> placeholder will be replaced with the value of the name property:
javascriptCopy code
const ejs = require('ejs');

const template = '<h1>Hello, <%= name %>!</h1>';
const data = { name: 'John' };

const renderedTemplate = ejs.render(template, data);

console.log(renderedTemplate);
Output:
htmlCopy code
<h1>Hello, John!</h1>
In the provided code, the ejs.renderFile function is used to render files and replace placeholders with actual values. The placeholders in the files being rendered are likely variables that will be replaced with dynamic content specific to each LWC component during rendering. The specific variable names and values would depend on the content of the template files and the data provided to the rendering process.




Our view files live on the server and when we want to render that file through the browser then that view file is passed to the ejs view engine to be processed. The engine looks for any dynamic content like variables , loops, connditions etc and figure out the resulting HTML code for those parts and then finally spits out a resulting HTML page and then this html page with the required data is returned to the browser. This whole process is called server side rendering.



let us put the common part of the template files in another directory called partials.
Partials are reusable components or snippets of code in web development, commonly used in templating systems. They allow you to break down your HTML markup into smaller, modular pieces, making your code more organized, maintainable, and easier to manage.

we got to use include function with the path to the partials to get that part in the main template. use - and not == inside your ejs templates while including as = escapes special characters that we dont want to do as we have a path here 