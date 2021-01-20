const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var grd1,grd2,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,grd3,Polygon;


function preload(){
polyImg=loadImage("polygon.png")

}


function setup(){
 
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    polygon=Bodies.circle(100,500,30)

    grd1=new Ground(600,395,1300,50)
    grd2=new Ground(390,250,250,20)
    grd3=new Ground(690,250,250,20)

    b1=new Box(330,235,30,40)
    b2=new Box(360,235,30,40)
    b3=new Box(390,235,30,40)
    b4=new Box(420,235,30,40)
    b5=new Box(450,235,30,40)
   
    b6=new Box(360,195,30,40)
    b7=new Box(390,195,30,40)
    b8=new Box(420,195,30,40)

    b9=new Box(390,155,30,40)
    
    b10=new Box(630,235,30,40)
    b11=new Box(660,235,30,40)
    b12=new Box(690,235,30,40)
    b13=new Box(720,235,30,40)
    b14=new Box(650,235,30,40)
   
    b15=new Box(650,195,30,40)
    b16=new Box(695,195,30,40)
    b17=new Box(670,195,30,40)

    b18=new Box(670,155,30,40)

    ball = Bodies.circle(50,200,20);
    World.add(world,ball);
    
    slingshot = new SlingShot(this.ball,{x:100,y:200});
    
}

function draw(){
    background(255)
    Engine.update(engine);
    grd1.display();
    grd2.display();

    b1.display()
    b2.display()
    b3.display()
    b4.display()
    b5.display()
    b6.display()
    b7.display()
    b8.display()
    b9.display()
  
    b11.display()
    b12.display()
    b13.display()
    b14.display()
    b15.display()
    b16.display()
    b17.display()
    b18.display()
    b10.display()
   
    image(polyImg,ball.position.x,ball.position.y,40,40)

 grd3.display();

}

function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
   }
  function mouseReleased(){
    slingshot.fly();
  } 
  function keyPressed(){
    if(keyCode===32){
      slingshot.attach(ball);
    }
}