// Start Variables
let quiz = document.querySelector(".container");
let questions = document.querySelector("#questions");
let answers = document.querySelector("#answers")
let startBtn = document.querySelector("#startBtn");
let ans1Btn = document.querySelector(".buttona");
let ans2Btn = document.querySelector(".buttonb");
let ans3Btn = document.querySelector(".buttonc");
let ans4Btn = document.querySelector(".buttond");

// Score Variables
let playerScore = 0;
let finalScore = 0;
let highScore = 0;
let playerInitial;

// Timer Variables
let time = document.querySelector("#displayTime");
let secondsLeft = 60;
var timeleft = 60;
var timer 

// Question and answer variables
 var myQuestions = [
	{
		question: "How do you link a stylesheet?",
		answers: {
			a: 'the <nav> tag ',
			b: 'the <add> tag',
			c: '1the <href> tag',
            d: 'the <link> tag'   
		},
		correctAnswer: 'c'
	},
	{
		question: "If you wanted to make a webpage dynamic which language are you most likely to use?",
		answers: {
			a: 'HTML',
			b: 'CSS',
			c: 'Javascript',
            d: 'Java'
		},
		correctAnswer: 'c'
	},
    {
		question: "What is the difference in HTML between a class element and an ID element?",
		answers: {
			a: 'The class element can be used for multiple elements, while the ID element can only be used once',
			b: 'The class element is used in HTML, while the ID element is used in CSS',
			c: 'The class element are reserved words, while the ID element is created ',
            d: 'The class element can be used in Javascript, while the ID element cannot be used in Javascript'
		},
		correctAnswer: 'a'
	},
    {
		question: "Which of the following is not a semantic element?",
		answers: {
			a: '<header> ',
			b: '<div>',
			c: 'J<article>',
            d: '<section>'
		},
		correctAnswer: 'b'
	}
];

// Makes start button disappear and display quiz
startBtn.addEventListener('click', startQuiz)

document.addEventListener("click", function(){
    document.querySelector(".container").style.display = "block";
  });

//click the start button to log that game has began
function startQuiz(){
    console.log('Game has begun!');
}
   
// TO-DO MAKE QUESTIONS DISPLAY
// Print questions on console log
console.log(JSON.stringify(myQuestions));
var random1 = Math.floor(Math.random() * myQuestions.length) ;
var choice1 = myQuestions[random1];
document.querySelector('#questions').innerHTML= choice1;

// TO-DO WHEN I answer a question THEN I am presented with another question
function nextQuestion(){}

function answerChoice(){}

// WHEN I answer a question incorrectly 
// THEN time is subtracted from the clock

function correctAnswer(){}

function incorrectAnswer(){}

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

function gameOver(){}


// WHEN the game is over
// THEN I can save my initials and my score

function saveScore(){}
