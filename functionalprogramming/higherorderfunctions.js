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


// function afn() {
//     console.log("afn")

//     function num() {
//         console.log("res");
//     }
//     return num;
// }
// let res = afn();
// res();
// console.log(res);



// make funciton to get numbers out of an arrays

let arr = [1, true, 'Hello', 4, 'World', 'false', 5, 9, 10];

// function getNumber(arr) {
//     var arr1 = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') {
//             arr1.push(arr[i]);
//         }
//     }
//     console.log(arr1);
// }
// getNumber(arr);

// check for string 
function get(x, fn) {
    let res = [];
    for (let i = 0; i < x.length; i++) {
        if (fn(arr[i])) {
            res.push(arr[i]);
        }
    }
    return res;
}

function checkforstring(i) {
    return typeof i === 'string';
}

function checkfornumber(i) {
    return typeof i === 'number';
}

function checkforboolean(i) {
    return typeof i === 'boolean';
}
console.log(get(arr, checkforstring));
console.log(get(arr, checkforboolean));
console.log(get(arr, checkfornumber));