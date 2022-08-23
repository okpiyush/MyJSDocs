// function a(B) {
//     console.log(B);
// }


// let b = 10;
// a(b);



//Passing Funciton as a parameter.
// function afn(fn) {
//     fn();
//     console.log(fn);
// }

// function bfn() {
//     console.log('Inside bfn');
// }

// afn(bfn);


//funcitons inside the function call


// function afn(fn) {
//     fn();
//     console.log(fn);
// }



// afn(function() {
//     console.log('Inside bfn');
// });

//


function afn() {
    console.log("afn")

    function num() {
        console.log("res");
    }
    return num;
}
let res = afn();
res();
console.log(res);