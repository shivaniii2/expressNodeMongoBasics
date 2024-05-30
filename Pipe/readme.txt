In Node.js, pipe() is a method used to connect the output of one stream to the input of another. It allows you to easily transfer data between streams, such as from a readable stream to a writable stream, without manually managing the flow of data.

The pipe() method is available on all readable streams in Node.js. When you call pipe() on a readable stream, you pass another writable stream as an argument. Node.js then takes care of efficiently transferring data from the readable stream to the writable stream, handling backpressure and memory management automatically.

readableStream.pipe(writableStream);
