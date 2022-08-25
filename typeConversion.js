let val;

// Number to String
val = String(555);
val = String(4+4);
// Boolean to String
val = String(true);
// Date to String
val = String(new Date());
// Array to String
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (true).toString();

// String to Number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello'); //NaN (Not a Number)
val = Number([1,2,3]); //NaN (Not a Number)

val = parseInt ('100.30');
val = parseFloat('100.30') // Decimals

// Output
console.log(val);
console.log(typeof val);
// console.log(val.length); // For Strings
console.log(val.toFixed(2)); // For Numbers

// Type Coersion
const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);