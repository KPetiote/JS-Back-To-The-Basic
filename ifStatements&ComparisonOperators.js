// If Statements & Comparison Operators

// if(something){
//   do something
// } else {
//   do something else
// }

const id = 100;

// EQUAL TO
if(id == 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// NOT EQUAL TO
if(id != 101){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// EQUAL TO VALUE & TYPE
if(id === 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// NOT EQUAL TO VALUE & TYPE
if(id !== 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// Test if undefined
if(typeof id !== 'undefined'){
  console.log(`The ID is ${id}`);
} else {
  console.log('NO ID');
}

// GREATER OR LESS THAN
if(id > 200){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// IF ELSE

const color = 'yellow';

if(color === 'red'){
  console.log('Color is red'); 
} else if(color === 'blue'){
  console.log('Color is blue');
} else {
  console.log('Color is not red or blue');
}

// LOGICAL OPERATORS

const testname = 'Steve';
const age = 20;

if(age > 0 && age < 12){
  console.log(`${testname} is a child`);
} else if (age >= 13 && age <=19){
  console.log(`${testname} is a teenager`);
} else {
  console.log(`${testname} is an adult`);
}

// OR ||
if(age < 16 || age > 65){
  console.log(`${testname} can not run in race`);
} else {
  console.log(`${testname} is registered for the race`);
}

// TERNERARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES
if(id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');