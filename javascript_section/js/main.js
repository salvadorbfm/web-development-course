// main.js
// Esto es un comentario, como en C

$(document).ready(function(){
    $(document).on("mouseover", ".div-type-1" , function(){
        $(this).fadeTo("slow", 0.7);
        $(this).addClass("fancy-border");
    });
    $(document).on("mouseout", ".div-type-1" , function(){
        $(this).fadeTo("slow", 1.0);
        $(this).removeClass("fancy-border");
    });
});