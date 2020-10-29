function setup() {
  createCanvas(800,400);
  fixrect = createSprite(400, 200, 50, 50);
  moverect = createSprite(600,200,50,50);

  o1 = createSprite(200,200,80,80);
  o2 = createSprite(400,400,80,80);
}

function draw() {
  background("pink");
  o2.x = mouseX;
  o2.y = mouseY;
  if(isTouching(o1,o2)) {
   o1.visible = false;
   o2.visible = false;
  }  else{
    o1.visible = true;
    o2.visible = true;
  } 
  drawSprites();
}

