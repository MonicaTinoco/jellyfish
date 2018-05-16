// Where is the circle
var x, y;
var img;
var img2;

function preload() {
  img = loadImage('image/long_jellyfish1.gif');
}

function setup() {
  createCanvas(720, 400);
  img2 = loadImage("image/plasticbag1.png");
  // Starts in the middle
  x = width / 2;
  y = height;
}

function draw() {
  image(img2, 0, 0);
  image(img, x, y, 150, 150);

  // Jiggling randomly on the horizontal axis
  x = x + random(-1, 1);
  // Moving up at a constant speed
  y = y - 1;

  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
}
