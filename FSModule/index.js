
const fs = require('fs');

fs.writeFileSync('read.txt', 'hii people')
fs.writeFileSync('read.txt', 'hii people How are you')
// Latest data will overwrite the previous data.


const buff =fs.readFileSync('read.txt')
console.log(buff);
//<Buffer 68 69 69 20 70 65 6f 70 6c 65 20 48 6f 77 20 61 72 65 20 79 6f 75>
//When you read a file using the fs.readFile() or fs.readFileSync() functions, Node.js returns the contents of the file as a buffer by default.
//Buffers are used to represent binary data, which includes raw binary data (like images or audio) or text data encoded in binary formats (like UTF-8 or UTF-16).
//so actual data can be retrived using toString method here is how :




