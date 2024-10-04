const display=document.querySelector(".display");

const clearExp=()=>{
    display.value="";
}
function updateExp(input) {
    display.value+=input;
}
function calcExp(){
    try{
        display.value=eval(display.value);
    }catch{
        display.value="Error";
    }
}
function deleteExp(){
    if(display.value==="")
        return 0;
    else if(display.value==="Error")
        clearExp();
    let l=display.value.length-1;
    display.value=display.value.slice(0,l);
}