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
            $("#list").append("<li>Head: " + (value * 3) +            " Remaining Health after 1 shot: " + (100 - value * 3) + "</li>");
            $("#list").append("<li>Body: " + (value) +                " Remaining Health after 1 shot: " + (100 - value) + "</li>");
            $("#list").append("<li>Shoulder: " + (value * 0.5) +      " Remaining Health after 1 shot: " + (100 - value * 0.5) + "</li>");
            $("#list").append("<li>Arms: " + (value * 0.5) +          " Remaining Health after 1 shot: " + (100 - value * 0.5) + "</li>");
            $("#list").append("<li>Hands: " + (value * 0.25) +        " Remaining Health after 1 shot: " + (100 - value * 0.25) + "</li>");
            $("#list").append("<li>Upper Legs: " + (value * 0.65) +   " Remaining Health after 1 shot: " + (100 - value * 0.65) + "</li>");
            $("#list").append("<li>Lower Legs: " + (value * 0.5) +    " Remaining Health after 1 shot: " + (100 - value * 0.5) + "</li>");
            $("#list").append("<li>Toes: " + (value * 0.25) +         " Remaining Health after 1 shot: " + (100 - value * 0.25) + "</li>");
        };
    });
});