//Take Input from the user

function step1(fn){
    setTimeout(()=>{
        console.log('User selecting Image .......');
        fn('My_Image.jpg');
        
    },4000);
    
}

//Give Output to the user.

function step2(image,fn3){
    setTimeout(()=>{
        console.log(`Adding Filter to ${image}`);
        fn3();
    },2000);
}
function step3(fn){
    setTimeout(()=>{
        console.log(`Adding caption to image`);
        fn();
        return "Caption.img";

    },3000)
}

function step4(fn){
    setTimeout(()=>{
        console.log(`Uploading Image.....`);
        fn();
        // return "Caption.img";

    },2000);
}

step1(function (img){
    step2(img,function(){
        step3(function(){
            step4();
        });
    });
})
