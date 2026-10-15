const Person = require('./basics7');

class Pet extends Person {

    /*This get method is overriding the get method of the parent class Person. It is used to get the value of the Location property. 
    It is called when the Location property is accessed.*/
    get location() {
        return 'BlueCross';
    }
    constructor(firstName, lastName, age) {
        super(firstName, lastName, age); //calling the constructor of the parent class Person
    }
}

let pet = new Pet('Sam', 'Doe', 4);
console.log(pet.fullname()) // Sam Doe
console.log(pet.location) // BlueCross