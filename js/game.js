//November 26, 2016
//Software Development 2 GGC
//Chemistry Game
//The code to create the canvas is written below


//Here we have some variables used in the game to draw objects and select images;
var canvas = document.createElement("canvas");
canvas.id = 'canvas';
var ctx = canvas.getContext("2d");

//This variable isHit will tell us if the arrow hit the question or not
var isHit = false;

//declared and initialized a count variable for timer
//count starts a 60 seconds and counts down

var count = 60, timer = setInterval(function() {
    $("#counter").html(count--);
    if(count == 0) clearInterval(timer);
}, 1000);

//Setting arrow coordinates for X and Y
var currentArrowCoorX = 0;
var currentArrowCoorY = 0;

//declaring and initializing coordinate for bubbles
var bubblex = 200;
var bubble2x = 250;
var bubble3x = 300;
var bubble4x = 350;

//declaring and initializing direction
var direction = 1;
var direction2 = 1;
var direction3 = 1;
var direction4 = 1;

//declared and intialized player score to hold an int
//player score starts at 0
var playerScore = 0;
//declared and initialized player choice as a String
var playerChoice = "";

//Declared choice variables
var choiceA;
var choiceB;
var choiceC;
var choiceD;

//declared score and initialized to 0
var score = 0;

//Declared and intialized an array of questions
var questions = new Array();
questions[0] = 'What is the correct balanced formula for Potassium Chloride?' ;
questions[1] = 'What is the correct balanced formula for Sodium Bromide?';
questions[2] = 'What is the correct balanced formula for Sodium Iodide?';
questions[3] = 'What is the correct balanced formula for Sodium Oxide?';
questions[4] = 'What is the correct balanced formula for Potassium Oxide?';
questions[5] = 'What is the correct balanced formula for Magnesium Oxide?';
questions[6] = 'What is the correct balanced formula for Copper (I) chloride?';
questions[7] = 'What is the correct balanced formula for Copper (II) chloride?';
questions[8] = 'What is the correct balanced formula for Maganese (V) bromide?';
questions[9] = 'What is the correct balanced formula for Ammonium Nitrate?';

//Really hard problems
questions[10] = 'What is the correct balanced formula for Sodium Peroxide?' ;
questions[11] = 'What is the correct balanced formula for Potassium perchlorate?';
questions[12] = 'What is the correct balanced formula for Sodium Hydrogen Phosphate';
questions[13] = 'What is the correct balanced formula for Potassium hydrogen sulfite';

//Covalent bond questions
questions[14] = 'What is the correct balanced formula for Carbon monoxide?';
questions[15] = 'What is the correct balanced formula for Nitrogen Dioxide?';
questions[16] = 'What is the correct balanced formula for Sulfur Trioxide?';
questions[17] = 'What is the correct balanced formula for Phosphorus Pentachloride?';
questions[18] = 'What is the correct balanced formula for Dinitrogen Tetraoxide?';


//declared variables for questions and set default values
var currQuestion = 0;
var currAnswer = 0;
var currQa = 0;

//Declared variable for total amount of questions and set default values
var totalQuestions = 20;
var totalAnswers = 80;
var totalQa = 20;
var previousArrow;

//Declared and intialized an answers array to hold correct answer choices
var answers = new Array();
answers[0] = "D" ;
answers[1] = "C";
answers[2] = "B";
answers[3] = "A";
answers[4] = "D";
answers[5] = "C";
answers[6] = "A";
answers[7] = "D";
answers[8] = "C";
answers[9] = "B";

//Answers for really hard questions
answers[10] = "A" ;
answers[11] = "B";
answers[12] = "C";
answers[13] = "B";

//Answers for covalent molecule questions
answers[14] = "D";
answers[15] = "C";
answers[16] = "A";
answers[17] = "D";
answers[18] = "C";

