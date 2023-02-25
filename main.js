let screen = document.getElementById("screen");
let btns = document.getElementsByClassName("btn");

for(let item of btns){
    item.addEventListener('click',(e)=>{
        itemValue = e.target.value;

        if(itemValue=="AC"){
            screen.value = screen.value.toString().slice(0,-1);
        }
        else if(itemValue == "DE"){
            screen.value = "";
        }
        else if(itemValue == "="){
            screen.value = eval(screen.value);
        }
        else{
            screen.value+=itemValue;
        }
    })
}