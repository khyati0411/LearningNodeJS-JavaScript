let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  fullname : function() 
  {
    // return this.firstName + " " + this.lastName;
    console.log(this.firstName + " " + this.lastName)
  }
}

console.log(person.firstName) // John
console.log(person.lastName) // Doe
console.log(person.age) // 30
console.log(person.fullname()) // John Doe
person.firstName = "Jane" // changing the firstName property of the person object
console.log(person.firstName) // Jane
person.city = "New York" // adding a new property to the person object
console.log(person.city) // New York
delete person.age // deleting the age property of the person object
console.log(person.age) // undefined
console.log('age' in person) // false

// printing all the properties of the person object using for in loop

for (let key in person) {
  console.log(key + ": " + person[key]) // firstName: Jane, lastName: Doe, city: New York
}