//Declared and intialized an array to display answer choices to the user
var qa = new Array();
qa[0] = "a= PCl b= K2Cl2 c= K2Cl d= KCl" ;
qa[1] = "a= NBr3 b= NBr c= NaBr d= NBr2";
qa[2] = "a= SI b= NaI c= IS d= NaIO3";
qa[3] = "a= Na2O b= NaO c= SO2 d= SO";
qa[4] = "a= Ka2O b= P2O c= KaO d= K2O";
qa[5] = "a= MnO b= MO2 c= MgO d= MgO2";
qa[6] = "a= CuCl b= ClCu c= CoCl d= CoCl2";
qa[7] = "a= CuCl2 b= ClCu c= CrCl2 d= KuCl";
qa[8] = "a= MgI5 b= MnI5 c= MI5 d= MnBr";
qa[9] = "a= NH4NO2 b= NH4NO3 c= NO3NH4 d= NH4NO";

//Choices for really hard questions
qa[10] = "a= Na2O2 b= NaO c= NaO2 d= NO2," ;
qa[11] = "a= KClO3 b= KClO4 c= KClO2 d= KClO";
qa[12] = "a= SI b= NaI c= NaHPO4 d= NaIO3";
qa[13] = "a= Na2O b= KHSO3 c= SO2 d= SO";

//Choices for covalent molecule questions
qa[14] = "a= NO b= N2O4 c= NO2 d= NO3";
qa[15] = "a= MnO b= MO2 c= MgO d= MgO2";
qa[16] = "a= SO3 b= SO2 c= S2O3 d= S2O2";
qa[17] = "a= P5Cl5 b= P2Cl3 c= PBr5 d= PCl5";
qa[18] = "a= NO4 b= N4O2 c= N2O4 d= Ni2O4";

//Declared and initialized sample questions
var question1 = "Do you like Chemistry?";
var question2 = "Are you having Fun?";
var question3 = "Did you have a great weekend?";

//Declared variable to hold music
var music;

//Declared and initiliazed sample answers for sample questions
var answerA = "";
var answerB = "";
var answerC = "";
var answerD = ""

//The variables canvas width and height can be used to always keep track of our drawing area
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.body.appendChild(canvas);

cWidth = canvas.width;
cHeight = canvas.height;

//Declared and initiliazed gravity
//The gravity is what pulls the bullets down to the ground
var gravity = 0.4;
var groundPoint = cHeight - (cHeight/4);

// These two variables here tells you if the bullet on the dial is getting ready
//to be released
var drawnBack = false;
var firedArrow = false;

//This function calculates the distance between two points
var distBetween = function(p1, p2) {
  return Math.sqrt( Math.pow((p2.x-p1.x), 2)
                  + Math.pow((p2.y-p1.y), 2) );
}

//This function is to be used with the event handlers to shoot bullets
var isInCircle = function(mousePos) {
  var distFromCenter = distBetween(drawBackCirc, mousePos);
  if (distFromCenter < drawBackCirc.r) return true;
  else return false;
}

//This function returns the current mouse position
function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

//The event listeners are listed below to show what the user is doing
var mousePos;
var mouseDown = false;
var mouseUp = false;


addEventListener("mousemove", function(evt) {
  mousePos = getMousePos(canvas, evt);
}, false);



addEventListener("mousedown", function(evt) {
  mousePos = getMousePos(canvas, evt);
  mouseDown = true;
  mouseUp = false;
}, false);

//We re using this functions to populate an array with questions
//function fillQuestions(){

  //  for(var i = 0; i < totalQuestions; i++){
//       addQuestion;
  //  }
//}


addEventListener("mouseup", function(evt) {
  mousePos = getMousePos(canvas, evt);
  mouseUp = true;
  mouseDown = false;
  rotatedCoordinates = Math.PI/2 - angleBetween(mousePos, shootingCirc);
}, false);

