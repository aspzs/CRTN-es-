function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
}


function mousePressed(){
  clear();
}


function draw() {
  background(0,0,0,0);
  line(0, 0, mouseX, mouseY);

}
