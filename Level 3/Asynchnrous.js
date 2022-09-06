console.log("First Line")
setTimeout(function() {
    console.log("After 4 Seconds");
},4000)
setTimeout(function() {
    i=0;
    while(i<10000000){
        i+=1;
        console.log(i);
    }
},2000)
console.log("Second Line")