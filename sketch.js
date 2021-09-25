var garden,rabbit;
var gardenImg,rabbitImg;
var leaf, leaf1;
var orangeLeaf, orangeLeaf1;
var redLeaf, redLeaf1;
var apple, apple1;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leaf1 = loadImage("leaf.png");
  orangeLeaf1 = loadImage("orangeLeaf.png");
  redLeaf1 = loadImage("redImage.png");
  apple1 = loadImage("apple.png")
}

function setup(){
  
  createCanvas(500,500);


  // Moving background
  garden=createSprite(250,250);
  garden.scale = 1.15
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,360,30,30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
  
}


function draw() {
  background(180);
  rabbit.x = mouseX;
  var select_sprites = Math.round(random(1, 4));
  if(frameCount%140 == 0){
  if(select_sprites == 1) {
      spawnRedImage();
  }
  }
  if(frameCount%140 == 0){
    if(select_sprites == 2){
    spawnLeafs();
  }
  }
  if(frameCount%140 == 0){
  if(select_sprites == 3) {
    spawnOrangeLeaf();
  }
  }
  if(frameCount%140 == 0){
    if(select_sprites == 4) {
      spawnApple();
    }
    }

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

function spawnLeafs() {
  leaf = createSprite(random (50, 350), 40, 10, 10);
  leaf.addImage(leaf1);
  leaf.scale = 0.09;
  leaf.velocityY = 3;
}
function spawnOrangeLeaf() {
  orangeLeaf = createSprite(random (50, 350), 40, 10,10);
  orangeLeaf.addImage(orangeLeaf1);
  orangeLeaf.scale = 0.06;
  orangeLeaf.velocityY = 3;  
}  
function spawnRedImage() {
  redLeaf = createSprite(random (50, 350), 40, 10, 10);
  redLeaf.addImage(redLeaf1);
  redLeaf.scale = 0.04;
  redLeaf.velocityY = 3;  
}
function spawnApple(){
  apple = createSprite(random (50, 350), 40, 10, 10);
  apple.addImage(apple1);
  apple.velocityY = 3;
}
