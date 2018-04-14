$(document).ready(function() {
    
    var right = 0;
    var wrong = 0;
    var answered = 0;
    var questions = 0;
 
    var time = 30;
    var myVar = setInterval(function() { 
        myTimer()}, 1000);
        
    $(".button").click(endGame);

    function endGame() {  
        clearInterval(myVar);

        //finds total number of questions
        $(".question").each(function() {             
            questions++;
        });

        //check 
        $(".question :checked").each(function() {  
            answered++;
            if ($(this).val() == "correct") {
                right++;
            }
            else if ($(this).val() == "wrong") {
                wrong++;
            }
        });
        unanswered = questions - answered;

        $("#questions").empty();  
        $("#questions").append("<h1>Correct Answers: "+ right);  
        $("#questions").append("<h1>Wrong Answers: "+ wrong);    
        $("#questions").append("<h1>Unanswered: "+ unanswered);      
    }
    
    function myTimer() {
        time--;
        $("#time").text(time);
        

        if (time == 0) {
            alert("Time's up!");
            endGame();
        }

    }

 });