var buttonColours = ["red","blue","green",'yellow'];
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keydown(function() {
    if(!started){
        $("#level-title").text("Level: " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click( function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    
    console.log(userClickedPattern);

    playSound(userChosenColour);

    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);


} 
);

function startOver(){
    gamePattern = [];
    started = false;
    level = 0;
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        console.log("Success");

        if(gamePattern.length===userClickedPattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        console.log("Wrong");
        

        playSound("wrong");

        $("body").addClass("game-over");

        setTimeout(function (){
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");

        startOver();
    }
}

function nextSequence(){

    userClickedPattern= [];

    level++;
    $("#level-title").text("Level: "+ level);

    var randomNumber = Math.floor((Math.random() * 4));
    
    var randomChosenColour = buttonColours[randomNumber];

    //Push to the empty array
    gamePattern.push(randomChosenColour);

    //Animate the button
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

}

function playSound(name){
     //Play Audio
     var audio = new Audio("./sounds/" + name + ".mp3");
     audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");

    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    },100);
}

