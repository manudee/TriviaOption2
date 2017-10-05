var triviaTime = 15;
var breakTime = 5;
var questionDone = false;
 
//counters to keep tracj of answers
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
 
var currAns ;
 
//booleans to keep track of correct, incorrect and unanswered questions for displaying results after each ans click
var bool_correctAnswer = false;
var bool_incorrectAnswer = false;
var bool_unanswered = false;
 
var trueAnswer;
 
 
var currentQuestion = 0;
var quizDone = false;
var breakDone = false;
var ans;
 
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
 
 
function decrement() {
 
                triviaTime--;
                $("#triviaTime").empty();
                $("#triviaTime").html("<h2>" + "TimeRemaining:" +  triviaTime + "</h2>");
               
                if(triviaTime === 0)
                  stopGame();
 
}
 
 
function startBreak(){
    if(!breakDone){
                  breakTimeID = setInterval(decrementBreak, 1000);
                  breakDone = true;
             
 
 
}
}
 
 
function decrementBreak() {
 
   breakTime--;
                $("#breakTime").empty();
                $("#breakTime").html("<h2>" + "breakTimeRemaining:" +  breakTime + "</h2>");
 
                if(breakTime === 0){
                  stopBreak();
                  
                  breakDone = false;
                  breakTime = 5;
                  triviaTime = 15;
                  questionDone = false;
                  createQuiz();
                  startGame();
                  }
}
 
 
 
function stopBreak() {
 
                clearInterval(breakTimeID);
 
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
 
 
 
 
 
 
 
function createQuiz(){
  
 
               
 
              
                 $("#startGame").hide();
 
 
                 console.log("Current Question is" + triviaQ[currentQuestion].question);
        
 
                 $("#question").empty();
                 $("#question").append('<h2>' + triviaQ[currentQuestion].question + '</h2>');
   
 
                  $("#answers").empty();
                  console.log("Answers length for current question " + currentQuestion + " is " + triviaQ[currentQuestion].answers.length);
                  for (var i = 0; i < triviaQ[currentQuestion].answers.length; i++) {
 
                      var ans =$('<div id=answer'+currentQuestion+i+' name=answer'+ currentQuestion +'>' + triviaQ[currentQuestion].answers[i] +'</div>').addClass("answers col-md-offset-5 game").appendTo("#answers");
                     
                      console.log("Creating Quiz");
                      //console.log(ans);
 
                  }
          
 
 
                console.log("Total  Questions after create Quiz " +  totalQuestions);
                console.log("Current Question after create Quiz " +  currentQuestion);
 
 
 
}
 
 
 
function checkAnswer(){
 
 
console.log("IN CHECK ANSWER");
 
console.log("answerValue " + answerValue);
 
currAns = triviaQ[currentQuestion].answers[triviaQ[currentQuestion].correctAnswer];
 
console.log("currAns " + currAns);
 
 
if(answerValue === currAns){
        correctAnswers++; 
        console.log("That's Correct!");
        bool_correctAnswer = true;
 
}
 
else if(!answerValue){
          unanswered++;
          console.log("Nope You did not answer! Correct answer was " + currAns);
          bool_unanswered = true;
         }
else {
          incorrectAnswers++;
          console.log("Nope that is incorrect! Correct answer was " + currAns);
          bool_incorrectAnswer = true;
      }
 
}
 
function displayStats(){
 
            
 
            
 
 
              if(bool_correctAnswer){
               
                 $("#question").empty();
                 $("#answers").empty();
                 $("#results").empty();
                 $( "#results").append(
                "<div><h2>That was right!!</h2></div>",
                "<div><h2>You Answered " + answerValue + "</h2></div>",
                "<div><h2>Your answer matches the correct Answer " + currAns + "</h2></div>");
               }
 
              if(bool_unanswered){
 
                 $("#question").empty();
                 $("#answers").empty();
                 $("#results").empty();
                 $( "#results").append(
                "<div><h2>You did not Answer !!</h2></div>",
                "<div><h2>The correct Answer was " + currAns + "</h2></div>");
              }
 
              if(bool_incorrectAnswer){
 
                 $("#question").empty();
                 $("#answers").empty();
                 $("#results").empty();
                 $( "#results").append(
                "<div><h2>That was INCORRECT!!</h2></div>",
                "<div><h2>You Answered " + answerValue + "</h2></div>",
                "<div><h2>The correct Answer was " + currAns + "</h2></div>");
              }
 
 
 
 
 
 
}
 
 
 
 
 
 
 
 
 
$(document).ready(function(){
 
 
 
 
   $("#startGame").on("click", function(){
 
    //on page load click on start game to start the game time and create quiz for 1st question.
                   
 
                    startGame();
                    createQuiz();
                 
 
 
 
 
$("body").on("click", ".answers", function(){
 
 
console.log("I CLICKED an answer");
                if(totalQuestions!=0){
                  console.log("Stopping Game");
                  stopGame();
                  startBreak();
                
              
 
 
                answerValue = $(this).text();
                console.log("answerValue: " + answerValue);
                checkAnswer();
                displayStats();
 
              //   if(breakTime === 0){
              //        createQuiz();
              //        startGame();
              // }
 
 
                console.log("BreakTime is " + breakTime);
                console.log("startGame flag is " + questionDone);
                currentQuestion++;
                totalQuestions--;
              }
 
 
              else
              alert("GAME OVER!!");  
      });   
 
 
      });
 
});
 