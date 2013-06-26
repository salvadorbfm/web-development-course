// main.js
// Esto es un comentario, como en C
//:nth-child(2)
$(document).ready(function(){
    var bindSquares = function(){
        var clickCounter = 0;
        $(document).on("mouseover", ".div-type-1" , function(){
            $(this).fadeTo("slow", 0.7);
            $(this).addClass("fancy-border");
        });
        $(document).on("mouseout", ".div-type-1" , function(){
            $(this).fadeTo("slow", 1.0);
            $(this).removeClass("fancy-border");
        });
        $(document).on("click", ".div-type-1" , function(){
            var background = $(this).css("background-color");
            var newElement = "<p>" + background + "</p>";
            var hasContent = $(this).html();

            if (hasContent.length > 1){
                $(this).html("");
            }else{
                $(this).append(newElement);
            }
        });
    };

    bindSquares();
});