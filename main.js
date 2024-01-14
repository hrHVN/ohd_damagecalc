$(document).ready(function(){
    $("#btn").click(function(){
        var value = $("#value").val();

        // Chechk if the input value is a valid number, if not show an error, and reload the window!
        if(isNaN(value)){
            window.alert("Pleas enter a valid type of number!");
            location.reload();
        };
            // Delete the list, before printing a new one!
            $("li").text(" ");
            
            // Calculate all the Crits
            let crit3x = (value * 3).toFixed(2);
            let crit1x = (value * 1).toFixed(2);
            let crit0_65x = (value * .65).toFixed(2);
            let crit0_5x = (value * .5).toFixed(2);
            let crit0_25x = (value * .25).toFixed(2);

        // assign values to the elements
        const bodyParts = {
                head : {text:`Head: ${crit3x}`, crit: crit3x},
                body :{text: `Body: ${crit1x}`, crit: crit1x},
                shoulders:{text: `Shoulders: ${crit0_5x}`, crit: crit0_5x},
                arms : `Arms: ${crit0_5x}` ,
                hands : { text: `Hands: ${crit0_25x}`, crit: crit0_25 } ,
                upper_legs : { text: `Upper Legs: ${crit0_65x}`, crit: crit0_65 },
                lower_legs: { text: `Lower Legs: ${crit0_5x}`, crit: crit0_5x},
                toes: { text: `Toes: ${crit0_25x}`, crit: crit0_25},
            };
        
        // Append list elements to the page, and add corresponding css based on damage values!
        for( let part in bodyParts){
            let li = $('<li>').text(bodyParts[part].text);
            if (bodyParts[part].crit >= 100) {
                li.css('background-color', 'yellow').css('color', 'black');
            }
            $('#list').append(li);
        }         
    });
});
