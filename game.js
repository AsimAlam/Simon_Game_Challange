
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var ucp = [];
var ca1 = [];

var f = false;
var level = -1;
// var randomChosenColour;

function nextSequence() {
    level++;
    $("#level-title").text("LEVEL" + level);
    ucp = [];
    var randomNumber1 = Math.random();
    randomNumber1 = Math.floor(randomNumber1 * 4);
    var randomChosenColour = buttonColours[randomNumber1];
    ca1.push(randomChosenColour);
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    var tom1 = new Audio("sounds/" + randomChosenColour+ ".mp3");
    tom1.play();
}

$(".btn").click( function () {
    //alert("asim");
    var button1 = $(this).attr("id");
    ucp.push(button1);
    playbt(button1);
    ap(button1);
    ca(ucp.length-1);
});


function playbt(name) {
    var tom2 = new Audio("sounds/" + name+ ".mp3");
    tom2.play();
}

function ap(cc) {
    $("#"+ cc).addClass("pressed");
    setTimeout(function () {
        $("#"+ cc).removeClass("pressed");
    }, 500);
    
} if (f === false) {
    $(document).on('keypress', function (e) {
        f = true;
        setTimeout(function () {
            nextSequence();
        }, 500);
    })
    
}
function ca(a1) {
    if (ca1[a1] != ucp[a1]) {
        var tom3 = new Audio("sounds/wrong.mp3");
        tom3.play();
        $(document.body).addClass("game-over");
        setTimeout(function () {
            $(document.body).removeClass("game-over");
        }, 1000);
        $("#level-title").text("GAME OVER - press any key to start");
        startOver();
    }
    
}

function startOver() {
    gamePattern = [];
    ucp = [];
    ca1 = [];

    f = false;
    level = -1;
}


