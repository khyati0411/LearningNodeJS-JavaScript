console.log("Hello World!!")

let a=4
console.log(a)
console.log(typeof a)

let b=4.5
console.log(b)
console.log(typeof b)

let c="Hello"
console.log(c)
console.log(typeof c)

var d=true
console.log(d)
console.log(!d)
console.log(typeof d)

let e=null
console.log(e)
console.log(typeof e)

let f=undefined
// let f = 5 // (uncommenting this line will throw an error because f is already declared in the same scope)
console.log(f)
console.log(typeof f)

//let just lets you declare a variable and assign a value to it. It is block scoped, meaning it is only accessible within the block it is defined in.
// let c = a+b (redeclaring c will throw an error because it is already declared in the same scope)
c = a+b  // (reassigning c will not throw an error because it is already declared in the same scope)
console.log(c)

//var is similar to let, but it is function scoped, meaning it is accessible within the function it is defined in. It can also be redeclared and updated.
var d = a-b
console.log(d)

const g = 10
console.log(g)
//g = 20 // (reassigning g will throw an error because it is a constant variable)

//summary of the differences between let, var and const
//let is block scoped, var is function scoped, const is block scoped
//let can be updated but not redeclared, var can be updated and redeclared, const cannot be updated or redeclared