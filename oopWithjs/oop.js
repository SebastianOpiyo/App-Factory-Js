// Constructor and object instances.
//JS uses special functions called constructor functions to define and initialize
//objects and their features. 
//You can create as many objects as you wish in an effective way.

// Creating a class using the normal function
function createNewPerson(name){
    const obj = {};
    obj.name = name;
    obj.greeting = function() {
        alert('Yo! My name is  ::' + obj.name );
    };
     return obj
}

const seba = createNewPerson('Sebastian');
// console.log(seba.name);
// console.log(seba.greeting());


// Alternatively we can employ the use of a constructor function that makes things quite neat.
// we don't need to construct an object first here instead we employ the use of `this`
function Person(name){
    this.name = name;
    this.greeting = name => 'My name is ' + this.name + '.';
}

// We can create several objects, each will have its own namespace.
const person1 =new Person('Nelly'); // We have to use 'new ' to instatiate a new obj.
console.log(person1.name);
console.log(person1.greeting());


// We can have a complicated classe with several objects and lists.