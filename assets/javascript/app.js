$(document).ready(function() {
// Create a function that creates the start button and initial screen

function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".mainArea").html(startScreen);
}

initialScreen();

//Create a function, generateHTML(), that is triggered by the start button, and generates the HTML seen on the project video...

$("body").on("click", ".start-button", function(event){
	event.preventDefault();  // added line to test issue on GitHub Viewer
	generateHTML();

}); // Closes start-button click

$("body").on("click", ".answer", function(event){
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
		generateWin();
	}
	else {
		generateLoss();
	}
}); // Close .answer click

$("body").on("click", ".reset-button", function(event){
	resetGame();
}); // Closes reset-button click

});  //  Closes jQuery wrapper


function generateWin() {
	correctTally++;
	gameHTML =  "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);  //  change to 4000 or other amount
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000); //  change to 4000 or other amount
}

function generateHTML() {
	gameHTML = "<p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

function wait() {
	if (questionCounter < 7) {
	questionCounter++;
	generateHTML();
	counter = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	generateHTML();
	timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["Who won 2016 SuperBall?", "Who won 2016 World series baseball", "Who won 2017 NBA finals?", "What is the national sport of England", "What is the national sport of India", "Which country hosted most number of winter olympics"];
var answerArray = [["New England Patriots", "Green Bay Packers", "Denver Broncos", "Baltimore Ravens"], ["Detroit Tigers","Chicago Cubs","LA Dodgers","Cleveland Indians"], ["Cleveland Cavaliers","Chicago Bulls","LA Lackers","Golden State Warriors"], ["Chess", "Bingo", "Cricket", "Soccer"], ["Chess","Cricket","Field Hockey","Kabbadi"], ["Canada", "Switzerland", "France", "United States"]];
var imageArray = ["<img class='center-block img-right' src='assets/images/Denver.jpg'>", "<img class='center-block img-right' src='assets/images/Chicago.png'>", "<img class='center-block img-right' src='assets/images/GSW.png'>", "<img class='center-block img-right' src='assets/images/Cricket.png'>", "<img class='center-block img-right' src='assets/images/India.png'>","<img class='center-block img-right' src='assets/images/x.png'>"];
var correctAnswers = ["C. Denver Broncos", "B. Chicago Cubs", "D. Golden State Warriors", "C. Cricket", "C. Field Hockey", "D. United States"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
