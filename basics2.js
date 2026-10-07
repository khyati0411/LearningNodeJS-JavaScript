const flag = true;

//if conditional statement with block scope using let

/* if condition is true it'll be executed only once*/ 
if (!flag) {
  let x = 10;
  console.log(x); // Accessible here
}
// console.log(x); // Error: x is not defined, because x is block scoped
else {
  console.log(flag); // Accessible here
  let y = 20;
  console.log(y); // Accessible here
}
// console.log(y); // Error: y is not defined, because y is block scoped

//while loop with block scope using let

/* while loop will be executed until the condition is false */
let count = 0;
while (count < 3) {
  let z = count * 2;
  console.log(z); // Accessible here
  count++;
}
// console.log(z); // Error: z is not defined, because z is block scoped

//do while loop with block scope using let

/* do while loop will be executed at least once */
let num = 0;
do {
  let w = num + 5;
  console.log(w); // Accessible here
  num++;
} while (num < 3);
// console.log(w); // Error: w is not defined, because w is block scoped