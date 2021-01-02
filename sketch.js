
var bullet, wall, thickness;
var speed, weight;
var damage;

function setup() {
  createCanvas(1600,400);
  

  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)

  bullet=createSprite(50,200,10,5);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX = speed;

  damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);
}

function draw() {
  background(255,255,255);  
  
  if(isTouching(bullet, wall)){
  
  //bullet.velocityX = 0;
    if(damage > 10){

      wall.shapeColor=color(255,0,0);


    }
    else{

      wall.shapeColor=color(0,255,0);


    }
  
  }
  drawSprites();
}

function isTouching (object1, object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2 ) {
    
      return true;
}
else {
 
  return false;

}


}