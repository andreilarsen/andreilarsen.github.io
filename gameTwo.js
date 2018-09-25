window.addEventListener("load", whenPageIsLoaded, false);

function whenPageIsLoaded() {
  console.log("Successfully loaded page.");
  canvas2();
}

function canvas2() {
  var canvas = document.getElementById("canvas2");
  if(!canvas) return;
  var canvasWidth = canvas.width;
  var canvasHeight = canvas.height;
  var context = canvas.getContext("2d");
  console.log("The width is " + canvasWidth + " and the height is " + canvasHeight ".");
}
