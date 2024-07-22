
function letExample(){
    let x = 1;
    // x = 12; is allowed
    if(true){
        let x = 2;
        console.log(x);
        
    }
    console.log(x);
    
}
letExample();