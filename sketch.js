var fixed,move;


function setup() {

  createCanvas(400,400);
 fixed=createSprite(100,100,50,50);
 move=createSprite(300,300,50,50);
 
 fixed.shapeColor="blue";
  move.shapeColor="red";
fixed.velocityX=2;
fixed.velocityY=2;

move.velocityX=-2;
move.velocityY=-2;
}

function draw() {
  background("yellow"); 
 bounceOff(fixed,move)
  drawSprites();
}