//function drawRotatedImage(image, x, y, angle)
function drawRotatedImage(image, x, y, angle)
{
    // save the current co-ordinate system
    // before we screw with it
  //  var angle = Math.PI/2 - angleBetween(mousePos, shootingCirc);
    ctx.save();

    // move to the middle of where we want to draw our image
    ctx.translate(x, y);

    // rotate around that point, converting our
    // angle from degrees to radians
    ctx.rotate(angle * TO_RADIANS);

    // draw it up and to the left by half the width
    // and height of the image
  ctx.drawImage(image, -(image.width/2), -(image.height/2));
// ctx.drawImage(image, 150, 150, 80, 80);
    // and restore the co-ords to how they were when we began
    ctx.restore();
}

function collisionCheck() {

//var theImage = ctx.getImageData(x, y, 25, 25);
//var pixel = theImage.data;
//for (var i = 0; n = pixel.length, i < n; i += 1) {
//if (pixel[i] == 0) {
//collision = 1;

      //     }

//      bubblex;
//      bubble2x;
//      bubble3x;
//      bubble4x;

       if(currentArrowCoorX >= bubble4x && currentArrowCoorX <= bubble4x + 80){
           if(currentArrowCoorY >= 400 && currentArrowCoorY <= 480){
              if(!isHit)
              {
                  playerChoice = "D";
              }

           }

       }

       if(currentArrowCoorX >= bubblex && currentArrowCoorX <= bubblex + 80){
        if(currentArrowCoorY >= 200 && currentArrowCoorY <= 280){
            if(!isHit)
              {
                  playerChoice = "B";
              }
         }

      //   playerScore++;
       }

       if(currentArrowCoorX >= bubble2x && currentArrowCoorX <= bubble2x + 80){
         if(currentArrowCoorY >= 100 && currentArrowCoorY <= 180){
             if(!isHit)
              {
                  playerChoice = "A";
              }
         }

    //     playerScore++;
       }

       if(currentArrowCoorX >= bubble3x && currentArrowCoorX <= bubble3x + 80){

         if(currentArrowCoorY >= 300 && currentArrowCoorY <= 380){
             if(!isHit)
              {
                  playerChoice = "C";
              }
        }

    //     playerScore++;
       }


       }

//Functions check to see the timer has hit 0 and notifies the user
function checkCount()
{
    if(count <= 0)
        {
            playerChoice = "Time's up!"
        }
}

//Function to check the user's answer and changes to next question if the answer is correct
function checkAnswer(){

  switch (playerChoice) {
  case "A":
      //  timer++;
      if(count > 0){
            //timer = 0;
            playerChoice = "A";

            if(answers[currAnswer] === "A"){
              playerScore += 1;
              currQuestion += 1;
              currAnswer += 1;

            }
          else
              {
                  playerChoice = "Fail!"
              }


       }

      break;
  case "B":
       // timer++;
        if(count > 0){
            playerChoice = "B";
            if(answers[currAnswer] === "B"){
              playerScore += 1;
              currQuestion += 1;
              currAnswer += 1;

            }
           else
              {
                  playerChoice = "Fail!"
              }

        }

      break;
  case "C":
    //    timer++;
    if(count > 0){
             //timer = 0;
             playerChoice = "C";
             if(answers[currAnswer] === "C"){
               playerScore += 1;
               currQuestion += 1;
               currAnswer += 1;

             }
           else
              {
                  playerChoice = "Fail!"
              }

      }

      break;
  case "D":
        //timer++;
    if(count > 0){
          //  timer = 0;
            playerChoice= "0";

            if(answers[currAnswer] === "D"){
              playerScore += 1;
              currQuestion += 1;
              currAnswer += 1;
            }
           else
              {
                  playerChoice = "Fail!"
              }

       }

      break;
  default:
      //   playerScore = 0;
}

}

function grade(){

    i

}



