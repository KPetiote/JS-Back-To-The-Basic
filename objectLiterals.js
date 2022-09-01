// OBJECT LITERALS

const person = {
  firstName: 'Kenneth',
  lastName: 'Petiote',
  age: 32,
  email: 'kenneth@gmail.com',
  hobbies: ['gaming', 'fitness', 'photography'],
  address: {
    city: 'Los Angeles',
    state: 'CA'
  },
  getBirthYear : function(){
    return 2022 - this.age;
  }
}

let val;

val = person;

// Get Specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[2];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23},
  {name: 'Nancy', age: 40}
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name)
}