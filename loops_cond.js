
// if 
// while
// do while
// for loop
// switch
// turnery

/*
var age = 20;
if (age < 18)
{
    console.log("Go back to school");
}
else
{
    console.log("Get married.");
}

*/

//while

/*
var numbers =[1,2,3,4,5];

//incrementor
var i =0;

while(i < numbers.length) 
{
    console.log(numbers[i] *=2)
    i++;
}

*/

/*
var numbers =[1,2,3,4,5];
var i =6;

do{
    console.log("our counter is ", i);
    i++;
}
while(i < numbers.length);
*/

//FOR LOOP
var numbers =[1,2,3,4,5];
for(var i =0; i< numbers.length; i++)
{
    // console.log(i);
}

// switch

let grade = 'C'

switch(grade) {
    
    case 'A':
        console.log('Good')
        break 

    case 'B':
        console.log('Do Better')
        break

    case 'F':
        console.log('Drop out')
        break 
    
    default:
        console.log('Hey you didnt do exam')

}


// ternary
// if 

let age = 34

//  age < 18 ? console.log('underage') : console.log('prepare to die')
let msg = age < 18 ? 'underage' : 'prepare to die'
console.log(msg)

