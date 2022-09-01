// TEMPLATE LITERALS

const name = 'Kenneth';
const age = 32;
const job = 'Web Developer';
const city = 'New York';
let html;

// Without template strings(literals) (es5)
html = '<ul><li>Name: '+ name +'</li><li>Age: ' + age + ' </li><li>Job: '+ job + ' </li><li>City: '+ city +' </li></ul>';

html =  '<ul>' +
        '<li>Name: '+ name +'</li>' +
        '<li>Age: '+ age +'</li>' +
        '<li>Job: '+ job +'</li>' +
        '<li>City: '+ city +'</li>';
        '</ul>'


function hello(){
  return 'hello';  
}
// With template strings(literals) (es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2+2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

document.body.innerHTML = html;