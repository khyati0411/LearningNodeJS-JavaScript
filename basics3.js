var marks = [85, 92, 78, 96, 88];
console.log(marks);
var subMarks = marks.slice(1, 4);
console.log(subMarks);
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

//print all the marks in the array using for loop
for (var i = 0; i < marks.length; i++) {
  console.log(marks[i]);
}

//sum of all the marks in the array
var sum = 0;
for (var i = 0; i < marks.length; i++) {
  sum = sum + marks[i];
}
console.log(sum);

//reduce method to find the sum of all the marks in the array
/* reduce method takes a callback function and an initial value as arguments
   The callback function takes two arguments, the accumulator and the current value
   The initial value is the value of the accumulator for the first iteration
   The reduce method returns a single value, which is the final value of the accumulator
*/
var total = marks.reduce(function (sum, mark) {
  return sum + mark;
}, 0);
//var total = marks.reduce((sum, mark) => sum + mark, 0);
console.log(total);


var scores = [85, 92, 77, 96, 88];
//create a new array with only the even scores
/* for loop to iterate through the scores array
   if the score is even, push it to the evenScores array
*/
var evenScores = [];
for (var i = 0; i < scores.length; i++) {
  if (scores[i] % 2 == 0) {
    evenScores.push(scores[i]);
  }
}
console.log(evenScores);

//create a new array with only the even scores using filter method
/* filter method takes a callback function as an argument
   The callback function takes the current value as an argument
   The filter method returns a new array with all the elements that pass the test implemented by the callback function
*/
/*filter will return the array only which matches the condition in the callback function, in this case, if the score is even */
var evenScoresFilter = scores.filter(function (score) {
  return score % 2 == 0;
});
//var evenScoresFilter = scores.filter(score => score % 2 == 0);
console.log(evenScoresFilter);

//create a new array with only the even scores and multiply them by 3 
/* for loop to iterate through the scores array
   if the score is even, push it to the evenScoresMultiplied array after multiplying it by 3
*/
var evenScoresMultiplied = [];
for (var i = 0; i < scores.length; i++) {
  if (scores[i] % 2 == 0) {
    evenScoresMultiplied.push(scores[i] * 3);
  }
}
console.log(evenScoresMultiplied);

//create a new array with only the even scores and multiply them by 3 and sum using map and reduce methods
/* map method takes a callback function as an argument
   The callback function takes the current value as an argument
   The map method returns a new array with the results of calling the callback function on every element in the array
*/
/* map will return the array with the result of the callback function, in this case, if the score is even, multiply it by 3 */
var evenScoresMultipliedMap = evenScoresFilter.map(function (score) {
  return score * 3;
});
//var evenScoresMultipliedMap = scores.filter(score => score % 2 == 0).map(score => score * 3);
console.log(evenScoresMultipliedMap);

var totalEvenScoresMultipliedMap = evenScoresMultipliedMap.reduce(function (sum, score) {
  return sum + score;
}, 0);
//var totalEvenScoresMultipliedMap = evenScoresMultipliedMap.reduce((sum, score) => sum + score, 0);
console.log(totalEvenScoresMultipliedMap);


//score using filer, map and reduce methods
var totalEvenScoresMultiplied = scores.filter(function (score) {
  return score % 2 == 0;
}).map(function (score) {
  return score * 3;
}).reduce(function (sum, score) {
  return sum + score;
}, 0);
//var totalEvenScoresMultiplied = scores.filter(score => score % 2 == 0).map(score => score * 3).reduce((sum, score) => sum + score, 0);
console.log(totalEvenScoresMultiplied);