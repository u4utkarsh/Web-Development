function changeImage(num1, num2){
    var pic1= "dice"+num1+".png";
    var pic2= "dice"+num2+".png";

    document.querySelector(".img1").setAttribute("src","./images/"+ pic1 );
    document.querySelector(".img2").setAttribute("src","./images/"+ pic2 );
}

var num1= Math.ceil( Math.random()*6 );
var num2= Math.ceil( Math.random()*6 );

if(num1>num2){
    document.querySelector("h1").innerHTML= " 🚩 Play 1 Wins! ";
}
else if(num1<num2){
    document.querySelector("h1").innerHTML= " Player 2 Wins! 🚩 ";
}
else {
    document.querySelector("h1").innerHTML= " Draw! ";
}
changeImage(num1, num2);