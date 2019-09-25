// WEB STORAGE

// local storage
// session storage
// JSON (stringify and parse methods)
// web SQL

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
// console.log(jsonObj);

// From here we can now loop over the list of items and do stuff with them.

// SESSION STORAGE
// Similar to local storage in terms of applicable methods.
sessionStorage.setItem('full name', 'Sebastian Opiyo');
let val1 = sessionStorage.getItem('full name'); // returns the full name
//console.log(val1);
// NOTE: if it is an object we do as above. 


// WEB SQL
// Note: the W3C stopped supporting this storage instead shifted focus on web storage and indexed Db.
var db = openDatabase('mydb', '1.0', 'TEST DB', 2*1024*1024); // opens a new instance of the db

db.transaction(function(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
    tx.executeSql('INSERT INTO LOGS (id, log) VALUES(1, "LOG 1")');
});

let sqlValue = db.transaction(function(tx){
    tx.executeSql('SELECT * FROM LOGS'); // Not complete.
});

//console.log(sqlValue); 

// INDEXED DB
// We have to open the db just incase it was closed or never existed.
var request = indexedDB.open("library"); // we call it library.

