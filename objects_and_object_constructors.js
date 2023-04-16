// Use object literal syntax to define an object
const myObject = {
    property: "value",
    otherProperty: 50,
    "property with spaces": function() {
        // do stuff
    }
}

// Use dot notation or bracket notation to get values
myObject.property // "value"
myObject["property with spaces"] // [Function]

// Use "this" keyword in object constructors
function Player(name, marker) {
    this.name = name
    this.marker = marker
    this.sayName = function() {
        console.log(name)
    }
}
const playerOne = new Player('jaime', 'X')

// A prototype is another object that the original object inherits from
// It's best to define functions on the prototype, so a single instance of each function will be shared between all created objects
// The original object has access to all its prototype's methods and properties

// Set the prototype equal to a function that will return a copy of the object prototype you intend to inherit from
// NinthGrader inherits from Student
NinthGrader.prototype = Object.create(Student.prototype)

// Object.create returns a new object with the specified prototype and optional additional properties

// JavaScript is a prototype-based language as opposed to class inheritance seen in PHP, Python, and Java
// In JavaScript, objects have a special hidden property [[Prototype]] that is either null or references another object