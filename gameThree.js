window.addEventListener("load", whenPageLoads, false);

function whenPageLoads() {
  canvas3();
}

function canvas3() {
  var canvas = document.getElementById("canvas3");
  if(!canvas) return;
  var context = canvas.getContext("2d");
  var tile1 = new Tile(300, 0);
  var tile2 = new Tile(200, 0);
  var tile3 = new Tile(100, 0);
  var tile4 = new Tile(0, 0);
  var tile5 = new Tile(0, 100);
  var tile6 = new Tile(0, 200);
  var tile7 = new Tile(0, 300);
  var tile8 = new Tile(100, 300);
  var tile9 = new Tile(200, 300);
  var tile10 = new Tile(200, 200);
  var tile11 = new Tile(200, 100);
  var void1 = new Void(100, 100);
  var void2 = new Void(100, 200);
  var void3 = new Void(300, 100);
  var void4 = new Void(300, 200);
  var void5 = new Void(300, 300);
  var squares[] = {tile4, tile3, tile2, tile1, tile5, void1, tile11, void3, tile6, void2, tile10, void4, tile7, tile8, tile9, void3};
  
  function Player(x, y) {
    this.x = x;
    this.y = y;
    this.l = 40;
    this.color = "#0000ff";
    this.tile = tile1;
    this.draw = function() {
      this.tile.draw();
      context.fillStyle = this.color;
      context.fillRect(this.x - 30, this.y - 30, this.l, this.l);
    }
    this.die = function() {
      
    }
    this.move = function(tile) {
      this.tile = tile;
    }
  }
  
  function Coin(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 15;
    this.color = "#ffff00";
    this.tile = tile11;
    this.draw = function() {
      this.tile.draw();
      context.fillStyle = this.color;
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
      context.stroke();
      context.fill();
    }
    this.relocate = function(x, y) {
      this.x = x;
      this.y = y;
    }
  }
  
  function Tile(x, y) {
    this.color = "#e6f3ff";
    this.x = x;
    this.y = y;
    this.draw = function(x, y) {
      context.fillStyle = this.color;
      context.fillRect(this.x, this.y, 100, 100);
      context.drawRect(this.x, this.y, 100, 100);
    }
  }
  
  function Void(x, y) {
    this.color = "#000000"
    this.x = x;
    this.y = y;
    this.draw = function(x, y) {
      context.fillStyle = this.color;
      context.fillRect(x, y, 100, 100);
    }
  }
}
