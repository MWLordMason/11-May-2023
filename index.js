

// Is truthy

// Using if/else statements, create a JavaScript code in a script tag that follows the following rules:

// If the value is truthy, print true;
// If the value is falsy, print the corresponding result:
// "The boolean value false is falsy";
// "The null value is falsy";
// "undefined is falsy";
// "The number 0 is falsy (the only falsy number)";
// "The empty string is falsy (the only falsy string)";

// Values to test:

// Input Values	Expected Print
// "I am a string"	    true
// false	    "The boolean value false is falsy"
// null	    "The null value is falsy"
// undefined	"undefined is falsy"
// 0	    "The number 0 is falsy (the only falsy number)"
// ""	    "The empty string is falsy (the only falsy string)"

// Answer:

// function ifElse (testValue) {
//     if (testValue === "I am a string") {
//     return true
// } else if (testValue === false) {
//     return "The boolean value false is falsy"
// } else if (testValue === null) {
//     return "The null value is falsy"
// } else if (testValue === undefined) {
//     return "undefined is falsy"
// } else if (testValue === 0) {
//     return "The number 0 is falsy (the only falsy number)"
// } else if (testValue === "") {
//     return "The empty string is falsy (the only falsy string)"
// }
// }

// console.log(ifElse("I am a string"))
// console.log(ifElse(false))
// console.log(ifElse(null))
// console.log(ifElse(undefined))
// console.log(ifElse(0))
// console.log(ifElse(""))



// Number Line


// Using if/else if/else statements, JavaScript code in a script tag that takes the sum of two numbers and prints the corresponding result:

// sum + " is less than -1000";
// sum + " is a negative number";
// sum + " is equal to 0";
// sum + " is larger than 0";
// sum + " is greater than 100";

// Values to test:
// num1	    num2	Expected Print
// 50	    51	    "101 is greater than 100"
// 99	    -2	    "97 is greater than 0"
// 0	    101	    "101 is greater than 100"
// 500	    -500	"0 is equal to 0"
// -1000	0	    "-1000 is a negative number"
// -5	    0	    "-5 is a negative number"

// Answer:

// function math(num1,num2) {
//     let sum = num1 + num2
//     if (sum === 101) {
//         return sum + " is greater than 100"
//     } else if (sum === 97) {
//         return sum + " is greater than 0"
//     } else if (sum === 101) {
//         return sum + "is greater than 100"
//     } else if (sum === 0) {
//         return sum + " is equal to 0"
//     } else if (sum === -1000) {
//         return sum + " is a negative number"
//     } else if (sum === -5) {
//         return sum + " is a negative number"
//     }
// }

// console.log(math(50,51))
// console.log(math(99,-2))
// console.log(math(0,101))
// console.log(math(500,-500))
// console.log(math(-1000,0))
// console.log(math(-5,0))


// Greater Than Or Equal To 5

// Using if/else statements, JavaScript code in a script tag that prints true if both parameters are greater or equal to 5.

// Values to test:

// num1	num2	Expected Print
// 5	    6	    true
// 10	    11	    true
// 0	    0	    false
// 1000	    -1000	false
// 6	    4	    false
// 5	    5	    true

// Answer:

// function greaterThan(num1,num2) {
//     if (num1 >= 5 && num2 >= 5) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(greaterThan(5,6))
// console.log(greaterThan(10,11))
// console.log(greaterThan(0,0))
// console.log(greaterThan(1000,-1000))
// console.log(greaterThan(6,4))
// console.log(greaterThan(5,5))


// Pair and Compare

// Using if/else statements and strict equality operators, JavaScript code in a script tag that compares two sets of two values. Print true if at least one of the pairs is truthy.

// Values to test:

// param1A	param1B	param2A	param2B	Expected Print
// "cat"	"cat"	6	    "6"	    true
// "five"	5	    "dog"	"dawg"	false
// 0	    false	"horse"	"horse"	true
// "eight"	"eight"	"ate"	"ate"	true
// 11	    "eleven""four"	"for"	false
// "cake"	"cake"	"pie"	"pie"	true


// Answer:

// function andOr(param1A,param1B,param2A,param2B) {
//     if (param1A === param1B || param2A === param2B) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(andOr("cat","cat", 6, "6"))
// console.log(andOr("five",5,"dog","dawg"))
// console.log(andOr(0,false,"horse","horse"))
// console.log(andOr("eight","eight","ate","ate"))
// console.log(andOr(11,"eleven","four","for"))
// console.log(andOr("cake","cake","pie","pie"))