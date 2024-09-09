// Function without parameters
function averageWithoutParams() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var num3 = parseFloat(prompt("Enter the third number:"));
    var average = (num1 + num2 + num3) / 3;
    alert("The average of the three numbers is: " + average);
}

// Call the function without parameters
averageWithoutParams();

// Function with parameters and non-returning values
function averageWithParams(num1, num2, num3) {
    var average = (num1 + num2 + num3) / 3;
    alert("The average of the three numbers is: " + average);
}

// Call the function with parameters and non-returning values
var firstNumber = parseFloat(prompt("Enter the first number:"));
var secondNumber = parseFloat(prompt("Enter the second number:"));
var thirdNumber = parseFloat(prompt("Enter the third number:"));
averageWithParams(firstNumber, secondNumber, thirdNumber);

// Function with parameters and returning values
function averageWithReturn(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

// Call the function with parameters and returning values
var num1 = 10;
var num2 = 20;
var num3 = 30;
var result = averageWithReturn(num1, num2, num3);
alert("The average of the three numbers is: " + result);
