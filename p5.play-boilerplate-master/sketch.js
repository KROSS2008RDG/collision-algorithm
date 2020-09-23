var rectM, rectF;

function setup() {
  createCanvas(800,400);
 rectM = createSprite(200, 200, 50, 100);
 rectM.shapeColor="red";
 rectM.debug=true;

 rectF = createSprite(600, 200, 100, 50);
 rectF.shapeColor="red";
 rectF.debug=true;
}

function draw() {
  background("cyan");
  
  rectM.x=World.mouseX;
  rectM.y=World.mouseY;

  if (rectM.x - rectF.x < rectM.width/2 + rectF.width/2
    && rectF.x - rectM.x < rectM.width/2 + rectF.width/2
    && rectM.y - rectF.y < rectM.height/2 + rectF.height/2
    && rectF.y - rectM.y < rectM.height/2 + rectF.height/2){
    rectM.shapeColor="orange";
    rectF.shapeColor="orange";
  }
  else{
    rectM.shapeColor="red";
    rectF.shapeColor="red";
  }
  drawSprites();
}