
const Engine = Matter.Engine;
//namespacing=giving nick names
//const=constant fixed variable
//all kind of physics property
const World = Matter.World;
//the world where we create to use physics property
const Bodies = Matter.Bodies;
//the group of objects which follows rules accordingly
const Body = Matter.Body;
//individual body




function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  //We are creating our engine from matter.Engine
  world = engine.world;
  //whenever we create a engine a world gets created already with it

  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     //we create physics property here
     //it follows JSON Rule
     //Javascript Object Notation
     //whenever you use JSON instead of = we use : and instead of ; we use ,
     isStatic: true,
     //isStatic= if the object is moving or not

   };
  
  
//we are creating our object i.e ground from Bodies
  ground = Bodies.rectangle(100,400,400,20,ground_options);
  World.add(world,ground);
  //we are adding our world's ground to Matter.js World

  ball1 = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball1);

  ball2 =  Bodies.circle(150,10,20,ball_options);
  World.add(world,ball2);

  ball3 =  Bodies.circle(200,10,20,ball_options);
  World.add(world,ball3);

  ball4 =  Bodies.circle(250,10,20,ball_options);
  World.add(world,ball4);

  ball5 =  Bodies.circle(300,10,20,ball_options);
  World.add(world,ball5); 
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  //to make the objects in Center
}


function draw() 
{
  background(51);
  Engine.update(engine);
  //we are updating our engine from matter.Engine
  
  
 
   //we are displaying our object
  ellipse(ball1.position.x,ball1.position.y,20);
  rect(ground.position.x,ground.position.y,500,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  ellipse(ball3.position.x,ball3.position.y,20);
  ellipse(ball4.position.x,ball4.position.y,20);
  ellipse(ball5.position.x,ball5.position.y,20);
 
console.log(ground.position.y);

  
  
}

