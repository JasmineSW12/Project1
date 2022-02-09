//variables

var a;
var b;
var c;
var d;
var e;

//for random colors
var bgColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();


bgColor= color( random(255), random(255), random(255) );

  //for rectangle positions
   a = height / 4;
   b = height / 4;
   c = height / 4;
   d = height / 4;
  
   e = 200;

   window.alert('Press mouse on screen to randomly change the background color!');
}
 


function draw() {
  background(bgColor);



  //Purple colors 1
  
  //blue bell
  noStroke();
  fill(160, 145, 201);
  rect(a, a, 100, 100);
  
  //light pastel purple
  noStroke();
  fill(178, 154, 209);
  rect(b, b, 25, 25);
  
  //lenurple
  noStroke();
  fill(188, 158, 214);
  rect(c, c, 250, 200);
  
  //westeria
  noStroke();
  fill(197, 163, 218);
  rect(d, d, 50, 30);
  
  //tropical violet
  noStroke();
  fill(206, 167, 222);
  rect(c, e, 50, 20);
  
 // for x and y  and random postions
  
  a = a - 0.5;
  if (a < 0) {
    a = height;
  }
  
  b = b - 1;
  if (b < 0) {
    b = height;
  }
  
  c = c + 0.5; 
    if (c < 0) {
      c = height;
  }
  
  d = d + 1;
  if (d < 0) {
    d = height;
  }


  
  //Yellow Color 1
  
  
  //cyber yellow
  noStroke();
  fill(255, 211, 0);
  rect(a, b, 250, 150);
  
  //banana yellow
  noStroke();
  fill(255, 220, 38);
  rect(b, a, 50, 25);
  
  //gargoyle Gas
  noStroke();
  fill(255, 229, 76);
  rect(c, b, 25, 25);
  
  //shandy
  noStroke();
  fill(255, 237, 115);
  rect(d, c, 30, 30);
  
  //pastel yellow
  noStroke();
  fill(206, 167, 222);
  rect(e, a, 300, 250);
  
  //very pale yellow
  noStroke();
  fill(255, 255, 191);
  rect(b, e, 50, 80);
  
   
  //mix of purple and yellow colors 
  
  //french violet
  noStroke();
  fill(130, 7, 224);
  rect(b + a, a, 150, 25);
  
  //golden yellow
  noStroke();
  fill(255, 223, 0);
  rect(c + a, b, 45, 90);
  
  //indigo
  noStroke();
  fill(77, 5, 133);
  rect(d + d, e, 25, 80);
  
  //golden road
  noStroke();
  fill(197, 163, 218);
  rect(e + e, c, 55, 75);
  
  //electric violet
  noStroke();
  fill(147, 8, 255);
  rect(b + d, a + c , 25, 25);

 //mix of random colors 
  
  //r
  noStroke();
  fill(bgColor);
  rect(50 + a, 250, 150, 25);
  
  //r
  noStroke();
  fill(bgColor);
  rect(100 + c, c, 45, 90);
  
  //r
  noStroke();
  fill(bgColor);
  rect(200 + e, 450, 25, 80);
  
  //r
  noStroke();
  fill(bgColor);
  rect(25 + d, a, 55, 75);
  
  //r
  noStroke();
  fill(bgColor);
  rect(80 + c, a + c , 25, 25);

}

function mousePressed(){
//Generates random colors in rgb

  bgColor = color( random(0, 255), random(0, 255), random(0, 255) );
   

}
