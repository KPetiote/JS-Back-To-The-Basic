const firstName = 'Kenneth';
const lastName = 'Petiote';
const age = 30;
const str = 'Hello there my name is Kenneth';
const tags = 'web  design, web development, programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = 'Kenneth ';
val += 'Petiote';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf('n');
val = firstName.lastIndexOf('n');

// chartAt()
val = firstName.charAt('2');
// Get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0,4);

// slice()
val = firstName.slice(0,4);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Kenneth', 'Petiote');

// includes()
val = str.includes('Hello');

console.log(val);