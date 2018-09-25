window.addEventListener("load", whenPageIsLoaded, false);

function whenPageIsLoaded() {
  console.log("Successfully loaded the page.");
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
    if(e.keyCode == 81) gameOver = true;
  }
  
  function drawBackground() {
    context.fillStyle = "#00ff00";
    context.fillRect(0, 0, canvas.width, canvas.height);
  }
  
  //function drawPlayer(x, y) {
  //  context.fillStyle = "#ffff00";
  //  context.arc(x, y, 75, 0, 2*Math.PI, false);
  //}
  
  function drawCanvas() {
    drawBackground();
    //while(!gameOver) {
  //    drawPlayer(50, 50);
    //}
  }
  
  initGame();
}
