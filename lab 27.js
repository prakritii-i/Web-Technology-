//Write a javascript program to use any five string methods to manipulate the string.
function stringManipulation(){
// Define a sample string
var sampleString = "   Hello, world!   ";

// 1. Trim whitespace from the beginning and end of the string
var trimmedString = sampleString.trim();
console.log("Trimmed string:", trimmedString);

// 2. Convert the string to uppercase
var uppercaseString = sampleString.toUpperCase();
console.log("Uppercase string:", uppercaseString);

// 3. Extract a substring from the original string
var substring = sampleString.substring(7, 12);
console.log("Substring:", substring);

// 4. Replace a part of the string with another string
var replacedString = sampleString.replace("world", "universe");
console.log("Replaced string:", replacedString);

// 5. Split the string into an array of substrings
var splitString = sampleString.split(",");
console.log("Split string:", splitString);
}

//Write a javascript program to use any five mathematical methods to manipulate the number. 
function numberManipulation(argument) {
	// Define a sample number
var sampleNumber = 10.5;

// 1. Round the number to the nearest integer
var roundedNumber = Math.round(sampleNumber);
console.log("Rounded number:", roundedNumber);

// 2. Get the absolute value of the number
var absoluteValue = Math.abs(sampleNumber);
console.log("Absolute value:", absoluteValue);

// 3. Calculate the square root of the number
var squareRoot = Math.sqrt(sampleNumber);
console.log("Square root:", squareRoot);

// 4. Get the smallest integer greater than or equal to the number
var ceilValue = Math.ceil(sampleNumber);
console.log("Ceil value:", ceilValue);

// 5. Get the largest integer less than or equal to the number
var floorValue = Math.floor(sampleNumber);
console.log("Floor value:", floorValue);

}

//Write a javascript program to use any five date method to display the date in a different format.
function dateMethods(){
	// Get the current date
var currentDate = new Date();

// 1. Get the full year (e.g., 2024)
var fullYear = currentDate.getFullYear();
console.log("Full year:", fullYear);

// 2. Get the month (0-indexed, e.g., January is 0)
var month = currentDate.getMonth();
console.log("Month:", month);

// 3. Get the day of the month (1-31)
var dayOfMonth = currentDate.getDate();
console.log("Day of the month:", dayOfMonth);

// 4. Get the day of the week (0-6, 0 is Sunday)
var dayOfWeek = currentDate.getDay();
console.log("Day of the week:", dayOfWeek);

// 5. Get the current time in milliseconds since the Unix epoch (January 1, 1970)
var millisecondsSinceEpoch = currentDate.getTime();
console.log("Milliseconds since epoch:", millisecondsSinceEpoch);

}

//