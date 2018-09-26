window.addEventListener("load", whenPageLoads, false);

function whenPageLoads() {
  canvas2();
}

function canvas2() {
  var canvas = document.getElementById("canvas2");
  if(!canvas) return;
  var context = canvas.getContext("2d");
  var player = new Player(75, 75, 25, "#ffff00");
  var square = new Square(40, 40, 40, "#ff0000");
  var points = 0;
  var gameOver = false;
  
  function Player(x, y, r, c) {
    this.x = x;
    this.y = y;
    this.radius = r;
    this.color = "c";
    Player.prototype.draw = function() {
      context.fillStyle = this.color;
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
      context.stroke();
      context.fill();
    }
  }
  
  function Square(x, y, l, c) {
    this.x = x;
    this.y = y;
    this.length = l;
    this.color = c;
    Square.prototype.draw = function() {
      context.fillStyle = c;
      context.fillRect(x, y, x + l, y + l);
    }
    Square.prototype.relocate = function() {
      this.x = Math.floor(Math.random() * (canvas.width - this.length));
      this.y = Math.floor(Math.random() * (canvas.height - this.length));
    }
  }
  
  window.addEventListener("keydown", keyWasPressed, true);
  
  function keyWasPressed(e) {
    switch(e.keyCode) {
      case 81:
        console.log("Looks like you decided to quit!");
        gameOver = true;
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
  }
  
  function drawBackground() {
    context.fillStyle = "#00ff00";
    context.fillRect(0, 0, canvas.width, canvas.height);
  }
  
  function overlapExists() {
    if(firstQuadrant(player.x, player.y, square.x, square.y + square.length) ||
       secondQuadrant(player.x, player.y, square.x + square.length, square.y + square.length) ||
       thirdQuadrant(player.x, player.y, square.x + square.length, square.y) ||
       fourthQuadrant(player.x, player.y, square.x, square.y) || flatOverlap()) {
      
    }
    function firstQuadrant(x1, y1, x2, y2) {
      if(x2 > x1 && y2 <= y1) {
        if(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)) < player.radius) return true;
      }
      return false;
    }
    function secondQuadrant(x1, y1, x2, y2) {
      if(x1 >= x2 && y2 < y1) {
        if(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)) < player.radius) return true;
      }
      return false;
    }
    function thirdQuadrant(x1, y1, x2, y2) {
      if(x1 > x2 && y1 <= y2) {
        if(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)) < player.radius) return true;
      }
      return false;
    }
    function fourthQuadrant(x1, y1, x2, y2) {
      if(x1 <= x2 && y1 < y2) {
        if(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)) < player.radius) return true;
      }
      return false;
    }
    function flatOverlap() {
      return false;
    }
  }
  
  while(!gameOver) {
    drawBackground();
    player.draw();
    square.draw();
    if(overlapExists()) {
      points ++;
      console.log("You just scored! Your score is " + points);
      square.relocate();
    }
  }
}
