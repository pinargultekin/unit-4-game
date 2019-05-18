//variables
var score = 0;
var wins = 0;
var losses= 0;
var randomNumber= 0;
var totalScore= 0;
var red = 0;
var blue = 0;
var yellow = 0;
var green = 0; 

//functions

//Setting random numbers
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
randomNumber = getRandomInt(19,120);
console.log("randomNumber is: " , randomNumber);
$("#randomNumber").text(randomNumber);

red = getRandomInt(1,12);
console.log("red crystal value is: " , red);


blue = getRandomInt(1,12);
console.log("blue crystal value is: " , blue);


yellow = getRandomInt(1,12);
console.log("yellow crystal value is: " , yellow);


green = getRandomInt(1,12);
console.log("green crystal value is: " , green);

//dom interaction

//adding value to total score when user click each gem/button
$("#red").on("click", function () { 
    totalScore += red;
    console.log("total score is : " , totalScore);
    check(); //check the total score if user win or lost
});

$("#blue").on("click", function () { 
    totalScore += blue;
    console.log("total score is : " , totalScore);
    check();
});

$("#yellow").on("click", function () { 
    totalScore += yellow;
    console.log("total score is : " , totalScore);
    check();
    
});
$("#green").on("click", function () { 
    totalScore += green;
    console.log("total score is : " , totalScore);
    check();
});

//Final condition check to finish the game
function check () {
    if ( totalScore === randomNumber){
        alert("You won! Keep up the work!");
        wins++;
        console.log("Wins: " + wins);
        $("#wins").text(wins);
        reset();
    }else if ( totalScore > randomNumber){
        alert("You lost! Try harder next time!");
        losses++;
        console.log("Losses: " + losses);
        $("#losses").text(losses);
        reset();
    }
   }

//reset
function reset () {
    totalScore= 0;
    red = getRandomInt(1,12);
    blue= getRandomInt(1,12);
    yellow = getRandomInt(1,12);
    green= getRandomInt(1,12);
    randomNumber = getRandomInt(19,120);
$("#totalScore").text(totalScore);
}
