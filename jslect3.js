// // let password;
// console.log(password);

let email = 'abc@email.com';
if (email === undefined) {
    console.log("Email not provided");
} else {
    console.log(email);
}

function greeting(firstname) {
    console.log(`Hello ${firstname}`);
}

function sum(a, b) {
    // return a + b;
}
greeting();
let sum1 = sum(10, 20);
console.log(sum1);

let email1;
console.log(email1);

email1 = null;
console.log(email1);


function grade(num = 0) {
    let rade;
    if (num > 90) {
        rade = 'A';
    } else if (num > 80) {
        rade = 'B';
    } else if (num > 70) {
        rade = 'C';
    } else if (num > 60) {
        rade = 'D';
    } else if (num === undefined) {
        rade = "Z";
    } else if (num < 60) {
        rade = 'Fail';
    }
    return rade;
}

let score;
let grad = grade();
console.log(grad);