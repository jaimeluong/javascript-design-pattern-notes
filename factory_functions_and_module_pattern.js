// Factory functions set up and return the new object when you call the function
const personFactory = (name, age) => {
    const sayHello = () => console.log('hello!');
    return ( name, age, sayHello );
};

const jaime = personFactory('jaime', 24);
console.log(jaime.name); // 'jaime'
jaime.sayHello(); // 'hello!'

// Factory functions don't utilize the prototype, which incurs a slight performance penalty

// A closure is the combination of a function and the lexical environment within which that function was declared
// The concept of closure is the idea that functions retain their scope even if they are passed around and called outside of that scope
function makeFunc() {
    const name = 'mozilla';
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc(); // prints 'mozilla'

// In the context of factory functions, closures allow us to create private variables and functions
// Private functions are functions that are used in the workings of our objects that are not intended to be used elsewhere in our program

// In lieu of prototypes and inheritance seen in constructors, you just pull out the specified method and property on the "parent" object
// You can pick and choose which functions you want to include in your new object

// Modules are similar to factory functions, but wrap the factory in an IIFE (immediately invoked function expression)
const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
        add, sub, mul, div,
    };
})();

calculator.add(3,5); // 8
calculator.sub(6,2); // 4
calculator.mul(14,5534); // 77476

// Rule of thumb: if you only ever need ONE of something, use a module. If you need multiple of something, create them with factories
// An example would be for a Tic-Tac-Toe game, you need one gameBoard but multiple players