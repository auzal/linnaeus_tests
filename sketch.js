//define button names
let buttonLake;
let buttonTree1;
let buttonPath;
let buttonEraser;
let buttonTree2;
let buttonSave;

// set to the lake brush when starting sketch
let currentBrush = "Lake";

//define image names
let tree1Image;
let tree2Image;
let brushpanel;
let logo;

//define tree image positions
let previousTree1X = 0;
let previousTree1Y = 0;

let previousTree2X = 0;
let previousTree2Y = 0;

//define frame and second variables
let f;
let s;

function preload() {
  tree1Image = loadImage("assets/tree1.svg");
  tree2Image = loadImage("assets/tree2.svg");
  brushpanel = loadImage("assets/brushpanel.png");
  logo = loadImage("assets/changelakers logo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight); // full screen
  background(94, 120, 62); //create background
  imageMode(CENTER); // set image mode to center
  
  //define button for the lake brush
  let buttonLake = createButton("Lake");
  buttonLake.position(70, 35);

  //define button for the tree brush
  let buttonTree1 = createButton("Tree 1");
  buttonTree1.position(70, 90);

  //define button for the path brush
  let buttonPath = createButton("Path");
  buttonPath.position(70, 200);

  //define button for the eraser brush
  let buttonEraser = createButton("Eraser");
  buttonEraser.position(70, 255);

  //define button for the tree brush
  let buttonTree2 = createButton("Tree 2");
  buttonTree2.position(70, 145);

  //define button for the save button
  let buttonSave = createButton("Save Image");
  buttonSave.position(10, 310);

  //when buttons are pressed, brush gets selected
  buttonLake.mousePressed(changeToBrushLake);
  buttonTree1.mousePressed(changeToBrushTree1);
  buttonPath.mousePressed(changeToBrushPath);
  buttonEraser.mousePressed(changeToBrushEraser);
  buttonTree2.mousePressed(changeToBrushTree2);

  //when save button is pressed, image saves
  buttonSave.mousePressed(saveButton);
}

function draw() {
  
   //create white rectangle as backdrop
  fill(255);
  noStroke();
  rect(10, 10, 130, 290);

  //create brushpanel
  image(brushpanel, 40, 160, brushpanel.width * 0.18, brushpanel.height * 0.18);
  
  //make message appear after 30 seconds
  f = frameCount;
  s = f / 60; 
  if(s==30){
    ourMessage();
  }
  
  //define different brush settings
  if (mouseIsPressed) {
    switch (currentBrush) {
      case "Lake":
        stroke(26, 151, 153); // set brush color
        strokeWeight(40); // set brush thickness
        strokeCap(ROUND); //set stroke cap to round
        line(mouseX, mouseY, pmouseX, pmouseY); // draw the line
        break;
      case "Tree 1":
        let distanceTree1 = dist(
          mouseX,
          mouseY,
          previousTree1X,
          previousTree1Y
        );
        if (distanceTree1 > 50) {
          push();
          translate(mouseX, mouseY);
          tint(random(50, 255));
          image(
            tree1Image,
            0,
            0,
            tree1Image.width * 0.25,
            tree1Image.height * 0.25
          );
          pop();

          previousTree1X = mouseX;
          previousTree1Y = mouseY;
        }
        break;
      case "Path":
        stroke(107, 72, 52); // set brush color
        strokeWeight(5); // set brush thickness
        strokeCap(ROUND); //set stroke cap to round
        line(mouseX, mouseY, pmouseX, pmouseY); // draw the line
        break;
      case "Eraser":
        stroke(94, 120, 62); // set brush color
        strokeWeight(15); // set brush thickness
        strokeCap(ROUND); //set stroke cap to round
        line(mouseX, mouseY, pmouseX, pmouseY); // draw the line
        break;
      case "Tree 2":
        let distanceTree2 = dist(
          mouseX,
          mouseY,
          previousTree2X,
          previousTree2Y
        );
        if (distanceTree2 > 50) {
          push();
          translate(mouseX, mouseY);
          tint(random(50, 255));
          image(
            tree2Image,
            0,
            0,
            tree2Image.width * 0.25,
            tree2Image.height * 0.25
          );
          pop();

          previousTree2X = mouseX;
          previousTree2Y = mouseY;
        }
    }
  }
  image(logo, windowWidth - 80, 40, logo.width * 0.02, logo.height * 0.02);
}

//redefine current brush

function changeToBrushLake() {
  currentBrush = "Lake";
}

function changeToBrushTree1() {
  currentBrush = "Tree 1";
}

function changeToBrushPath() {
  currentBrush = "Path";
}

function changeToBrushEraser() {
  currentBrush = "Eraser";
}

function changeToBrushTree2() {
  currentBrush = "Tree 2";
}

function saveButton() {
  saveCanvas();
}

function ourMessage() {
  alert("If you enjoy drawing your own lake, you could consider taking a walk around Växjö Sjön and exploring our stations around the lake. If that is not your thing, feel free to come to the +Change day at LNU on the 3rd of June!");
  
}
