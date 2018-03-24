


window.onload = function aFnctn(){
    
    /*Buttons*/
    var buttonNext = document.getElementById("buttonNext");
    var buttonResult = document.getElementById("buttonResult");
    var buttonClear = document.getElementById("buttonClear");
    
    /*Div-s*/
    var radio = document.getElementById("questionRadio");
    var infoResult = document.getElementById("infoResult");
    
    /*Tablica*/
    var imagesArray = new Array("images/kp1.jpg", "images/kp2.jpg", "images/kp3.jpg", "images/kp4.jpg", "images/kp5.jpg"); 
    var l = imagesArray.length;
    
    buttonNext.onclick = function(n){
    n.preventDefault();
    var randomNumber = Math.floor(l*Math.random());
    document.getElementById("infoResult").src = imagesArray[randomNumber];  
    };

};
  

     
     
     
     
     
     


