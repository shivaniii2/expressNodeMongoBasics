// let us create a file and write something to it asynchronously :
const fs = require("fs")
fs.writeFile("new.txt","hii this is my first async task in node . wow", (err)=>{
if(err){
   console.log(err); 
}else{
    console.log("your file has been written");
}
}
)
//the callback function for fs.writeFile() does not receive any data parameter. It only receives an error parameter


// let us read it too asyncronously 

fs.readFile("new.txt","utf8",(err ,data)=>{
   console.log(data,"read data");
})

//the callback function for fs.writeFile() does not receive any data parameter. It only receives an error parameter.
// let us add something more to it :


fs.appendFile("new.txt","it is already 8 please be faster", (err) =>{
    if(err)console.log(err, "there is error");
    
})

// For the fs.appendFile() function in Node.js, the callback function receives only an error parameter, similar to fs.writeFile(). It doesn't receive any data parameter.

// let us rename the file.
//the callback function for fs.rename() only receives an error parameter if an error occurs during the renaming process.

fs.rename("new.txt","async.txt", (err)=>{
    if(err)console.log(err);
})

//The fs.unlink() function in Node.js is used to delete files. Like other file operations, its callback function only receives an error parameter if an error occurs during the deletion process.

fs.unlink("async.txt", (err) => {
    if(err)console.log(err)
})