one of the powerful capabilities of Node.js is its ability to create web servers easily. You can create your own web server using the built-in http module in Node.js.

We require the http module, which is built into Node.js, to create an HTTP server.
We use the createServer method to create a server instance. This method takes a callback function that will be invoked whenever a request is made to the server. The callback function takes two arguments: req (the request object) and res (the response object).
 we define the port on which the server will listen for incoming requests using the listen method. In this case, we're using port 3000.
 Once the server is started, we log a message to the console indicating the server is running and listening on the specified port.
 
 
 
 
 
When you navigate to http://localhost:8000/ in your web browser after running a Node.js server that serves "Hello World", you should see "hi people" displayed in the browser if everything is set up correctly.


When you run this code and navigate to http://localhost:8000 in your web browser, your browser sends an HTTP request to your Node.js server. Your server receives the request, processes it, and sends back the response "hii people". This response is then displayed in your browser window. That's why you see "hii people" when you access http://localhost:8000 in your browser.


Let us know what is happening in even more briefly:
When you type a URL into your browser's address bar and hit Enter, the browser sends an HTTP GET request to the server specified in the URL. On the server side, your Node.js server is listening for incoming HTTP requests on port 8000. When the server receives the HTTP GET request for the /contact path, it executes the request handler function specified in your code.
Based on the logic in your request handler function, the server generates an appropriate HTTP response. In this case, when the request URL is /contact, the server sends back the response "hii let us know about contact us page".
Receiving the Response: The browser receives the HTTP response from the server. In the case of a GET request, the response typically contains the requested content, along with metadata such as the HTTP status code (200 OK) and response headers.
Rendering the Page: Finally, the browser renders the content received in the HTTP response and displays it in the browser window for the user to see.



When you navigate to http://localhost:8000/contact in your web browser:

The browser sends an HTTP GET request to your Node.js server.
Your server receives the request and checks the value of req.url, which is "/contact".
Since req.url matches "/contact", the server sends back the response "hii let us know about contact us page".
The browser receives the response and displays the text "hii let us know about contact us page" in the browser window.
So, req.url allows you to inspect the requested URL and handle requests differently based on the URL path. In this case, it's used to serve different content for different pages of your web application.






Lets understand some basics :

A domain name is a human-readable label that corresponds to a unique numerical IP address on the internet. It provides an easy way to remember and access websites without needing to remember the IP address associated with each one. Domain names consist of two parts: the top-level domain (TLD) and the second-level domain (SLD). For example, in the domain name "example.com", "com" is the TLD and "example" is the SLD.

An IP (Internet Protocol) address is a numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication. It serves as an identifier for a specific machine on a network.

When you type a domain name into your web browser, the browser needs to translate that human-readable domain name into an IP address to locate the corresponding server which is hosting the requested content  on the internet. This process is called Domain Name System (DNS) resolution.
The DNS system consists of a distributed network of servers that store domain name records and their corresponding IP addresses. When you request a website by its domain name, your computer first checks its local DNS cache. If the IP address is not found there, it queries DNS servers starting from the root DNS servers, then authoritative DNS servers, until it finds the IP address associated with the domain name.

Once the browser has obtained the IP address corresponding to the domain name, it can establish a connection to the server hosting the website and retrieve the requested content.



In Node js we create our own servers that are there on the backend of our websites and listens to the requests


localhost : is a domain name that has a special IP address that is 127.0.0.1 which correspondsto our own computer which means making a get request through browser will connect back to our own computer and our own computer will act as a host to the incoming requests for development purpose.



Port numbers allow multiple network services or processes to run on the same host, each identified by a unique port number. This enables a single physical device to host multiple network services simultaneously.They enable multiple services to coexist on the same network infrastructure and are essential for the functioning of the Internet and other computer networks.for example different programs in your computer like skype mails etc use port numbers so to ...






There is this "Location" header in HTTP responses that we can send with other headers using 'setHeaders' methods.
It  is used to redirect the client to a different URL. When a client (e.g., a web browser) receives a response from a server that includes a "Location" header, it will automatically make a new request to the URL.



 Lodash is a popular JavaScript utility library that provides a wide range of functions to facilitate common programming tasks, especially when working with arrays, objects, and functions. It aims to simplify and enhance the development process by offering a consistent and efficient API for handling common tasks in a more concise and readable manner.
 Lodash provides a vast array of utility functions that cover a wide range of use cases. These functions include array manipulation (e.g., map, filter, reduce), object manipulation (e.g., merge, clone, pick), function manipulation (e.g., debounce, throttle), and more.
Chaining: Lodash supports method chaining, allowing you to chain multiple function calls together, which can lead to more readable and expressive code.
Cross-Browser Compatibility: Lodash is designed to work across different JavaScript environments, including browsers and Node.js, ensuring consistent behavior regardless of the platform.
Active Community: Lodash has a large and active community of developers who contribute to its development, provide support, and share best practices. This active community ensures that Lodash is continuously improved and updated to meet the evolving needs of developers.

Let us see an example
