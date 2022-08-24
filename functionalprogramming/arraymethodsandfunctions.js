arr = ['mango', 'orange', 'Banana', 'Apple', 'Grapes'];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// console.log('\n')

// for (let item of arr) {
//     console.log(item);
// }

// arr.forEach(function(item) { console.log(item) });


//Polyfills
//myforEach to take an argument and then print the value using the fucntion.
function myforeach(Arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        fn(Arr[i]);
    }
}
myforeach(arr, function(item) { console.log(item) });

// function myforeach(fn, arr) {
//     let i = 0;

//     fn(arr, i);
// }

// function fn(Arr, i) {
//     if (i < Arr.length) {
//         console.log(arr[i]);
//         i = i + 1;
//         fn(Arr, i);
//     } else {
//         return;
//     }
// }
// myforeach(fn, arr);
arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let newarr = arr.map(function(item) {
    return item + 40;
});
console.log(newarr);

let filteredarr = arr.filter(function(item) {
    if (item <= 40) {
        return true;
    } else {
        return false;
    }
});
console.log(filteredarr);