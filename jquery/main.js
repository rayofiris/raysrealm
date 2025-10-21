/*$("button").click(function(){
    $("p").toggleClass("main")});

    function setup() {
  //creates a canvas 600px wide and 400px high
  createCanvas(600, 400);
}*/

function draw() {
  //sky blue background
  background(135, 206, 235);
  
  //sun in top right corner
  fill("yellow"); //yellow
  stroke("orange");//orange outline
  strokeWeight("20"); //sets outline to 20px
  //^must be called before shape is drawn 
  circle(550, 50, 100); //x, y, size
  
  //grass
  fill("green");
  stroke(0);
  strokeWeight(1);
  rect(0, 200, 600, 200); //x, y, width, height
  
  //emojis
  textSize(75);
  text("🌸", 100, 250); //flower
  text("🐞", mouseX, mouseY); //ladybug
  //^"text", x, y
}