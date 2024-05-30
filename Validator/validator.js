const validator = require('validator');

// Let us explore some common validator functions given by validator module :

const isValidEmail = validator.isEmail('shivani78076@gmail.com')
console.log(isValidEmail);

//isEmail(): Checks if the string is an email address.
// isURL(): Checks if the string is a URL.
// isNumeric(): Checks if the string contains only numbers.
// isAlpha(): Checks if the string contains only letters (a-zA-Z).
// isAlphanumeric(): Checks if the string contains only letters and numbers.

const isLength = validator.isLength('shivani' , {min:5 , max:9})
console.log(isLength,"isValid");
//isLength(): Checks if the string's length falls in a specified range.