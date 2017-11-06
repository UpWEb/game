var img;
var img2;
var puzzle;
void setup(){
  
  fullScreen();
  img = loadImage("treeBF.jpg");
  img2 = loadImage("treeAF.jpg");
  puzzle = loadImage("puzzle.jpg");
  
  }

void draw(){
  
  if(keyPressed){
      image(img2,0, 0);
  }
  else{
     image(img,0,0);
  }
  image(puzzle,mouseX,mouseY);
}