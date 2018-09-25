window.addEventListener("load", whenPageIsLoaded, false);

function whenPageIsLoaded() {
  console.log("Successfully loaded The page.");
  canvas2();
}

function canvas2() {
  var canvas = document.getElementById("canvas2");
  if(!canvas) return;
  var context = canvas.getContext("2d");
  console.log("The width is " + canvas.width + " and the height is " + canvas.height + ".");
  var gameOver = false;
  var playerX = 50;
  var playerY = 50;
  var deltaX = 0;
  var deltaY = 0;
  
  function initGame() {
    gameOver = false;
    window.addEventListener("keydown", keyWasPressed, true);
    drawCanvas();
  }
  
  function keyWasPressed(e) {
    switch(e.keyCode) {
      case 81:
        console.log("Looks like you decided to quit!");
        gameOver = true;
        break;
      case 38:
        console.log("Up pressed");
        deltaY = -1;
        deltaX = 0;
        break;
      case 40:
        console.log("Down pressed");
        deltaY = 1;
        deltaX = 0;
        break;
      case 37:
        console.log("Left pressed");
        deltaY = 0;
        deltaX = -1;
        break;
      case 39:
        console.log("Right pressed");
        deltaY = 0;
        deltaX = 1;
        break;
      default:
        console.log("Unknown key pressed. keyCode=" + e.keyCode);
        deltaY = 0;
        deltaX = 0;
    }
    drawCanvas();
  }
  
  function drawBackground() {
    context.fillStyle = "#00ff00";
    context.fillRect(0, 0, canvas.width, canvas.height);
  }
  
  function drawPlayer(x, y) {
    context.fillStyle = "#ffff00";
    context.beginPath();
    context.arc(x, y, 25, 0, 2*Math.PI, false);
    context.stroke();
    context.fill();
  }
  
  function drawCanvas() {
    drawBackground();
    if(gameOver) {
      context.fillStyle = "#0000ff";
      fillRect(0, 0, canvas.width, canvas.height);
      return;
    }
    while(!gameOver) {
      drawPlayer(playerX + deltaX, playerY + deltaY);
    }
  }
  
  initGame();
}
