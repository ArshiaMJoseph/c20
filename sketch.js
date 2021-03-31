var fixedRect,movingRect;



function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(100,100,50,50);//25
  movingRect = createSprite(500,200,20,100);//10
  fixedRect.shapeColor ="green"
  movingRect.shapeColor = "green"


  mrect1 = createSprite(600,100,50,50);
  mrect2 = createSprite(600,400,50,50);
  mrect1.velocityY = 2;
  mrect2.velocityY = -2;
  mrect1.shapeColor = "blue";
  mrect2.shapeColor = "pink"
 
}

function draw() {
  background(255,255,255); 
  movingRect.x =World.mouseX;
  movingRect.y = World.mouseY; 

 // console.log(movingRect.y-fixedRect.y)

  if(movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x-movingRect.x <  movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y-fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y-movingRect.y <  movingRect.height/2 + fixedRect.height/2){

    fixedRect.shapeColor ="red"
    movingRect.shapeColor = "red"
  }
  else{
    fixedRect.shapeColor ="green"
    movingRect.shapeColor = "green"
  }

if(mrect1.y-mrect2.y < mrect1.height/2+mrect2.height/2 &&
  mrect2.y-mrect1.y < mrect1.height/2+mrect2.height/2
  ){
    console.log("bounce")
    
    mrect1.velocityY = (-1)* mrect1.velocityY
    mrect2.velocityY = (-1)* mrect2.velocityY
   

}


  drawSprites();
}