function sum(){
var firstNumber = parseFloat(prompt("Enter the first number:"));

// Prompt the user to enter the second number
var secondNumber = parseFloat(prompt("Enter the second number:"));

// Calculate the sum of the two numbers
var sum = firstNumber + secondNumber;

// Display the sum to the user
alert("The sum of " + firstNumber + " and " + secondNumber + " is: " + sum);
}
//Write a javascript code to create a array that holds following musical instruments
//murchunga, madal and sarangi. Convert tha array into string and print that
//array.(TU 2015)
function array(){

var instruments = ["murchunga", "madal", "sarangi"];

var instrumentsString = instruments.join(", ");
console.log(instrumentsString);

}
/*Write a javascript function that checks password and retyped password of two
different password fields are same or not.*/
 function checkPasswords(passwordField1, passwordField2) {
    // Get the values entered in the password fields
    var password1 = document.getElementById(passwordField1).value;
    var password2 = document.getElementById(passwordField2).value;

    // Check if the passwords match
    if (password1 === password2) {
        return true; // Passwords match
    } else {
        return false; // Passwords do not match
    }
}
/*Write a javascript code to calculate difference between two dates given by user.*/

function calculateDateDifference() {
    // Prompt the user to enter the first date
    var firstDateStr = prompt("Enter the first date (YYYY-MM-DD):");
    var firstDate = new Date(firstDateStr);

    // Prompt the user to enter the second date
    var secondDateStr = prompt("Enter the second date (YYYY-MM-DD):");
    var secondDate = new Date(secondDateStr);

    // Calculate the difference in milliseconds
    var timeDifference = Math.abs(secondDate.getTime() - firstDate.getTime());

    // Calculate the difference in days
    var differenceInDays = Math.ceil(timeDifference / (1000 * 3600 * 24));

    // Display the difference to the user
    alert("The difference between the two dates is " + differenceInDays + " days.");
}

// Call the function to calculate the date difference
calculateDateDifference();

/*Write a javascript function that takes two strings as arguments amd checks them
for equality. If both string ar equal then display the frist string in uppercase else
return “the two string do not match”.*/
function checkEqualityAndDisplay(str1, str2) {
    if (str1 === str2) {
        return str1.toUpperCase(); // Return the first string in uppercase
    } else {
        return "The two strings do not match"; // Return message indicating strings do not match
    }
}

// Example usage:
var string1 = "hello";
var string2 = "Hello";

var result = checkEqualityAndDisplay(string1, string2);
console.log(result); // Output: The two strings do not match

/*Write a program in javascript to add two prime numbers only.*/
// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to find the next prime number after a given number
function nextPrime(num) {
    num++;
    while (!isPrime(num)) {
        num++;
    }
    return num;
}

// Function to add two prime numbers
function addTwoPrimeNumbers() {
    var prime1 = 2; // Start with the first prime number
    var prime2 = nextPrime(prime1); // Find the next prime number
    var sum = prime1 + prime2;

    console.log("Prime 1:", prime1);
    console.log("Prime 2:", prime2);
    console.log("Sum:", sum);
}

// Call the function to add two prime numbers
addTwoPrimeNumbers();

/*Write a javascript function checkSquare that accepts two arguments length and
breadth. The function returns “The object is square” if length and breadth are
equal else return “ the object is rectangle”.*/
function checkSquare(length, breadth) {
    if (length === breadth) {
        return "The object is square";
    } else {
        return "The object is rectangle";
    }
}

// Example usage:
var result1 = checkSquare(5, 5);
console.log(result1); // Output: The object is square

var result2 = checkSquare(4, 6);
console.log(result2); // Output: The object is rectangle

/*Write a javascript program to add odd numbers of a list.*/
function addOddNumbers(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            sum += numbers[i];
        }
    }
    return sum;
}

// Example list of numbers
var numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Calculate the sum of odd numbers in the list
var oddSum = addOddNumbers(numbersList);

console.log("Sum of odd numbers:", oddSum); // Output: Sum of odd numbers: 25

/*Write a javascript program that takes string from user and display in reverse
order.*/
function reverseString(str) {
    // Split the string into an array of characters, reverse it, and join it back into a string
    return str.split("").reverse().join("");
}

// Prompt the user to enter a string
var userInput = prompt("Enter a string:");

// Call the function to reverse the string and display the result
var reversedString = reverseString(userInput);
console.log("Reversed string:", reversedString);