var drawScene = function() {
  //Increased groundPoint so arrows stick where they should in the ground
  //var ground = groundPoint + 15;
  //Background Image

  var background = new Image();
  background.src = "Images/game bg.jpg";
  var bubble1 = new Image();
  bubble1.src = "Images/new bubble.png";
  var bubble2 = new Image();
  bubble2.src = "Images/new bubble.png";
  var bubble3 = new Image();
  bubble3.src = "Images/new bubble.png";
  var bubble4 = new Image();
  bubble4.src = "Images/new bubble.png";
  var character = new Image();
  character.src = "Images/gunesdvedf.png";

 ctx.drawImage(background,0,0,1280,600);
 ctx.drawImage(bubble1, bubblex,200,80,80);
 ctx.drawImage(bubble2, bubble2x,100,80,80);
 ctx.drawImage(bubble3, bubble3x,300,80,80);
 ctx.drawImage(bubble4, bubble4x,400,80,80);
 //ctx.rotate(180);
 ctx.drawImage(character, 550, groundPoint - 80, 80, 80);
// drawRotatedImage(character, 550, groundPoint - 80, angle);
//drawRotatedImage(character2, 150, 150, theAngle);


}


var angleBetween = function(p1, p2) {
  return Math.atan2(p2.y-p1.y, p2.x-p1.x);
}

//We are using aiming coordinates and dials to indicate trajectory

var getAimCoords = function(mousePos) {

  var angle = Math.PI/2 - angleBetween(mousePos, shootingCirc);
  var distance = Math.min(distBetween(shootingCirc, mousePos), shootingCirc.r);
  var x = shootingCirc.x + distance * Math.sin(angle);
  var y = shootingCirc.y + distance * Math.cos(angle);
  return {x:x, y:y};

  }


  var drawAimer = function() {
  if (drawnBack) {
    aimCoords = getAimCoords(mousePos);
    ctx.beginPath();
    ctx.moveTo(aimCoords.x, aimCoords.y);
    ctx.lineTo(shootingCirc.x, shootingCirc.y);
    ctx.strokeStyle= "rgba(0,0,0,0.2)";
    ctx.stroke();
  }
}

//The shooting circle is what shows the user where the arrow is going

var shootingCirc = {
 x: 600,
  y: groundPoint-30,
  r: 75
}


var drawBackCirc = {
  x: shootingCirc.x,
  y: shootingCirc.y,
  r: 10
}

//The draw circles is where the actual object gets drawn into the screen

var drawCircles = function() {
  ctx.beginPath();
//  ctx.arc(shootingCirc.x, shootingCirc.y, shootingCirc.r, 0, 2*Math.PI);
  ctx.strokeStyle = "rgba(0,0,0,0.5)";
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(drawBackCirc.x, drawBackCirc.y, drawBackCirc.r, 0, 2 * Math.PI);
  ctx.stroke();
  drawAimer();
}

var isFiredArrow = function() {
  if (mousePos && drawnBack && mouseUp) {
    drawnBack = false;
    firedArrow = true;
  }
}

var isDrawnBack = function() {
  if (mousePos && isInCircle(mousePos)) {
    if (mouseDown) drawnBack = true;
    else if (mouseUp) drawnBack = false;
  }
}

//Information written to the client is handled by this function

var writeInfo = function(mousePos) {
  ctx.font = "13px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  if(isInCircle(mousePos) && mouseDown) {
    ctx.fillStyle = "blue";
  } else {
    ctx.fillStyle = "black";
  }

