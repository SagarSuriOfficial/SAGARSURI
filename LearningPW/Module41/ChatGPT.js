/* In this example:
We define a function greet that takes two arguments: name and greetingFunction. greetingFunction is a function that will be called with the name parameter to generate a greeting message.
We define two greeting functions: sayHello and sayHi.
We assign an anonymous function to the variable sayHi.
We pass the sayHello and sayHi functions as arguments to the greet function, demonstrating how functions can be passed around as values.
We define a function createGreetingFunction that takes a greeting parameter and returns a new function that will use that greeting to create a custom greeting message.
We demonstrate returning a function from another function and using it to create a custom greeting message.
This shows how functions in JavaScript can be manipulated just like any other data type, allowing for flexible and powerful programming techniques. */

// #01
// Define a function that takes another function as an argument
function greet(name, greetingFunction) {
    return greetingFunction(name);
}

// Define a function that returns a greeting message
function sayHello(name) {
    return "Hello, " + name + "!";
}

// Assign a function to a variable
var sayHi = function(name) {
    return "Hi, " + name + "!";
};

// Pass a function as an argument to another function
console.log(greet("Alice", sayHello)); // Output: Hello, Alice!
console.log(greet("Bob", sayHi));      // Output: Hi, Bob!

// Return a function from another function
function createGreetingFunction(greeting) {
    return function(name) {
        return greeting + ", " + name + "!";
    };
}

var customGreeting = createGreetingFunction("Welcome");
console.log(customGreeting("Eve"));    // Output: Welcome, Eve!

