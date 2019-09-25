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
//console.log(person1.name);
//console.log(person1.greeting());


// We can have a complicated classes with several objects and lists.


// Class Declaration
class Rectagle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

// classes are not hoisted auto like the class functions or functions.
class Square {};
const Square1 = new Square(); // we will get a reference error here.
//console.log(Square1);


// Class Expressions
// unnamed
let Rectangle = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  //console.log(Rectangle.name);
  // output: "Rectangle"
  
  // named
  let Rectangle2 = class Rectangle2 {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter method.
    get area(){
        return this.calcArea();
    }

    // Method - fn within a class
    calcArea(){
        return this.height * this.width;
    }

  };
  // console.log(Rectangle2.name);
  // output: "Rectangle2"

  const squareArea = new Rectangle2(10, 20);
  //console.log(squareArea.area);


// STATIC METHODS
//`static` keyword defines static method for a class
// are called without instantiating their class
// cannot be called through a class instance
// NOTE: Code within `class` body is by default in `strict mode.`

class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.hypot(dx, dy);
    }
  }
  
  const p1 = new Point(7, 5);
  const p2 = new Point(10, 10);
  p1.distance; //undefined
  p2.distance; //undefined
  
  // console.log(Point.distance(p1, p2)); // 7.0710678118654755


// DOING CLASSES THE OLD WAY.
function Animal() { }

Animal.prototype.speak = function() {
  return this;
}

Animal.eat = function() {
  return this;
}

let obj = new Animal();
let speak = obj.speak;
// with the use of `class` this returns undefined instead of global object.
//console.log(speak()); // global object

let eat = Animal.eat;
//console.log(eat()); // global object

class Vehicle {
    constructor(name, make) {
        this.name = name;
        this.make = make;
    }

    carName(){
        console.log(`The name of the vehicle is ${this.name}`);
    }
}

// A Sub-class

class Car extends Vehicle {
    constructor(name, make, owner) {
        super(name, make);
        this.owner = owner;
    }

    carName(){
        console.log(`The name of the car is ${this.name} and the owner is ${this.owner}.`);
    }
    
}

// create a real object now:
let newCar = new Car('Pick-Up', 'toyota', 'sebastian');

newCar.carName();

// INHERITANCE USING "Object.setPrototypeOf()"
const Human = {
    speak() {
      console.log(`${this.name} speaks a language.`);
    }
  };
  
  class Jane {
    constructor(name) {
      this.name = name;
    }
  }
  
  // If you do not do this you will get a TypeError when you invoke speak
  Object.setPrototypeOf(Jane.prototype, Human);
  
  let d = new Jane('Mitzie');
  d.speak(); //  speaks a language.