var boxColor=document.getElementById("box");
console.log(boxColor);

function colorChange(){
    var value=boxColor.value;
    console.log(value);
    boxColor.style.backgroundColor=value;
}

//body color change

var bodyColor =document.getElementById("body");
console.log(bodyColor);
function bodyColorChange(){
    var body_Color=document.getElementById("body").value;
    
    document.body.style.backgroundColor=body_Color;
}

//para change
var para_font=document.getElementById("para");
console.log(para_font);
function parachange(){
    var para_change=document.getElementById("para");
    para_font.style.fontSize= "45px";
}