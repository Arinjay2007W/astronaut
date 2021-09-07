
var bg,sleep,brush,gym,eat,bath,move
var astro


function preload(){
  
   bg=loadImage("images/iss.png")
   sleep=loadAnimation("images/sleep.png")
   brush=loadAnimation("images/brush.png")
   bath=loadAnimation("images/bath1.png","images/bath2.png")
   gym=loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png")
   eat=loadAnimation("images/eat1.png","images/eat1.png","images/eat2.png","images/eat2.png")
   move=loadAnimation("images/move.png","images/move.png","images/move1.png","images/move1.png")

}

function setup() {
  createCanvas(800,500);
  

  astro=createSprite(350,230)
  astro.addAnimation("sleeping",sleep)
  astro.scale=0.1
  
  

}

function draw() {
  background(bg);  

  textSize(20)
  fill("white")
  text("Instructions-",20,30)
  textSize(15)
  text("Up Arrow = Brushing",20,50)
  text("Down Arrow = Gymming",20,70)
  text("Left Arrow = Eating",20,90)
  text("Right Arrow = Bathing",20,110)
  text("m Key = moving",20,130)

  if (keyDown("UP_ARROW")){
    astro.addAnimation("brushing",brush);
    astro.changeAnimation("brushing");
    astro.y=350;
    astro.velocityX=0;
    astro.velocityY=0;
   }
  

   if(keyDown("DOWN_ARROW")){
    astro.addAnimation("gyming",gym);
    astro.changeAnimation("gyming");
    astro.y=350;
    astro.velocityX=0;
    astro.velocityY=0;
   }

   if(keyDown("Left_ARROW")){
    astro.addAnimation("eating",eat);
    astro.changeAnimation("eating");
    astro.y=350;
    astro.x=150;
    astro.velocityX=0.5;
    astro.velocityY=0.5;
   }

   if(keyDown("Right_ARROW")){
    astro.addAnimation("bathing",bath);
    astro.changeAnimation("bathing");
    astro.y=350;
    astro.velocityX=0;
    astro.velocityY=0;
   }

   

   if(keyDown("m")){
    astro.addAnimation("moving",move);
    astro.changeAnimation("moving");
    astro.velocityX=1;
    astro.velocityY=-1;
   }

  drawSprites();
  
  
  
 
}