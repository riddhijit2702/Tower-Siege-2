const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;

var engine, world,polygon_Img,b1,b2,tries=0;
function preload(){
polygon_Img=loadImage("polygon.png")
}
function setup(){
     canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
  var options={
      restitution:0.9,
      friction:0.5,
      
  }

    polygon=Bodies.circle(50,200,30,options)
    World.add(world,polygon)

 slingshot = new Slingshot (this.polygon, {x:100,y:200});
  base1=new Base(410,465,400,15)
  block1=new Box(340,430,40,60)
  block2=new Box(370,430,40,60)
  block3=new Box(400,430,40,60)
  block4=new Box(430,430,40,60)
  block5=new Box(460,430,40,60)
  block6=new Box(490,430,40,60)
  block7=new Box(520,430,40,60)

  block8=new Block2(370,390,40,60)
  block9=new Block2(400,390,40,60)
  block10=new Block2(430,390,40,60)
  block11=new Block2(460,390,40,60)
  block12=new Block2(490,390,40,60)
 
  block13=new Box3(400,330,40,60)
  block14=new Box3(430,330,40,60)
  block15=new Box3(460,330,40,60)
 // block16=new Box3(495,330,40,60)
 
  block17=new Box4(430,275,40,60)
 

  base2=new Base(860,320,300,15)

  block18=new Box(755,305,40,60)
  block19=new Box(810,305,40,60)
  block20=new Box(850,305,40,60)
  block21=new Box(870,305,40,60)
  block22=new Box(920,305,40,60)

  block23=new Block2(810,240,40,60)
  block24=new Block2(850,240,40,60)
  block25=new Block2(870,240,40,60)

  block26=new Box4(850,185,40,60)
 ground = new Base(600,590,1200,50)

  
}
function draw(){
    background("#382C2C");
 
     Engine.update(engine);


     base1.display();
     block1.display();
     block2.display();
     block3.display();
     block4.display();
     block5.display();
     block6.display();
     block7.display();
     
     block8.display();
     block9.display();
     block10.display();
     block11.display();
     block12.display();
     
     block13.display();
     block14.display();
     block15.display();
    // block16.display();

     block17.display();
     

    base2.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();

    block23.display();
    block24.display();
    block25.display();
    
    block26.display();

    ground.display();
    imageMode(CENTER)
    stroke("green")
   fill("red")
    image(polygon_Img ,polygon.position.x,polygon.position.y,50,50);

     
    text(mouseX+","+mouseY,mouseX,mouseY)
   
    textSize(25)
    text("It is not possible to win in one try,right?",220,70)
    text("Press the space key on your laptop to get a second chace to play!!!",220,100)
    textSize(25)
    stroke('blue')
    fill("#FF0000")
   text("Drag the Hexagonal and release it towrds the blocks and destroy the pyramid",220,40)
   textSize(15)
   stroke('blue')
   fill("#FF0000")
    text("TIP:Do not drag the hexagon so long and release it as quickly as possible in the correct trajectory,Wish you good luck",90,540)
    text("Tries "+tries,55,170)
    }

    function mouseDragged(){
        Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
    }
    function mouseReleased(){
        slingshot.fly();
    }
function keyPressed(){
    if(keyCode===32){
        slingshot.attach(this.polygon)
       
        tries=tries+1
    }
}

