$(document).ready(function(){
    $("#btn").click(function(){
        let n = 0;
        var value = $("#value").val();
        if(!isNaN(value)){
            if($("li").length){
                var elements = $("li").toArray();
                elements.forEach(element => {
                    element.remove();
                });
                n = 0;
            };
            if(value*3 > 100){
                $("#list").append("<li>Head: " + (value * 3).toFixed(2) + "</li>");
                $("li").css("background", "yellow");
                $("li").css("color", "black");
                n++;
            } else{
                $("#list").append("<li>Head: " + (value * 3).toFixed(2) + "</li>");
            }

            if(value*1.0 > 100){
                $("#list").append("<li>Body: " + (value * 1.00).toFixed(2) + "</li>");
                $("li").css("background", "yellow");
                $("li").css("color", "black");
                n++;
            } else{
                $("#list").append("<li>Body: " + (value * 1.00).toFixed(2) + "</li>");
            }

            if(value*0.5 > 100){
                $("#list").append("<li>Shoulders: " + (value * 0.5).toFixed(2) + "</li>");
                $("li").css("background", "yellow");
                $("li").css("color", "black");
                n++;
            } else{
                $("#list").append("<li>Shoulders: " + (value * 0.5).toFixed(2) + "</li>");
            }

            if(value*0.5 > 100){
                $("#list").append("<li>Arms: " + (value * 0.5).toFixed(2) + "</li>");
                $("li").css("background", "yellow");
                $("li").css("color", "black");
                n++;
            } else{
                $("#list").append("<li>Arms: " + (value * 0.5).toFixed(2) + "</li>");
            }

            if(value*0.25 > 100){
                $("#list").append("<li>Hands: " + (value * 0.25).toFixed(2) + "</li>");
                $("li").css("background", "yellow");
                $("li").css("color", "black");
                n++;
            } else{
                $("#list").append("<li>Hands: " + (value * 0.25).toFixed(2) + "</li>");
            }

            if(value*0.65 > 100){
                $("#list").append("<li>Head: " + (value * 0.65).toFixed(2) + "</li>");
                $("li").css("background", "yellow");
                $("li").css("color", "black");
                n++;
            } else{
                $("#list").append("<li>Upper Legs: " + (value * 0.65).toFixed(2) + "</li>");
            }
            if(value*0.5 > 100){
                $("#list").append("<li>Lower Legs: " + (value * 0.5).toFixed(2) + "</li>");
                $("li").css("background", "yellow");
                $("li").css("color", "black");
                n++;
            } else{
                $("#list").append("<li>Lower Legs: " + (value * 0.5).toFixed(2) + "</li>");
            }
            if(value*0.25 > 100){
                $("#list").append("<li>Toes: " + (value * 0.25).toFixed(2) + "</li>");
                $("li").css("background", "yellow");
                $("li").css("color", "black");
                n++;
            } else{
                $("#list").append("<li>Toes: " + (value * 0.25).toFixed(2) + "</li>");
            }

            

            
            /*
            $("#list").append("<li>Body: " + (value * 1.00).toFixed(2) +"</li>");
            $("#list").append("<li>Shoulder: " + (value * 0.5).toFixed(2) +"</li>");
            $("#list").append("<li>Arms: " + (value * 0.5).toFixed(2) +"</li>");
            $("#list").append("<li>Hands: " + (value * 0.25).toFixed(2) +"</li>");
            $("#list").append("<li>Upper Legs: " + (value * 0.65).toFixed(2) +"</li>");
            $("#list").append("<li>Lower Legs: " + (value * 0.5).toFixed(2) +"</li>");
            $("#list").append("<li>Toes: " + (value * 0.25).toFixed(2) +"</li>");
            */
        };
    });
});