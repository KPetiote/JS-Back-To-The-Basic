// FUNCTION DECLARATIONS

// (ES6)
function greet(firstName = 'John', lastName = 'Doe'){
    // (ES5)
    // if(typeof firstName === 'undefined'){firstName = 'John'}
    // if(typeof lastName === 'undefined'){lastName = 'Doe '}
    // console.log('Hello');
    return 'Hello  ' + firstName + ' ' + lastName;

}

// console.log(greet());

// FUNCTION EXPRESSIONS

const square = function(x = 3){
    return x*x;
};

// console.log(square());

// IMMEDIATELY INVOKE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//     console.log('IIFE Ran...');
// })();

// (function(name){
//     console.log('Hello '+ name);
// })('Brad');