console.log(num2); //undefined
// Function defination 
function greeting() {
    console.log(num);
    var num = 20;
}
//function call
greeting();
var num2 = 40;


var b = 2;

function greeting1() {
    console.log(b); //prints 2
};
greeting1();


var e = 10;

function outer() {
    function inner() {
        console.log(e); // prints 10
    }
    inner();
}
outer();



function outer1() {
    inner1();
    var c = 20;

    function inner1() {
        console.log(c); //undefined
    }
}
outer1();





var d = 10;

function outer2() {
    var d = 60;

    function inner2() {
        console.log(d); // prints 60
    }
    inner2();
}
outer2();