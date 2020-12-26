const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
var canvas;

function setup() {
	canvas = createCanvas(windowWidth/2,windowHeight/1.5);

	engine = Engine.create();
  world = engine.world;
  
  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();

  let options = {
    mouse:canvasmouse
  }

  mConstraint = MouseConstraint.create(engine,options);
  World.add(world,mConstraint);

  pendulum1 = new Pendulum(250,400,0);
  pendulum2 = new Pendulum(320,400,0);
  pendulum3 = new Pendulum(390,400,0);
  pendulum4 = new Pendulum(460,400,0);
  pendulum5 = new Pendulum(530,400,0);
  Engine.run(engine);
  
}

function draw() {
    rectMode(CENTER);
    background("yellow");
    pendulum1.display();
    pendulum2.display();
    pendulum3.display();
    pendulum4.display();
    pendulum5.display();

  Engine.update(engine);
}

function mouseDragged(){
  Matter.Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY});
}