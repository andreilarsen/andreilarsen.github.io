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
  var up = 0;
  var down = 0;
  var left = 0;
  var right = 0;
  
  function initGame() {
    gameOver = false;
    window.addEventListener("keydown", keyWasPressed, true);
    drawCanvas();
  }
  
  function keyWasPressed(e) {
    console.log("Key was pressed");
    switch(e.keyCode) {
      case 81:
        console.log("Looks like you decided to quit!");
        gameOver = true;
        break;
      case 38:
        console.log("Up pressed");
        up = -1;
        down = 0;
        left = 0;
        right = 0;
        break;
      case 40:
        console.log("Down pressed");
        up = 0;
        down = 1;
        left = 0;
        right = 0;
        break;
      case 37:
        console.log("Left pressed");
        up = 0;
        down = 0;
        left = -1;
        right = 0;
        break;
      case 39:
        console.log("Right pressed");
        up = 0;
        down = 0;
        left = 0;
        right = 1;
        break;
      default:
        console.log("Unknown key pressed. keyCode=" + e.keyCode);
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
    drawPlayer(75 + 75*i, 75 + 75*j);
    
  }
  
  initGame();
}
