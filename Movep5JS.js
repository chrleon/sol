let x = 0;
let y = 0;
let moving = false;
let speed = 2
function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);
  movement()
  rect(x, y, 16, 16);
  text(key, x+5, y+12);
}

function movement(){
  if(keyIsDown(87)) {  // w
    y -= speed
  }
  if(keyIsDown(68)) {  // a
    x += speed
  }
  if (keyIsDown(83)) { // s
    y += speed
  }
  if (keyIsDown(65)) { // d
    x -= speed
  }
}