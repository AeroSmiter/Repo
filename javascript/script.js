


window.onload = function aFnctn(){
    
    /*Buttons*/
    var buttonNext = document.getElementById("buttonNext");
    var buttonResult = document.getElementById("buttonResult");
    var buttonClear = document.getElementById("buttonClear");
    
    /*Div-s*/
    var question = document.getElementById("question"); 
    var image = document.getElementById("image");
    var window = document.getElementById("window");
    
    question.innerHTML = ("Wprowadź kod soczewki:");
    
    /*Tablica*/
    var imagesArray = new Array(
            "images/R300P87.jpg", 
            "images/R225M83.jpg", 
            "images/R150M87.jpg", 
            "images/24RT475P88.jpg",
            "images/24RT300M88.jpg",
            "images/24RT125P88.jpg",
            "images/24RT110M84.jpg",
            "images/12RT550P88.jpg",
            "images/12RT475P88.jpg",
            "images/12RT200M88.jpg",
            "images/12RT150M88.jpg",
            "images/1RT700M90.jpg",
            "images/1RT375M85.jpg",
            "images/1RM475M85.jpg",);
            
    var kotZnozem = imagesArray[0];
    var kotIkamera = imagesArray[1];
    var selfieZpsami = imagesArray[2];
    var wzialesWoreczki = imagesArray[3];
    var chomik = imagesArray[4];
    
    var l = imagesArray.length;
    
    buttonNext.onclick = function(n){
        n.preventDefault();
        var randomNumber = Math.floor(l*Math.random());
        document.getElementById("image").src = imagesArray[randomNumber];  
    };
    
    buttonResult.onclick = function(r){
       r.preventDefault(); 
       
       
        
    };
    
   

};
  

     
     
     
     
     
     


