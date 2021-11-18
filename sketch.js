var Jaxon,path;
var pathFt,JaxonCorrendo
var RightBoundary,leftBoundary

function preload(){
  pathFt = loadImage("path.png");
  JaxonCorrendo = loadAnimation("Runner-1.png","Runner-2.png");
}
function setup(){
createCanvas(400,400);

  path = createSprite(200,200);
  path.addImage(pathFt);

  RightBoundary = createSprite (300,200,10,500)
  leftBoundary = createSprite (100,200,10,500)

  Jaxon = createSprite(200,350,30,30);
  Jaxon.addAnimation("animacao",JaxonCorrendo);
  Jaxon.scale = 0.08;


}
function draw() {
  background(0);
  if(path.y > 400){
    path.y = height/2;
  }
 
  if (World.mouseX > 300 || World.mouseX < 100){
    if (World.mouseX > 300) {
        Jaxon.x = 300;
    }else{
      Jaxon.x = 100;
    }
     }else{
    Jaxon.x = World.mouseX;
  }

  path.velocityY = 10;

  drawSprites();
}