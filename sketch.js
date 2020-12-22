var hr,min,sec;
var hrAngle,minAngle,secAngle

function setup(){
  createCanvas(500,600)

  angleMode(DEGREES)
}

function draw(){
  background("lightblue")

  hr=hour()
  min=minute()
  sec=second()
 
  //to mae a circle for clock
  push()
  translate(250,300);
  ellipseMode(RADIUS)
  fill("yellow")
  noStroke()
  ellipse(0,0,160,160)
  pop()
 


  //for hour hand
  push()
  translate(250,300);
  strokeWeight(7)
  stroke("black")
  rotate(180+hr*30)
  line(0,100,0,0)
  pop()

  //for minute hand
  push()
  translate(250,300);
  strokeWeight(5)  
  stroke("green")
  rotate(180+min*6)
  line(0,150,0,0)
  pop()
  
  //for second hand
  push()
  translate(250,300);
  strokeWeight(3)  
  stroke("red")
  rotate(180+sec*6)
  line(0,70,0,0)
  pop()

  

  //to draw arc for second
  push()
  strokeWeight(3)  
  stroke("red")
  translate(250,300);
  noFill()
  arc(0,0,340,340,-90,sec*6-90)
  pop()

  //to draw arc for minute
  push()
  strokeWeight(5)  
  stroke("green")
  translate(250,300);
  noFill()
  arc(0,0,380,380,-90,min*6-90)
  pop()

  //to draw arc for hour
  push()
  strokeWeight(7)  
  stroke("black")
  translate(250,300);
  noFill()
  arc(0,0,420,420,-90,hr*30-90)
  pop()

  drawSprites()
}