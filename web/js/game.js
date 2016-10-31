//October 10, 2016
//Software Development 2 GGC
//Chemistry Game
//The code to create the canvas is written below


var canvas = document.createElement("canvas");
canvas.id = 'canvas';
var ctx = canvas.getContext("2d");


var character2 = new Image();
character2.src = "Images/gun.png";

var rotatedCoordinates = 0;

var bubblex = 200;
var bubble2x = 250;
var bubble3x = 300;
var bubble4x = 350;

var direction = 1;
var direction2 = 1;
var direction3 = 1;
var direction4 = 1;
var TO_RADIANS = Math.PI/180;
var theAngle = 0;

var playerScore = 0;
//var totalQuestions = 20;
var questions = JSON.parse(load("questions.js"));
//var totalAnswers = 80;

//var answers = [];

//var question1 = "Do you like Chemistry?";

var music;

//canvas.width=window.innerWidth - 15;
//canvas.height=window.innerHeight - 15;

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

document.body.appendChild(canvas);

cWidth = canvas.width;
cHeight = canvas.height;





// The gravity is what pulls the bullets down to the ground

var gravity = 0.4;
var groundPoint = cHeight - (cHeight/4);

// drawnBack and firedArrow booleans to assert state of currArrow
var drawnBack = false;
var firedArrow = false;


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
function fillQuestions{

    for(var i = 0; i < totalQuestions; i++){
//       addQuestion;
    }
}




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

var theImage = ctx.getImageData(x, y, 25, 25);
var pixel = theImage.data;
for (var i = 0; n = pixel.length, i < n; i += 1) {
if (pixel[i] == 0) {
collision = 1;

            }
        }
}

var drawScene = function() {
  // increased groundPoint so arrows stick where they should in the ground
//  var ground = groundPoint + 15;
  // background Image

  var background = new Image();
  background.src = "Images/background2.jpg";
  var bubble1 = new Image();
  bubble1.src = "Images/bubble.png";
  var bubble2 = new Image();
  bubble2.src = "Images/bubble.png";
  var bubble3 = new Image();
  bubble3.src = "Images/bubble.png";
  var bubble4 = new Image();
  bubble4.src = "Images/bubble.png";
  var character = new Image();
  character.src = "Images/gun.png";

 ctx.drawImage(background,0,0,1280,600);
 ctx.drawImage(bubble1, bubblex,200,80,80);
 ctx.drawImage(bubble2, bubble2x,100,80,80);
 ctx.drawImage(bubble3, bubble3x,300,80,80);
 ctx.drawImage(bubble4, bubble4x,400,80,80);
 //ctx.rotate(180);
 ctx.drawImage(character, 550, groundPoint - 80, 80, 80);
// drawRotatedImage(character, 550, groundPoint - 80, angle);
drawRotatedImage(character2, 150, 150, theAngle);


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
  ctx.fillText("Mouse Position: " + mousePos.x + ", " + mousePos.y, 20, 20);
  ctx.fillText("Circle Position: " + shootingCirc.x + ", " + shootingCirc.y, 20, 40);
  ctx.fillText("Angle: " + angleBetween(mousePos, shootingCirc), 20, 60);
//  ctx.fillText("Angle 2:" + angleBetween(mousePos, shootingCirc), 20, 80);

  ctx.font = "25px Helvetica";
  ctx.textAlign = "right";
  ctx.textBaseline = "top";
  ctx.fillText("Score: " + playerScore, cWidth - 100, 20);

  ctx.font = "18px Helvetica";
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillText(question1, cWidth/2, 20);

}

//Every game engine needs an update function to display to the user the coordinates

var update = function() {
  isDrawnBack();
  isFiredArrow();
  if (firedArrow) {
    currArrow.fireArrow();
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

 theAngle += rotatedCoordinates;

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
  }
if(mousePos) writeInfo(mousePos);
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
