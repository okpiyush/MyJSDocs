function person(username){
    this.username=username;
    this.bio=function(){
        console.log("Hello I am " + this.username);
    };
}
let person1=new person("Piyush");
console.log(person1);
console.log(person1.__proto__);
person1.bio();