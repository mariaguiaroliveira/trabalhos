function setup() {
  createCanvas(600, 400);background("blue");
}

function draw() {
stroke("yellow")  
fill("black")  
 
  //console.log(mouseIsPressed)  
 if(mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35)
  } 
}





