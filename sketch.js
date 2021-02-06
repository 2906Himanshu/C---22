const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine, world
function setup() {
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world
  var options = {isStatic : true}
  object = Bodies.rectangle(200, 390, 400, 20, options)
  World.add(world, object)
  console.log(object)
  var bounce = {restitution : 1.0}
  ball = Bodies.circle(200, 100, 20, bounce)
  World.add(world, ball)
  cir = Bodies.rectangle(190, 50, 30, 30, bounce)
  World.add(world, cir)

}

function draw() {
  background(0);  
  Engine.update(engine)
  rectMode(CENTER)
  rect(object.position.x, object.position.y, 400, 20)
  rect(cir.position.x, cir.position.y, 30, 30)
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 20, 20)
}