Arrow.prototype.calcArrowHead = function() {
 
 if (this.firing) {
    var angle = Math.atan2(this.velX, this.velY);
  } else if (mousePos && this == currArrow) {
    var angle = Math.PI/2 - angleBetween(mousePos, shootingCirc);
  } else return;

  this.arrowTipCoords.x = this.x + 20 * Math.sin(angle);
  this.arrowTipCoords.y = this.y + 20 * Math.cos(angle);
  var arrowTip = {x:this.arrowTipCoords.x, y:this.arrowTipCoords.y}

  this.leftTipCoords.x = arrowTip.x - 3 * Math.sin(angle - Math.PI/4);
  this.leftTipCoords.y = arrowTip.y - 3 * Math.cos(angle - Math.PI/4);
  this.rightTipCoords.x = arrowTip.x - 3 * Math.sin(angle + Math.PI/4);
  this.rightTipCoords.y = arrowTip.y - 3 * Math.cos(angle + Math.PI/4);

  };

//The draw arrow function is what draws the projectiles on the screen 

Arrow.prototype.drawArrow = function() {
  
  this.calcTrajectory();
  this.calcArrowHead();
  var arrowTip = this.arrowTipCoords;
  var leftTip = this.leftTipCoords;
  var rightTip = this.rightTipCoords;

  ctx.beginPath();
  ctx.moveTo(this.x, this.y);
  ctx.lineTo(arrowTip.x, arrowTip.y);

  ctx.moveTo(arrowTip.x, arrowTip.y);
  ctx.lineTo(leftTip.x, leftTip.y);

  ctx.moveTo(arrowTip.x, arrowTip.y);
  ctx.lineTo(rightTip.x, rightTip.y);

  ctx.strokeStyle = "black";
  ctx.stroke();

  };
