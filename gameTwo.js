window.addEventListener("load", whenPageLoads, false);

function whenPageLoads() {
  canvas2();
}

function canvas2() {
  var canvas = document.getElementById("canvas2");
  if(!canvas) return;
  var context = canvas.getContext("2d");
  var player = new Player(75, 75, 25, "#ffff00");
  var square = new Square(300, 300, 20, "#ff0000");
  var points = 0;
  var gameOver = false;
  
  function Player(xPos, yPos, r, c) {
    this.x = xPos;
    this.y = yPos;
    this.radius = r;
    this.color = c;
    //var _this = this;
    Player.prototype.draw = function() {
      if(x > canvas.width - radius) x = canvas.width - radius;
      if(x < radius) x = radius;
      if(y > canvas.height - radius) x = canvas.height - radius;
      if(y < radius) y = radius;
      context.fillStyle = color;
      context.beginPath();
      context.arc(x, y, radius, 0, 2*Math.PI, false);
      context.stroke();
      context.fill();
    }
  }
  
  function Square(xPos, yPos, sideLength, c) {
    this.x = xPos;
    this.y = yPos;
    this.length = sideLength;
    this.color = c;
    var _this = this;
    Square.prototype.draw = function() {
      context.fillStyle = c;
      context.fillRect(_this.x, _this.y, _this.length, _this.length);
    }
    Square.prototype.relocate = function() {
      _this.x = Math.floor(Math.random() * (canvas.width - _this.length));
      _this.y = Math.floor(Math.random() * (canvas.height - _this.length));
    }
  }
  
  window.addEventListener("keydown", keyWasPressed, true);
  
  function keyWasPressed(e) {
    switch(e.keyCode) {
      case 81:
        console.log("Looks like you decided to quit...");
        gameOver = true;
        break;
      case 82:
        console.log("Redrawing square...");
        square.relocate();
        break;
      case 38:
        console.log("Up pressed");
        player.y -= 5;
        break;
      case 40:
        console.log("Down pressed");
        player.y += 5;
        break;
      case 37:
        console.log("Left pressed");
        player.x -= 5;
        break;
      case 39:
        console.log("Right pressed");
        player.x += 5;
        break;
      default:
        console.log("Unknown key pressed. keyCode=" + e.keyCode);
    }
    update();
  }
  
  function drawBackground() {
    context.fillStyle = "#00ff00";
    context.fillRect(0, 0, canvas.width, canvas.height);
  }
  
  function overlapExists() {
    if(Math.sqrt(Math.pow(player.x - (square.x + square.l/2), 2) + Math.pow(player.y - (square.y + square.l/2), 2)) < player.radius) {
      return true;
    }
    else return false;
  }
  
  function update() {
    drawBackground();
    player.draw();
    square.draw();
    if(overlapExists()) {
      points ++;
      console.log("You just scored! Your score is " + points);
      square.relocate();
    }
  }
  
  drawBackground();
  player.draw();
  square.draw();
}
