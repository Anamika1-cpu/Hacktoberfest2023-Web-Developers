var text = document.querySelector(".text")
var classic = document.querySelector(".classic")
var body = document.querySelector("body")

var a = document.querySelector("#g");
var b = document.querySelector("#o");
var c = document.querySelector("#h");
var d = document.querySelector("#i");
var e = document.querySelector("#l");
var f = document.querySelector("#e");


text.addEventListener("mouseover", function(){
    
        a.style.color = "#4285F4";
        b.style.color = "#EA4335";
        c.style.color = "#FBBC05";
        d.style.color = "#4285F4";
        e.style.color = "#34A853";
        f.style.color = "#EA4335";
        classic.style.boxShadow = "0 0 30px white";
        text.style.cursor = "pointer"

})  

text.addEventListener("mouseout", function(){
     
        a.style.color = "white";
        b.style.color = "white";
        c.style.color = "white";
        d.style.color = "white";
        e.style.color = "white";
        f.style.color = "white";
        classic.style.boxShadow = "none";

})  