/*
  ctx.fillText("Mouse Position: " + mousePos.x + ", " + mousePos.y, 20, 20);
  ctx.fillText("Circle Position: " + shootingCirc.x + ", " + shootingCirc.y, 20, 40);
  ctx.fillText("Angle: " + angleBetween(mousePos, shootingCirc), 20, 60);
  ctx.fillText("CoordX: " + currentArrowCoorX, 20, 80);
  ctx.fillText("CoordY: " + currentArrowCoorY, 20, 100);
*/


    ctx.font = "25px Helvetica";
    ctx.textAlign = "right";
    ctx.textBaseline = "top";
    //ctx.fillText("Choice: " + playerChoice, cWidth - 100, 20);

    ctx.font = "25px Helvetica";
    ctx.textAlign = "right";
    ctx.textBaseline = "top";
    ctx.fillText("A", bubble2x + 50, 120);

    ctx.font = "25px Helvetica";
    ctx.textAlign = "right";
    ctx.textBaseline = "top";
    ctx.fillText("B", bubblex + 50, 220);

    ctx.font = "25px Helvetica";
    ctx.textAlign = "right";
    ctx.textBaseline = "top";
    ctx.fillText("C", bubble3x + 50, 320);

    ctx.font = "25px Helvetica";
    ctx.textAlign = "right";
    ctx.textBaseline = "top";
    ctx.fillText("D", bubble4x + 50, 420);

    ctx.font = "25px Helvetica";
    ctx.textAlign = "right";
    ctx.textBaseline = "top";
    ctx.fillText("Score: " + playerScore, cWidth - 100, 60);

    ctx.font = "15px Helvetica";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText(qa[currQuestion], cWidth/2, 40);

    ctx.font = "25px Helvetica";
    ctx.textAlign = "right";
    ctx.textBaseline = "top";
    //ctx.fillText("Current Answer: " + answers[currAnswer], cWidth - 100, 100);


    ctx.font = "25px Helvetica";
    ctx.textAlign = "right";
    ctx.textBaseline = "top";
    ctx.fillText("Timer: " + count, cWidth - 100, 100);


    ctx.font = "18px Helvetica";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText(questions[currQuestion], cWidth/2, 20);




    ctx.font = "12px Helvetica";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText(answerA + " " + answerB + " " + answerC + " " + answerD, cWidth/2, 60);



}

//Every game engine needs an update function to display to the user the coordinates

var update = function() {
  isDrawnBack();
  isFiredArrow();
  if (firedArrow) {
    currArrow.fireArrow();
//    currentArrowCoor = currArrow.x;
    firedArrow = false;
  }

  //The drawing area needs to be updated

  ctx.clearRect(0,0,cWidth,cHeight);

    //this is the code for the first bubble
    bubblex += direction;
    if (bubblex > 580){
      direction = -1;
    }

    if (bubblex < 180){
      direction = 1;
    }
    //this is the code for the second bubble
    bubble2x += direction2;
    if (bubble2x > 780){
      direction2 = -1;
    }

    if (bubble2x < 180){
      direction2 = 1;
    }

    //this is the code for the third bubble

    bubble3x += direction3;
    if (bubble3x > 980){
      direction3 = -1;
    }

    if (bubble3x < 180){
      direction3 = 1;
    }

    //this is the code for the fourth bubble

    bubble4x += direction4;
    if (bubble4x > 780){
      direction4 = -1;
    }

    if (bubble4x < 180){
      direction4 = 1;
    }

 //theAngle += rotatedCoordinates;

if(arrows.length > 1){
  currentArrowCoorX = arrows[1].rightTipCoords.x;
  currentArrowCoorY = arrows[1].rightTipCoords.y;
}

checkCount();
collisionCheck();
checkAnswer();



//  music = new sound("g.mp3");
//  music.play();

}

//The rendering method draws the entire game

var render = function() {
  // if(mousePos) writeInfo(mousePos);
  drawScene();
  drawCircles();
  for(i=0; i<arrows.length; i++) {
    arrows[i].drawArrow();
//    currentArrowCoor = arrows[i].arrowTipCoords.x;
  }
if(mousePos) writeInfo(mousePos);
//currentArrowCoor = 0;
drawCircles();
//drawRotatedImage(character2, 150, 150, 30);

}

//Here is the main function that covers all the other important functions

var main = function() {
  update();
  render();

  requestAnimationFrame(main);
}



var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

addArrow();
var currArrow = arrows[0];
main();
