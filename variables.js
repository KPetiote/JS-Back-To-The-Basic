// VARIABLES

// var, let, const

// var testname = 'John Doe';
// console.log(testname);
// testname = 'Steve Smith';
// console.log(testname);

// init var

// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

/* 
Variables can include = letters, numbes, _, $
Variables cannot start with a number 
*/

// Multi Word Variables
var firstName = 'John'; // Camel Case - Recommended
var first_name = 'Sara'; // Underscore - Seein in PHP
var FirstName = 'Tom'; // Pascal Case - Object Oriented / Constructive Function / ES6 Classes
var firstname; // Not Recommended

// LET
// let testname;
// testname = 'John Doe';
// console.log(testname);
// testname = 'Steve Smith';
// console.log(testname);

// CONST
// const testname = 'John Doe';
// console.log(testname);
// Can not reassign
// testname = 'Steve Smith';
// Have to assign a value
// const greeting;

const person = {
  name: 'John',
  age: 30
}

person.name = 'Sara';
person.age = 32;

// console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);

console.log(numbers);