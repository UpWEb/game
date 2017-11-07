function setup() {
  createCanvas(1980,1000);
  // put setup code here
  var img;
  var img2;
  var puzzle;
}

function preload(){
	puzzle =loadImage("puzzle.jpg");
	img = loadImage("treeBF.jpg");
	img2 = loadImage("treeAF.jpg");
	
}


function draw() {
  // put drawing code here
  if(keyIsPressed){
  image(img2,0,0,1300,1200);
  }
  else{
  image(img,0,0,1300,1200);
  }
  	image(puzzle,mouseX,mouseY, puzzle.width/2, puzzle.height/2);
}