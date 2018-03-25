


window.onload = function aFnctn(){
    
    /*Buttons*/
    var buttonNext = document.getElementById("buttonNext");
    var buttonResult = document.getElementById("buttonResult");
    var buttonClear = document.getElementById("buttonClear");
    
    /*Div-s*/
    var question = document.getElementById("question"); 
    var zdjecie = document.getElementById("image");
    var okno = document.getElementById("window");
   
    
    question.innerHTML = ("Wprowadź kod soczewki:");
    
    /*Tablica*/
    var imagesArray = new Array(
            "R300P87", 
            "R225M83", 
            "R150M87", 
            "24RT475P88",
            "24RT300M88",
            "24RT125P88",
            "24RT110M84",
            "12RT550P88",
            "12RT475P88",
            "12RT200M88",
            "12RT150M88",
            "1RT700M90",
            "1RT375M85",
            "1RM475M85",);
 
    
    var l = imagesArray.length;
    
    buttonNext.onclick = function(n){
        n.preventDefault();
        var randomNumber = Math.floor(l*Math.random());
        document.getElementById("zdjecie").src = "images/" + imagesArray[randomNumber] + ".jpg";  
    };
    
      
    buttonResult.onclick = function(r){
       r.preventDefault(); 
       var answer = document.getElementById("answer");
       var result = okno.value;
       var actualImage = document.getElementById("zdjecie").src;
            if (!result === (actualImage)){
                
               answer.innerHTML = ("Niepoprawny kod soczewki./n Postaraj się");
        };
       
       
        
    };
    
   

};
  

     
     
     
     
     
     


