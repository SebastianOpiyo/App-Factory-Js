// web storage
// local storage
// session storage
// JSON (stringify and parse methods)

//LOCAL STORAGE.
// In local storage stores data in key-value pair.
// Everything stored in local storage is converted to a string.
localStorage.setItem('full name', 'Sebastian Opiyo');
let val = localStorage.getItem('full name'); // returns the full name.
//console.log(val);

// Local storage doesn't store objects. We have to stringify them first.
let homeObject = {"location":"Nairobi", "owner":"Sebastian Opiyo", "family":["Apollo", "conso", "mato", "simo"], "property":["land", "car", "animals"]};
//console.log(homeObject); // we get the object above.

let parsedObj = JSON.stringify(homeObject);
localStorage.setItem('home', parsedObj);

//To get the original JSON obj we have to parse.
let getValue = localStorage.getItem('home');
let jsonObj = JSON.parse(getValue);
console.log(jsonObj);

// From here we can now loop over the list of items and do stuff with them.

// SESSION STORAGE
// Similar to local storage in terms of applicable methods.
sessionStorage.setItem('full name', 'Sebastian Opiyo');
let val = sessionStorage.getItem('full name'); // returns the full name

// if it is an object we do as above. 


