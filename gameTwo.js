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
    this.draw = function() {
      if(this.x > canvas.width - this.radius) this.x = canvas.width - this.radius;
      if(this.x < this.radius) this.x = this.radius;
      if(this.y > canvas.height - this.radius) this.x = canvas.height - this.radius;
      if(this.y < this.radius) this.y = this.radius;
      context.fillStyle = this.color;
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
      context.stroke();
      context.fill();
    }
  }
  
  function Square(xPos, yPos, sideLength, c) {
    this.x = xPos;
    this.y = yPos;
    this.length = sideLength;
    this.color = c;
    this.draw = function() {
      context.fillStyle = c;
      context.fillRect(this.x, this.y, this.length, this.length);
    }
    this.relocate = function() {
      this.x = Math.floor(Math.random() * (canvas.width - this.length));
      this.y = Math.floor(Math.random() * (canvas.height - this.length));
    }
  }
  
  window.addEventListener("keydown", keyWasPressed, true);
  
  function keyWasPressed(e) {
    if(gameOver) {
      if(e.keyCode == 78) {
        points = 0;
        gameOver = false;
        player = new Player(75, 75, 25, "#ffff00");
        square = new Square(300, 300, 20, "#ff0000");
        drawBackground();
        player.draw();
        square.draw();
      }
      return;
    }
    switch(e.keyCode) {
      case 81:
        console.log("Looks like you decided to quit!");
        gameOver = true;
        break;
      case 82:
        console.log("Redrawing square.");
        square.relocate();
        break;
      case 83:
        console.log("Player: x=" + player.x + " y=" + player.y);
        console.log("Square: x=" + square.x + " y=" + square.y);
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
    if(square.x > player.x - player.radius && square.x < player.x + player.radius && square.y < player.y + player.radius && square.y > player.y - player.radius) {
      return true;
    }
    else return false;
  }
  
  function update() {
    if(gameOver) {
      context.fillStyle = "#0000ff";
      context.fillRect(0, 0, canvas.width, canvas.height);
      return;
    }
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
