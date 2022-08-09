function squares(num) {
    console.log(num * num);
}


squares(10);
squares(20);

function grade(num) {
    let rade;
    if (num > 90) {
        rade = 'A';
    } else if (num > 80) {
        rade = 'B';
    } else if (num > 70) {
        rade = 'C';
    } else if (num > 60) {
        rade = 'D';
    } else {
        rade = 'Fail';
    }
    return rade;
}

let score = 87;
let grad = grade(score);
console.log(grad);