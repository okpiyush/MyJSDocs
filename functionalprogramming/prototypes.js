let person={
    username : " Hello",
    bio : function () {
        return `My name is ${this.username}`
    }
}


console.log(person.username); //Hello
console.log(person.bio()); //My Name is Hello
console.log(person.firstname); //Undeffined
// console.log(person.getInstaId()); //error
console.log(person.toString()); //[object Object]
console.log(person.__proto__); //



arr=[1,2,3,4,5,6]

console.log(arr)
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__)
console.log(arr.__proto__.__proto__.__proto__);
string ='Awwwwwwww';
console.log(string)
console.log(string.__proto__);
console.log(string.__proto__.__proto__)
console.log(string.__proto__.__proto__.__proto__);



//adding our own prototypal fucntion to the Object


String.prototype.something=10;
console.log(string.something)

