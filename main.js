$(document).ready(function(){
    $("#btn").click(function(){
        
        var value = $("#value").val();
        if(!isNaN(value)){
            if($("li").length){
                var elements = $("li").toArray();
                elements.forEach(element => {
                    element.remove();
                });
            };
            $("#list").append("<li>Head: " + (value * 3).toFixed(2) + "</li>");
            $("#list").append("<li>Body: " + (value * 1.00).toFixed(2) +"</li>");
            $("#list").append("<li>Shoulder: " + (value * 0.5).toFixed(2) +"</li>");
            $("#list").append("<li>Arms: " + (value * 0.5).toFixed(2) +"</li>");
            $("#list").append("<li>Hands: " + (value * 0.25).toFixed(2) +"</li>");
            $("#list").append("<li>Upper Legs: " + (value * 0.65).toFixed(2) +"</li>");
            $("#list").append("<li>Lower Legs: " + (value * 0.5).toFixed(2) +"</li>");
            $("#list").append("<li>Toes: " + (value * 0.25).toFixed(2) +"</li>");
        };
    });
});