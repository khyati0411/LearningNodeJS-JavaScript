var marks = [85, 92, 78, 96, 88];
console.log(marks);
var subMarks
marks[3] = 69;
console.log(marks);
console.log(marks.length);

//add a new mark to the end of the array
marks.push(100);
console.log(marks);

//remove the last mark from the array
marks.pop();
console.log(marks);

//add a new mark to the beginning of the array
marks.unshift(100);
console.log(marks);

//remove the first mark from the array
marks.shift();
console.log(marks);

//find the index of a mark in the array
var index = marks.indexOf(78);
console.log(index);

//remove a mark from the array by index
marks.splice(index, 2);
console.log(marks);

//find if a mark is in the array
var isInArray = marks.includes(92);
console.log(isInArray);