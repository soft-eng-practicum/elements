// This is where all the bullets go 


var arrows = [];


var speedMod = 4;

var addArrow = function() {
  arrows.unshift(new Arrow()); 
  currArrow = arrows[0];
}


function Arrow() {
  this.x = shootingCirc.x;
  this.y = shootingCirc.y;
  this.arrowTipCoords = {
    x: this.x + 20,
    y: this.y
  };
  
  
  
  this.leftTipCoords = {
    x: this.x + 17,
    y: this.y - 3
  }
  
  
  this.rightTipCoords = {
    x: this.x + 17,
    y: this.y + 3
  }
  this.velX = 0;
  this.velY = 0;
  this.speed = 0;
  this.firing = false;
}


Arrow.prototype.fireArrow = function() {
  
  if (mousePos && !this.firing) {
    this.speed = Math.min(shootingCirc.r,
                 distBetween(shootingCirc, mousePos)) / speedMod;
    this.velX = Math.cos(angleBetween(mousePos, shootingCirc))* this.speed;
    this.velY = Math.sin(angleBetween(mousePos, shootingCirc))* this.speed;
    this.firing = true;
    addArrow();
  }
}


Arrow.prototype.calcTrajectory = function() {
  
  if (this.y <= groundPoint && this.firing) {
    this.velY += gravity;
    this.x += this.velX;
    this.y += this.velY;
  } else {
    this.velX = 0;
    this.velY = 0;
    this.firing = false;
  }

  };
  
  
