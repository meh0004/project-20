var car,wall;
var deformation;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = "white";

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80) ;

   deformation = 0.5 * weight * speed * speed /22500;
  
}

function draw() {
  background(0);  
  if(wall.x-car.x < car.width/2 + wall.width/2) {
    car.velocityX = 0;
   

    if(deformation > 180){
      car.shapeColor = "red"
    }else 
    console.log(deformation)
    if(deformation < 180 && deformation > 100) {
      car.shapeColor = "yellow"
    }else
    if (deformation < 100){
      car.shapeColor = "green"
    }
  }


  drawSprites();
}