let h = 10;
h = 20;
console.log(h);
const y = 10;
// y=20;
// cant reassign const or redeclare
console.log(y);

const obj = {
    username: 'Messi'
}
obj.username = 'Ronaldo'
    // valid
console.log(obj);
// obj ={
//     username:'Messi'
// }    invalid

const arr = [1, 2, 3, 4];
arr[2] = 5;
// valid
console.log(arr);
// arr=[5,6,7,8]  invalid
// const usernamee;
// invalid
// console.log(usernamee);

var username = 'messi';
var username = 'ronaldo';
console.log(username);