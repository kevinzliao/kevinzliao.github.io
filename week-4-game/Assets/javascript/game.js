$(document).ready(function() {
    
    var wins = 0;
    var losses = 0;
    $("#wins").text(wins);
    $("#losses").text(losses);
 
    //target number from 19 to 120
    var target = Math.floor(Math.random() * 102) + 19;
    $("#target").text(target);
    var totalScore = 0;
    $("#totalScore").text(totalScore);


    //randomly assign each a value between 1-12
    var crystal1 = Math.floor(Math.random()*12) + 1;
    var crystal2 = Math.floor(Math.random()*12) + 1;
    var crystal3 = Math.floor(Math.random()*12) + 1;
    var crystal4 = Math.floor(Math.random()*12) + 1;

    
    $("#crystals").on("click", "#crystal1", function() {
        totalScore += crystal1;
        $("#totalScore").text(totalScore);
        checkWin();
      }).on("click", "#crystal2", function() {
        totalScore += crystal2;
        $("#totalScore").text(totalScore);
        checkWin();
      }).on("click", "#crystal3", function() {
        totalScore += crystal3;
        $("#totalScore").text(totalScore);
        checkWin();
      }).on("click", "#crystal4", function() {
        totalScore += crystal4;
        $("#totalScore").text(totalScore);
        checkWin();
    });
    
    //helper function to check for win
    function checkWin() {
        if (totalScore > target) {
            alert("Sorry, you lost!");
            losses++;
            $("#losses").text(losses);
            reset();
        }
        if (totalScore == target) {
            alert("Nice, you won!");
            wins++;
            $("#wins").text(wins);
            reset();
        }
    }   
    //function to reset game variables after every round
    function reset() {
        target = Math.floor(Math.random() * 102) + 19;
        $("#target").text(target);
        totalScore = 0;
        $("#totalScore").text(totalScore);
    
    
        //randomly assign each a value between 1-12
        crystal1 = Math.floor(Math.random()*12) + 1;
        crystal2 = Math.floor(Math.random()*12) + 1;
        crystal3 = Math.floor(Math.random()*12) + 1;
        crystal4 = Math.floor(Math.random()*12) + 1;
    }

});