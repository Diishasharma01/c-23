const Engine= Matter.Engine;
const World=  World.bodies;
const bodies= Matter.bodies;

var Engine,world;
var box1;

function setup(){
    var canvas= (800,800);
    engine= create.engine();
    world= create.world();

    box1=(200,300,50,50)
    box2=(240,100,50,100)
    ground=new ground (200,height,400,20)
}

function draw(){
    background(255)
    Engine.update(engine);
    box1.display;
    box2.display;
    console.log=(box1.body.position.X);
    console.log=(box2.body.position.Y);
}