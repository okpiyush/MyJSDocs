function outer() {
    let username = 'Hello';

    function inner() {
        console.log(username);
    }
    inner();
}
let fn = outer();
fn();


//Real world closure
function counter() {
    let count = 0;
    return {
        getCount: function() { return count; },
        increment: function() { count++; }
    }
}