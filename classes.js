// JavaScript doesn't have classes like other object-oriented languages like Java or Ruby do
// The class keyword is syntactical sugar for prototype-based object constructors
// Classes are a template for creating objects, they encapsulate data with code to work on that data

// Getters and setters are accessor propertoes that execute on getting and setting a value, but look like regular properties to external code
let obj = {
    get propName() {
        // getter, the code executed on getting obj.propName
    }

    set propName(value) {
        // setter, the code executed on setting obj.propName = value
    }
}

let user = {
    name: "john",
    surname: "smith"

    get fullName() {
        return `${this.name} ${this.surname}`;
    }

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
}

// As a result, we have a "virtual" property fullName which is readable and writable
alert(user.fullName); // prints 'john smith'
user.fullName = "alice cooper"

// A property can be either an accessor (has get/set methods) or a data property (has a value), not both

// The basic class syntax looks like this:
class MyClass {
    prop = value; // property

    constructor() { // constructor
    }

    method() { // method
    }

    get something() { // getter method
    }

    set something() { // setter method
    }

    [Symbol.iterator]() { // method with computed name (symbol here)
    }
}

// Classes are technically functions (that we provide as a constructor) while methods, getters, and setters are written to Class.prototype

// Classes are characterized by 3 aspects:
/**
 * Kind: getter, setter, method, or field
 * Location: static or instance
 * Visibility: public or private
 */

// The extends keyword is used in class declarations or class expressions to create a class as a child of another constructor (either a class or a function)
// The extends keyword can be used to subclass custom classes as well as built-in objects

// Static properties (fields and methods) are defined on the class itself instead of each instance
// Static methods are often used to create utility functions for an application, whereas static fields are useful for caches, fixed-configuration, or any other data that don't need to be replicated across instances
// They are like class variables (@@) in Ruby...

// Classes can be defined as a class expression (anonymous or assigned to a variable) or class declaration
// Declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Expression; the class is anonymous but assigned to a variable
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Expression; the class has its own name
const Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};