greeting1(); // inside the greeting1
greeting2(); // error cause it was not defined.
var num = 50;

function greeting1() {
    console.log("Inside Greeting 1");
}
var greeting2 = function() {
    console.log("Inside Greeting 2");
}