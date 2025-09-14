//* 1. Whenever we write an arrow function, we assign a function to a variable.
//* 2. So this is the short form of writing an arrow function.

const sum = (num) => {
  return num * 2;
};
const result = sum(2);
console.log(result); // 4

//* 3. If we have only one parameter, we can skip the parentheses.
