/* Lab 3b - Declare Your Own Variables
 * Declare and use a variable in a P5 sketch
 * 
 */

//declare a global variable and assign it a number value on the next line:
var x = 40
var y = 60

function setup() {
  createCanvas(400, 300); // creates a drawing canvas
  strokeWeight(2);
}

function draw() {
  // background is drawn first
  background(200); // light gray
  ellipse(25, y, x, x)
  ellipse(45, y, x, x)
  ellipse(65, y, x, x)
  ellipse(85, y, x, x)
  for(var b = 50; b < 300; b += 45) {
    ellipse(b, 150, b + x, y)
  }
  // call a simple P5 drawing function, such as ellipse() using your new variable(s) in place of arguments
  
  
}
