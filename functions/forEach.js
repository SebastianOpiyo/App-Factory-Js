// forEach() method executes a provided function once for each array elem
// I love arrow functions and I will use it in here.
var array1 = [1, 2, 3, 4];
array1.forEach(e=>console.log(e));

//alternatively we would execute this as:
array1.forEach(function(elem){
    console.log(elem);
})