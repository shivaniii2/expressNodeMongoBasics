In Node.js, existsSync is a synchronous method provided by the fs (file system) module that is used to check if a file or directory exists at a specified path. It returns a boolean value indicating whether the file or directory exists.



const fs = require('fs');

const pathToFile = 'example.txt';
if (fs.existsSync(pathToFile)) {
    console.log('The file exists.');
} else {
    console.log('The file does not exist.');
}