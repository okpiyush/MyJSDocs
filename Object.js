let obj = {
    username: "Hello",
    email: "Hello@gmail.com"
}
console.log(obj);
console.log(obj.username)
console.log(obj.email)
delete obj.username;
console.log(obj.username) // Will point to Undefined
delete obj.email;
console.log(obj.username) // Will point to Undefined