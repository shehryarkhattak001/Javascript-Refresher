//! Arrow Funtion
//* 1. Whenever we write an arrow function, we assign a function to a variable.
//* 2. So this is the short form of writing an arrow function.

//function expression using arrow function.. Jab bhi apka arithmetic operation involve hoga to woh apka function expression hoga.
const sum = (num) => {
  return num * 2;
};
const result = sum(2);
console.log(result); // 4

//* 3. If we have only one parameter, we can skip the parentheses.

//? 2nd way// Function expression way
const subtract = function () {
  console.log(3 - 9);
};
subtract(); // -6

//! Regular Function OR Function Declaration
function printName(name) {
  console.log("user name", name);
}
//Function Calling
printName("John"); // user name John
