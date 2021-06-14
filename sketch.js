const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var Rubber1;
var stone1;
var iron1;
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    stone1 = new Stone(200, 500, 70 ,50);
    Rubber1 = new Rubber(800, 500, 50 ,50);  
    iron1 = new Iron(600, 500, 90, 90)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    Rubber1.display();
    stone1.display();
    iron1.display();
}