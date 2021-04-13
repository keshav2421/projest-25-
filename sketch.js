

var paper,paperimage
var bottom,dust
var land
var l
var r
var o
var u
var w1
var w2
var w3
var w4

function setup() {

//dust=loadImage("dustbingreen.png")
paperimage=loadImage("bird background.png")

  
}


function setup() {
	createCanvas(800, 400);



  


land=createSprite(400,400,800,40)
land.shapeColor="green"

paper=createSprite(200,250,30,30)  
paper.addImage("running", paperimage);
  
  
bottom=createSprite(625,370,170,20)
//bottom.addImage("me",dust)
r=createSprite(550,300,20,150)
  r.shapeColor="lime"
l=createSprite(700,300,20,150)
l.shapeColor="lime"
bottom=createSprite(625,370,170,20)
bottom.shapeColor="lime"
o=createSprite(625,293,130,135)
o.shapeColor="lime"
u=createSprite(625,235,190,20)
  u.shapeColor="lime"
w1=createSprite(575,310,20,100)
w1.shapeColor="white"

w2=createSprite(610,310,20,100)
w2.shapeColor="white"
  
w3=createSprite(645,310,20,100)
w3.shapeColor="white"
  
w4=createSprite(680,310,20,100)
w4.shapeColor="white"



  
}


function draw() {
  rectMode(CENTER)
  background(0);
  
  paper.collide(land)
  paper.collide(l)
  paper.collide(r)
  paper.collide(bottom)
  
  
  
  if(keyDown("up")){
    
    paper.velocityY=-10
    paper.velocityX=6
      }
paper.velocityY=paper.velocityY+0.3
  

  

  paper.debug=true;

  drawSprites();
}



