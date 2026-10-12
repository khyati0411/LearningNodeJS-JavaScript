class Person {
    age;
    firstName;
    lastName;  
    
    get fullname() {
        return "John Doe"; // this will always return "John Doe" regardless of the firstName and lastName properties
    }

    //constuctoe is a special method that is called when an object is created from a class. It is used to initialize the properties of the object.
    /* here, the constructor is used to initialize the age, firstName and lastName properties of the Person class. When a new object is created from the Person class, 
    the constructor is called and the properties are initialized to their default values. */ 
    constructor() {
        this.age = 0;
        this.firstName = "";
        this.lastName = "";
    }
}

let person1 = new Person();
person1.age = 30;
console.log(person1.age) // 30
person1.firstName = "John";
console.log(person1.firstName) // John
person1.lastName = "Doe";  
console.log(person1.lastName) // Doe
person1.fullname
console.log(person1.fullname) // John Doe