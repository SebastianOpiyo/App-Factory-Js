// A callback is a function passed into another function as an argument,
// which is then invoked inside the outer function to complete some kind
// of routine or action

// the function simply prints out a name passed to it as a greeting.
function greeting(name) {
    alert('Hello ' + name);
}

// the function takes another function as an argument
// that function consumes the result of the main function.
function processUserInput(callback) {
    var name = prompt("Please enter your name: ");
    callback(name); // The 'callback' is the function.
}

processUserInput(greeting);