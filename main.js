$(document).ready(function(){
    $("#btn").click(function(){
        var value = $("#value").val();
        
        
        $("#list").append("<li>Head: " + (value * 3) +            " Remaining Health after 1 shot: " + (value * 3 - 100) + "</li>");
        $("#list").append("<li>Body: " + (value) +                " Remaining Health after 1 shot: " + (value - 100) + "</li>");
        $("#list").append("<li>Shoulder: " + (value * 0.5) +      " Remaining Health after 1 shot: " + (value * 0.5 - 100) + "</li>");
        $("#list").append("<li>Arms: " + (value * 0.5) +          " Remaining Health after 1 shot: " + (value * 0.5 - 100) + "</li>");
        $("#list").append("<li>Hands: " + (value * 0.25) +        " Remaining Health after 1 shot: " + (value * 0.25 - 100) + "</li>");
        $("#list").append("<li>Upper Legs: " + (value * 0.65) +   " Remaining Health after 1 shot: " + (value * 0.65 - 100) + "</li>");
        $("#list").append("<li>Lower Legs: " + (value * 0.5) +    " Remaining Health after 1 shot: " + (value * 0.5 - 100) + "</li>");
        $("#list").append("<li>Toes: " + (value * 0.25) +         " Remaining Health after 1 shot: " + (value * 0.25 - 100) + "</li>");
    });
});