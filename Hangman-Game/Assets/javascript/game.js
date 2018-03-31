$(document).ready(function() {
    
    var wins = 0;
    $("#wins").text(wins);
 
    //list of safari animals
    var animals = ["cheetah", "zebra", "lion", "giraffe", "elephant", "gazelle", "hippopotamus", "rhinoceros", "crocodile"];


    var guess = 6;
    var imgIndex = 0;

    //randomly select animal from array for current round
    curAnimal = animals[Math.floor(Math.random() * animals.length)];
    console.log(curAnimal);
    var blankArray = [];
    var usedLetters = [];
    
    for (i = 0; i < curAnimal.length; i++) {
        blankArray.push("_");
    }
    
    dispArray = blankArray.join(" ");
    console.log(blankArray);    
    $("#curArray").text(dispArray);
    
    //function to reset game variables after every round
    function reset() {
        guess = 6;
        imgIndex = 0;
        $("#hangman").attr('src', 'Assets/images/img' + imgIndex + '.png');
        $("#guessRemaining").text("You have "+guess+" guess(es) remaining!");
    
        //randomly select animal from array for current round
        curAnimal = animals[Math.floor(Math.random() * animals.length)];
        console.log(curAnimal);
        blankArray = [];
        usedLetters = [];
        $("#usedLetters").text("");
           
        for (i = 0; i < curAnimal.length; i++) {
            blankArray.push("_");
        }
        
        dispArray = blankArray.join(" ");
        console.log(blankArray);    
        $("#curArray").text(dispArray);
    }

    //game runs until 6 wrong guesses used

    $(document).keyup(function(e) {
    
    var userGuess = event.key;

    //regex to check if input is a letter
    var isAlpha = function(ch){
        return /^[A-Z]$/i.test(ch);
      }

    if (!usedLetters.includes(userGuess.toLowerCase()) && isAlpha(userGuess)){
        userGuess = userGuess.toLowerCase();
        usedLetters.push(userGuess);
        uJoin = usedLetters.join(" ");
        $("#usedLetters").text(uJoin);

            //check to see if letter is in
        var correctGuess = false;
        for (i = 0; i < curAnimal.length; i++) {
            if (userGuess == curAnimal.charAt(i)) {
                blankArray[i] = curAnimal.charAt(i);
                //guess is flagged as correct if character is in
                correctGuess = true;
            }
            dispArray = blankArray.join(" ");
            $("#curArray").text(dispArray);
        }
        
        console.log(blankArray.toString());
        console.log(curAnimal.toString());

        if (blankArray.join("") == curAnimal){
            alert("You won!");
            wins++;
            $("#wins").text(wins);
            reset();
        }

        if (!correctGuess) {
            guess-=1;
            imgIndex+=1;
        }


    } 


    $("#hangman").attr('src', 'Assets/images/img' + imgIndex + '.png');
    $("#guessRemaining").text("You have "+guess+" guess(es) remaining!");

    if (guess == 0) {
        alert("Sorry, you lost! The animal was: "+ curAnimal );
        reset();
    }

    });

    
      

});