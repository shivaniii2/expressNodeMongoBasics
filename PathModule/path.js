// path is another core module of node 
const path = require('path');


const filePath = '/Users/shivani.sharma2/Desktop/node-project/path.js'
const directory = path.dirname(filePath)
console.log(directory);

// this path.dirname() function extracts the directory portion of a file path. It takes a string representing a file path as input and returns the directory portion of that path. calling this function with the above path has returned /Users/shivani.sharma2/Desktop/node-project, which is the directory containing the file path.js


const extname = path.extname(filePath)
console.log(extname);

// The path.extname function extracts the extension portion of a file path. It takes a string representing a file path as input and returns the extension of the file, including the dot (.) character.In above case the o/p is .js

const basename = path.basename(filePath)
console.log(basename);
// path.basename extracts the last portion of a file path. It takes a string representing a file path as input and returns the last portion of that path, which could be the file name or the last directory in the path.

const parse = path.parse(filePath)
console.log(parse,"entire object");

//path.parse takes a file path as input and returns an object containing properties representing different parts of the path, such as the directory, base (file name with extension), extension, and file name.