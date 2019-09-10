// A promise is a returned object to which you attach callbacks
// instead of passing callbacks into the a function.

function successCallback(result){
    console.log("Audio file ready at URL: " + result);
}

function failureCallback(error){
    console.log("Audio file ready at URL: " + error);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);

// Instead of passing callback functions into the function we use `.then()`

createAudioFileAsync(audioSettings).then(successCallback, failureCallback);


// Basically the callback with chaining should read:
doSomething()
.then(function(result) {
  return doSomethingElse(result);
})
.then(function(newResult) {
  return doThirdThing(newResult);
})
.then(function(finalResult) {
  console.log('Got the final result: ' + finalResult);
})
.catch(failureCallback); // to catch the error.


// the short form of the above code implemented with arrow functions:
doSomething()
.then(result => doSomethingElse(result))
.then(newResult => doThirdThing(newResult))
.then(finalResult => {
  console.log(`Got the final result: ${finalResult}`);
})
.catch(failureCallback);

// ()=> x  //is the short form for ()=>{return x;}
