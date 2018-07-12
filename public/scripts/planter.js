
// for red, green, and blue color values
var r, g, b;

// for images
var img;



function setup() {
  createCanvas(windowWidth, windowHeight);
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(127);
  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(windowWidth/2 + 60, 70, 100, 100);
  ellipse(windowWidth/2 - 60, 70, 100, 100);
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, windowWidth/2 + 60, 70);
  if (d < 50) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}

// Auto-resize canvas
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
