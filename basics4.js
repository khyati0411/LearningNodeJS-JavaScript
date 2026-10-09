//summing numbers with function
function add(a, b) {
  return a + b;
}
var total = add(5, 10);
console.log(total);

//summing numbers with no named function
var total2 = function (a, b) {
  return a + b;
};
console.log(total2(5, 10));

//summing numbers with arrow function
var total3 = (a, b) => a + b;
console.log(total3(5, 10));