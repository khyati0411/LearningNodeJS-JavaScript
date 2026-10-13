class Person {
    age;
    firstName;
    lastName;  
    
    /*getter method is used to get the value of a property. It is used to access the properties of an object. It is called when the property is accessed. 
     It is used to get the value of a property. It is called when the property is accessed.*/
    get fullname() {
        return `${this.firstName} ${this.lastName}`; // this will return the actual firstName and lastName values
    }

    //constuctor is a special method that is called when an object is created from a class. It is used to initialize the properties of the object.
    /* here, the constructor is used to initialize the age, firstName and lastName properties of the Person class. When a new object is created from the Person class, 
    the constructor is called and the properties are initialized to their default values. */ 
    constructor(firstName, lastName, age) {
        this.age = age;
        this.firstName = firstName; //here the this keyword is used to refer to the current object. It is used to access the properties and methods of the current object.
        this.lastName = lastName; 
        /*when you use this keyword, you can access the properties and methods of the current object. 
        So the class can have multiple objects with different values for the properties. Each object will have its own copy of the properties and methods.*/
    }

    //method is a function that is defined inside a class. It is used to define the behavior of the object. It is called when the method is invoked.
    fullname() {
        return `${this.firstName} ${this.lastName}`; // this will return the actual firstName and lastName values
    }
}

let person1 = new Person("John", "Doe", 30);
console.log(person1.age) // 30
console.log(person1.firstName) // John
console.log(person1.lastName) // Doe
console.log(person1.fullname) // John Doe //this will call the getter method of the person1 object and return the actual firstName and lastName values
console.log(person1.fullname()) // John Doe //this will call the fullname method of the person1 object and return the actual firstName and lastName values