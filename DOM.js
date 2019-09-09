// Enough, I have been intimidated enough and from today it is U-TURN!
// I am not the worst!

// We Start with the DOM.
// Is made up of objects.

//  LESSON I : What is the Dom.

// To inspect the DOM
console.log(document);
document.bgColor = "red";

//  LESSON II : DOM Functions

// creates a paragraph
var paragraph = document.createElement('P');

// Add text to a paragraph
paragraph.textContent = 'I must know how it all works.';

// add test to body
document.body.appendChild(paragraph);

//  LESSON III : Event Listeners
//Event Listeners
var div = document.createElement('DIV');

//Set height of Element
document.body.appendChild(div);
div.addEventListener('mousemove', function(event) {
    console.log(event);
})

// What is a call back function.
