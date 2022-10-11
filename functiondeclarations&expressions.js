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