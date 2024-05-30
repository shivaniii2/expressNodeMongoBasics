// Let us do a crude operation here that is create , read , update and delete
// create a folder and then a file in it named bio.txt
const fs = require("fs")
//fs.mkdirSync('CRUD')

// commenting it as it will throw an error of directory already exists.
fs.writeFileSync('CRUD/bio.txt',"Hi I am shivani sharma")
// update the bio.txt with some more text without overwriting the existing

fs.appendFileSync("CRUD/bio.txt",   " I am here to bring some changes ")

// Let us read the content now without buffer output
const data = fs.readFileSync("CRUD/bio.txt","utf8")
console.log(data);

// Let us now delete the file 
fs.unlinkSync("CRUD/bio.txt")
//The fs.unlinkSync() function in Node.js is specifically used to delete files, not folders. If you want to delete a folder, you should use fs.rmdirSync() for synchronous deletion or fs.rmdir() that is remove directory command the same that we use for deleting folders in command prompt for asynchronous deletion.
fs.rmdirSync("CRUD")



// same crud operations can be performed asynchronously :Let us do that :



