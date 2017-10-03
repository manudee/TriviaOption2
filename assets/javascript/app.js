var triviaTime = 15;
var questionDone = false;


var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;





var currentQuestion = 0;
var quizDone = false;

//global object for trivia questions
var triviaQ = [


{
  question: "What is the national language of India?",
  answers: ["English","Hindi","Tulu","Nepali"],
  correctAnswer: 1

},

{
  question: "The oldest parliament in the world belongs to what country?",
  answers: ["Iceland","Netherlands","Scotland","Ireland"],
  correctAnswer: 0

},

{
  question: "In what year did Fidel Castro die?",
  answers: ["2015","2014","2016","2017"],
  correctAnswer: 2

},

{
  question: "HTML and CSS are computer languages used to create what?",
  answers: ["Bugs","Games","Toys","WebSites"],
  correctAnswer: 3

},

{
  question: "In our solar system which two planets rotate clockwise?",
  answers: ["Mars and Saturn","Neptune and pluto","Venus & Uranus","None of the above"],

  correctAnswer: 2

}



]

var  totalQuestions = triviaQ.length;



function startGame() {
              console.log("questionDone " + questionDone);
              if(!questionDone){
                  triviaId = setInterval(decrement, 1000);
                  questionDone = true;
              $("#triviaTime").show();
  }
}


function stopGame() {

                clearInterval(triviaId);

}

 function reset(){
                questionDone = false;
                triviaTime = 15;
                correctAnswers = 0;
                incorrectAnswers = 0;
                unanswered = 0;
                currentQuestion = 0;
                totalQuestions = triviaQ.length;
                $("#startGame").show();
                $("#results").empty();
                $("#reset").hide();
                //$("#nextQuestion").hide();
                $("#questions").empty();
                $("answers").empty();
}




 function decrement() {
  
                triviaTime--;
                $("#triviaTime").empty();
                $("#triviaTime").html("<h2>" + "TimeRemaining:" +  triviaTime + "</h2>");
                
                if(triviaTime === 0)
                  stopGame();

}



function createQuiz(){
   
//hide the startGame button once Quiz is created.
                startGame();
                console.log(totalQuestions);
      

               
                 $("#startGame").hide();


                 console.log(triviaQ[currentQuestion].question);
         
                 //var html = $('<div>').addClass("question col-md-offset-5 game").appendTo('#question');

                 //$(html).empty();
                 //$(html).append(triviaQ[currentQuestion].question);
                 $("#question").empty();
                 $("#question").append('<h2>' + triviaQ[currentQuestion].question + '</h2>');
    
          //console.log(triviaQ[i].question)
                  $("#answers").empty();
                  console.log(triviaQ[currentQuestion].answers.length);
                  for (var i = 0; i < triviaQ[currentQuestion].answers.length; i++) {

                      var ans =$('<div id=answer'+currentQuestion+i+' name=answer'+ currentQuestion +'><label for=answer'+currentQuestion+i+'>' + triviaQ[currentQuestion].answers[i] +'</label></div>').addClass("answers col-md-offset-5 game").appendTo("#answers");
                      
                      console.log("Creating Quiz");
                      console.log(ans);

                  }
           



                console.log(currentQuestion);
                console.log(totalQuestions);


}



function checkAnswer(){


                console.log("IN CHECK ANSWER");
$('#question').each(function(i,obj){
  


      
                console.log("i " + i);
                console.log("currentQuestion " + currentQuestion);
                var answerValue =  $('id'+currentQuestion+i+':clicked').text();

                var an = $("#answer"+currentQuestion+i).text();

                console.log("AN is " + an);
                $("#answer"+currentQuestion+i).click(function(){
                    alert($(this).text());
                    var answerValue =  $('id'+currentQuestion+i+':clicked').text();
                     console.log("You Clicked " + answerValue);

                })
            

               
                   
                var currAns = triviaQ[currentQuestion].answers[triviaQ[currentQuestion].correctAnswer];
                console.log("Correct Answer " + currAns);

                if(answerValue === currAns){
                   correctAnswers++;  
                   console.log("That's Correct!");

                   }
                else if(!answerValue){
                    unanswered++;

                    }
                else {
                    incorrectAnswers++;
                    console.log("Nope that is incorrect! Correct answer was " + currAns);
                  }
 });
  
               currentQuestion++;
               totalQuestions--;
  // console.log("number of correct answer:"+correctAnswers);
  // console.log("number of Incorrect answer:"+incorrectAnswers);
  // console.log("number of unanswered questions:"+ unanswered);
}



function displayStats(){


              //remove questions and answers from the div with class game once stats are displayed.
              $(".game").remove();
               //remove submit button once stats are displayed
              $("#submit").remove();

              //set triviaTime to 0 and call StopGame
              triviaTime = 0;
              stopGame();

              //hide triviaTime div on displaying stats
              $("#triviaTime").hide();

              //empty the results before you append the stats. This is needed for subsequent games even if not needed for the 1st run
              $("#results").empty();

              $( "#results").append(
                "<div><h2>All Done!!!</h2></div>",
                "<div><h2>Correct Answers: " + correctAnswers + "</h2></div>",
                "<div><h2>Incorrect Answers: " + incorrectAnswers + "</h2></div>",
                "<div><h2>Unanswered: " + unanswered + "</h2></div>");


              //show the reset button to start a new game
              $("#reset").show();


}





function displayAnswer(){




}


$(document).ready(function(){
  //hide reset at the beginning
           $("#reset").hide();
           //$("#nextQuestion").hide();

  //on clicking start game, create the quiz and start the timer
           $("#startGame").on("click", function(){
                       //$("#nextQuestion").show();
                       createQuiz();
                       currentQuestion++;
                       totalQuestions--;
  //on clicking submit check the answer to calculate variables and then call displaystats to show results.                  
           $("body").on("click", "#answers", function(){
                    
                   
                    if(totalQuestions > 0){
                      stopGame();
                      questionDone = false;
                      triviaTime = 15;
                      startGame();
                      createQuiz();
                      console.log("CALLING CHEK ANSWER");
                      checkAnswer();
                    }

                    else if (totalQuestions===0){

                       reset();
                       stopGame();
                       //$("#nextQuestion").hide();
                     }


              });
      });

});

