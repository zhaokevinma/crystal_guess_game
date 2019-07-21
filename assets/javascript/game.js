//Declare and initialize variables
var goalNumber = Math.floor(Math.random()*(120-19+1)+19);
var currentNumber = 0;
var wins = 0;
var losses = 0;
var purpleNumber = Math.floor(Math.random()*(12)+1);
var redNumber = Math.floor(Math.random()*(12)+1);
var orangeNumber = Math.floor(Math.random()*(12)+1);
var blueNumber = Math.floor(Math.random()*(12)+1);

//Reset function
var resetFunction = function () {
    goalNumber = Math.floor(Math.random()*(120-19+1)+19);
    currentNumber = 0;
    purpleNumber = Math.floor(Math.random()*(12)+1);
    redNumber = Math.floor(Math.random()*(12)+1);
    orangeNumber = Math.floor(Math.random()*(12)+1);
    blueNumber = Math.floor(Math.random()*(12)+1);
}

//Display function
var displayFunction = function () {
    $('#goalNumber').html("<div>Goal Number: " + goalNumber + "</div>");
    $('#currentNumber').html("<div>Current Number: " + currentNumber + "</div>");
    $('#wins').html("<div>Wins: " + wins + "</div>");
    $('#losses').html("<div>Losses: " + losses + "</div>");
    //For troubleshoot only
    console.log("Goal Number: " + goalNumber);
    console.log("Current Number: " + currentNumber);
    console.log("Purple Number: " + purpleNumber);
    console.log("Red Number: " + redNumber);
    console.log("Orange Number: " + orangeNumber);
    console.log("Blue Number: " + blueNumber);
}

//Lose function
var lose = function () {
    losses++;
    resetFunction();
    displayFunction();
}

//Win function
var win = function () {
    wins++;
    resetFunction();
    displayFunction();
}

//Function to check current number and update wins and losses
var updateFunction = function() {
    $('#currentNumber').html("<div>Current Number: " + currentNumber + "</div>");
    if (currentNumber > goalNumber) {
        lose();
    }
    else if (currentNumber == goalNumber) {
        win();
    }
}

//Display
displayFunction();

//Once you click on the crystals
//Can also do a switch case if want to further reduce lines of code
$('#purpleCrystal').on('click', function(){
    currentNumber += purpleNumber;
    $('#currentNumber').html("<div>Current Number: " + currentNumber + "</div>");
    updateFunction();
})

$('#redCrystal').on('click', function(){
    currentNumber += redNumber;
    $('#currentNumber').html("<div>Current Number: " + currentNumber + "</div>");
    updateFunction();
})

$('#orangeCrystal').on('click', function(){
    currentNumber += orangeNumber;
    $('#currentNumber').html("<div>Current Number: " + currentNumber + "</div>");
    updateFunction();
})

$('#blueCrystal').on('click', function(){
    currentNumber += blueNumber;
    $('#currentNumber').html("<div>Current Number: " + currentNumber + "</div>");
    updateFunction();
})





