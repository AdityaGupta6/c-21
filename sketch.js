var fixedRect, movingRect;
var rect1,rect2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;


  rect1=createSprite(500,100,50,50);
  rect2=createSprite(800,100,50,50);

  rect1.velocityX=5;
rect2.velocityX=-5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;





if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
}
else{
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
}
bounce(rect1,rect2);

  drawSprites();
}

