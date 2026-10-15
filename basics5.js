//importing the Person class from basics7.js
const Person = require('./basics7.js');

let person1 = new Person("John", "Doe", 30); //creating a new object of the Person class
console.log(person1.fullname()) // John Doe //this will call the fullname method of the person1 object and return the actual firstName and lastName values

let day = 'tuesday ';
console.log(day.length);

let day2 = day.slice(0, 3);
console.log(day2);

console.log(day[2]);

let day4 = day.split('s'); //split the string into an array of strings using 's' as the separator
console.log(day4);
console.log(day4[1]); //take the second element of the split array
console.log(day4[1].length); //length of the second element of the split array
console.log(day4[1].trim().length); //length of the second element of the split array after trimming the whitespace from both ends

let quote = day + 'is the best day of the week';
console.log(quote);
let search = quote.indexOf('day'); //will return the index of the first occurrence of 'day'
console.log(search);
let search2 = quote.indexOf('day',5); //will return the index of the first occurrence of 'day' after index 5
console.log(search2);
console.log(quote.toUpperCase());
console.log(quote.toLowerCase());
console.log(quote.includes('best'));

let count = 0;
let search3 = quote.indexOf('day'); //will return the index of the first occurrence of 'day'
while (search3 != -1) {
  count++;
  console.log(search3);
  search3 = quote.indexOf('day', search3 + 1); //will return the index of the first occurrence of 'day' after index search3+1
}
console.log(count);

let date = '25';
let date2 = '12';
let difference = date - date2; //subtracting two strings will convert them to numbers and then subtract them
console.log(difference);
let difference2 = parseInt(date) - parseInt(date2); //subtracting two strings will convert them to numbers and then subtract them
console.log(difference2);
