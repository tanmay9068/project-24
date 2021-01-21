const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground,pig1,pig2;
var log1,log2,log3,log4;
var bird;
var ball;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(250,320,5,5);
    box2 = new Box(260,320,5,5);

    ground = new Ground(600,height,1200,20);
    pig1 = new Pig(500,350)
    log1 = new Log(600,300,60,PI/2)

    box3 = new Box(270,240,5,5)
    box4 = new Box(280,240,5,5)
    box5 = new Box(300,160,5,5)
     bird = new Bird(100,100);
    ball = new Ball(350,50,10);

}
                                                                               
function draw(){
    background("blue");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    box5.display();
    bird.display();
    ball.display();
}
    