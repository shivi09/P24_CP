const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var binLEdge, binREdge, binBEdge, ground, ball;

function setup() {
  createCanvas(1400, 400);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  binLEdge = new Box(1100, 250, 20, 150);
  binREdge = new Box(1300, 250, 20, 150);
  binBEdge = new Box(1200, 320, 220, 20);
  ball = Bodies.circle(50, 320, 20, {
    restitution: 1,
    density: 1.2,
    friction: 1,
  });
  ground = new Ground(700, 340, 1400, 20);
  World.add(world, ball);
  Engine.run(engine);
}

function draw() {
 
  background(0);
  binLEdge.display();
  binREdge.display();
  binBEdge.display();
  fill("pink");
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
  
  ground.display();
  drawSprites();
}

function keyPressed() {
  if (keyCode === 32) {
    Body.applyForce(ball, ball.position, { x: 105, y: -85 });
  }
}
