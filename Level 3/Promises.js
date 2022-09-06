
let promise = new Promise(function(resolve, reject) {
//Resolve calls the then function in a promise
    // resolve(20);
    setTimeout(function() {
        resolve(50);
    },4000);
    reject();

});
promise.then(function(num){
    console.log(num);
},function(){
    console.log("Error Occured")
})