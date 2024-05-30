
 In Node.js, every JavaScript file is treated as a module, and Node.js provides a module wrapper function around each module's code.This wrapper function helps encapsulate the module's code and provides some built-in variables and functionality to the module. The module wrapper function has the following structure:
(function(exports, require, module, __filename, __dirname) {
    // Module code actually lives here
 });
 
 
 so the entire code you are actually writing is written inside this module wrapper function taht we can see is providing the important built in functions like require , exports , module etc to the modue or js code in node
  

exports: This is an object that is initially empty. You can add properties and methods to this object to make them available to other modules when they require your module.
require: This function is used to import modules in Node.js. When you call require('moduleName'), Node.js searches for the module named 'moduleName' and returns its exports object.
 module: This object represents the current module and contains information about it.
 __filename: This is the absolute path to the current module file.
 __dirname: This is the absolute path to the directory containing the current module file.


