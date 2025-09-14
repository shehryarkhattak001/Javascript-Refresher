//! Undesrtanding the Classes in JS.

const person = {
  name: "Max",
  call() {
    console.log("Hello");
  },
};

//! Constructor
//* A property is adding by constructor, that is a default method you can add to any class which will be execued whenever you instantiate the class and the method is created with just name of the function.

class Person {
  constructor() {
    this.name = "John";
  }
  printMyName() {
    console.log(this.name);
  }
}

// A class is instantiated with the new keyword.
// We can use this class to store an instance(object) in a constant with new keyword.

const myPerson = new Person();
myPerson.printMyName(); // John
