var bgImg , bathImg , brushImg , drinkImg , eatImg , gymImg , moveImg , sleepImg;
var bg , bath , brush , drink , eat , gym , move , sleep , astornoat;
function preload() {
  bgImg = loadImage("images/iss.png");
  bathImg = loadAnimation("images/bath1.png","images/bath2.png");
  brushImg = loadAnimation("images/brush.png");
  drinkImg = loadAnimation("images/drink1.png","images/drink2.png");
  eatImg = loadAnimation("images/eat1.png","images/eat2.png");
  gymImg = loadAnimation("images/gym11.png","images/gym12.png");
  moveImg = loadAnimation("images/move.png","images/move1.png");
  sleepImg = loadAnimation("images/sleep.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
  astornoat = createSprite(400,250);
  astornoat.addAnimation("sleeping" , sleepImg);
  astornoat.scale = 0.1;

}

function draw() {
  background(bgImg);
  
  if (keyDown("UP_ARROW")){
    astornoat.addAnimation("brushing" , brushImg);
    astornoat.changeAnimation("brushing");
    astornoat.y = 260;
    astornoat.velocityX = 0;
    astornoat.velocityY = 0;
  }

  if (keyDown("DOWN_ARROW")){
    astornoat.addAnimation("gyming" , gymImg);
    astornoat.changeAnimation("gyming");
    astornoat.y = 260;
    astornoat.velocityX = 0;
    astornoat.velocityY = 0;
  }

  if (keyDown("LEFT_ARROW")){
    astornoat.addAnimation("eating" , eatImg);
    astornoat.changeAnimation("eating");
    astornoat.y = 260;
    astornoat.velocityX = 0;
    astornoat.velocityY = 0;
  }

  if (keyDown("RIGHT_ARROW")){
    astornoat.addAnimation("bathing" , bathImg);
    astornoat.changeAnimation("bathing");
    astornoat.y = 260;
    astornoat.velocityX = 0;
    astornoat.velocityY = 0;
  }

  drawSprites();
}