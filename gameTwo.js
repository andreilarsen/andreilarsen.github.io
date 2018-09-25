window.addEventListener("load", whenPageIsLoaded, false);

function whenPageIsLoaded() {
  console.log("Successfully loaded THE page.");
  canvas2();
}

function canvas2() {
  var canvas = document.getElementById("canvas2");
  if(!canvas) return;
  var context = canvas.getContext("2d");
  console.log("The width is " + canvas.width + " and the height is " + canvas.height + ".");
  var gameOver = false;
  
  function initGame() {
    gameOver = false;
    context.fillStyle("#ff0000");
    context.fillRect(0, 0, canvas.width, canvas.height);
    drawCanvas();
  }
  
  function drawCanvas() {
    console.log("Drawing canvas...");
  }
  
}
