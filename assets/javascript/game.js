var goalNumber = Math.floor(Math.random()*(120-19+1)+19);
var currentNumber = 0;
var wins = 0;
var losses = 0;

var purpleNumber = Math.floor(Math.random()*(12)+1);
var redNumber = Math.floor(Math.random()*(12)+1);
var orangeNumber = Math.floor(Math.random()*(12)+1);
var blueNumber = Math.floor(Math.random()*(12)+1);

console.log("Goal Number: " + goalNumber);
console.log("Current Number: " + currentNumber);
console.log("Purple Number: " + purpleNumber);
console.log("Red Number: " + redNumber);
console.log("Orange Number: " + orangeNumber);
console.log("Blue Number: " + blueNumber);

$('#goalNumber').html("<div>Goal Number: " + goalNumber + "</div>");
$('#currentNumber').html("<div>Current Number: " + currentNumber + "</div>");
$('#wins').html("<div>Wins: " + wins + "</div>");
$('#losses').html("<div>Losses: " + losses + "</div>");

$('#purpleCrystal').on('click', function(){
    currentNumber += purpleNumber;
    $('#currentNumber').html("<div>Current Number: " + currentNumber + "</div>");
})

$('#redCrystal').on('click', function(){
    currentNumber += redNumber;
    $('#currentNumber').html("<div>Current Number: " + currentNumber + "</div>");
})

$('#orangeCrystal').on('click', function(){
    currentNumber += orangeNumber;
    $('#currentNumber').html("<div>Current Number: " + currentNumber + "</div>");
})

$('#blueCrystal').on('click', function(){
    currentNumber += blueNumber;
    $('#currentNumber').html("<div>Current Number: " + currentNumber + "</div>");
})

if (currentNumber > goalNumber) {
    losses--;
    $('#losses').html("<div>Losses: " + losses + "</div>");
    currentNumber = 0;
}

else if (currentNumber == goalNumber) {
    wins--;
    $('#wins').html("<div>Wins: " + wins + "</div>");
    currentNumber = 0;
}



