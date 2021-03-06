window.addEventListener("load", whenPageIsLoaded, false);

function whenPageIsLoaded() {
	canvas1();
}

function canvas1() {
	var canvas = document.getElementById("canvas1");
	if(!canvas) return;
	var canvasWidth = document.getElementById("canvas1").width;
	var canvasHeight = document.getElementById("canvas1").height;
	var context = canvas.getContext("2d");
	var guesses = 0;
	var message = "Guess the number between 0 and 9 (inclusive).";
	var today = new Date();
	var number = Math.floor(Math.random() * 10);
	var numbersGuessed = [];
	var gameOver = false;
	console.log("size: " + numbersGuessed.length);
	
	function initGame() {
		numbersGuessed = [];
		number = Math.floor(Math.random() * 10);
		window.addEventListener("keydown", keyWasPressed, true);
		drawCanvas();
	}
	function keyWasPressed(e) {
		if(gameOver) {
			gameOver = false;
			guesses = 0;
			initGame();
		} else {
			if(getKey(e) >= 0 && getKey(e) < 10) {
				numbersGuessed.push(getKey(e));
				guesses++;
			}
			console.log(getKey(e));
			doTheMath();
			drawCanvas();
		}
	}
	function getKey(e) {
		switch(e.keyCode){
			case 48:
			case 96:
				return 0;
				break;
			case 49:
			case 97:
				return 1;
				break;
			case 50:
			case 98:
				return 2;
				break;
			case 51:
			case 99:
				return 3;
				break;
			case 52:
			case 100:
				return 4;
				break;
			case 53:
			case 101:
				return 5;
				break;
			case 54:
			case 102:
				return 6;
				break;
			case 55:
			case 103:
				return 7;
				break;
			case 56:
			case 104:
				return 8;
				break;
			case 57:
			case 105:
				return 9;
				break;
			default:
				return 10;
		}
	}
	function doTheMath() {
		if(numbersGuessed[numbersGuessed.length - 1] == number) {
			gameOver = true;
		}
	}
	function drawCanvas() {
		if(gameOver) {
			context.fillStyle = "#ff0000";
			context.fillRect(0, 0, canvasWidth, canvasHeight);
			context.textBaseline = "middle";
			context.textAlign = "center";
			context.fillStyle = "#ffff00";
			context.textSize = "40px";
			context.fillText("You Won!", canvasWidth/2, canvasHeight/2);
			context.textSize = "10px";
			context.fillText("Press any key to play again.", canvasWidth/2, 3/4*canvasHeight);
		}
		else {
			context.fillStyle = "#ccff66";
			context.fillRect(0, 0, canvasWidth, canvasHeight);
			context.fillStyle = "#000000";
			context.textSize = "15px";
			context.textAlign = "center";
			context.fillText(message, canvasWidth/2, 10);
			context.textAlign = "left";
			context.fillText("Today's date is " + today, 10, 30);
			context.fillText("numbers_guessed[] = { ", 10, 50);
			var widthForForLoop = context.measureText("numbers_guessed[] = { ").width;
			for(var i = 0; i < numbersGuessed.length; i++) {
				if(i == numbersGuessed.length - 1) {
					context.fillText(numbersGuessed[i] + " }", 10 + widthForForLoop, 50);
				}
				else {
					context.fillText(numbersGuessed[i] + ", ", 10 + widthForForLoop, 50);
					widthForForLoop += context.measureText(numbersGuessed[i] + ", ").width;
				}
			}
			context.fillText("Number of guesses: " + guesses, 10, 70);
		}
	}
	initGame();
	
	console.log("Finished.");
}
