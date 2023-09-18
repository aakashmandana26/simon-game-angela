var buttonColours = ["green", "red", "yellow","blue"]   //game buttons

var gamePattern = [];                                   //array to record random game pattern

var userClickedPattern = [];                            //pattern of buttons clicked by user

function nextSequence(){                                //function to generate random number
    var randomNumber=Math.floor(Math.random()*4);
    return randomNumber;
}

var randomChosenColour = buttonColours[nextSequence()]  


gamePattern.push(randomChosenColour);                   //push randomChosenColour in gamePattern array


$(document).keydown(function(){
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/"+randomChosenColour+".mp3");
    audio.play(); 
})



$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    $(this).addClass("pressed") ;
    setTimeout(function (){$(".btn").removeClass("pressed")}, 100);
    var audio = new Audio("sounds/"+userChosenColour+".mp3");
    audio.play();
    
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
})


















