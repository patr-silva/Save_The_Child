let yoda;
let bg;
const topOfBoard = 50;
const bottomOfBoard = 330;


function preload() {
  bg = loadImage("./IMAGES/2109.w023.n001.1040B.p1.1040.jpg");
  yodaImg = loadImage("./IMAGES/BY.png");
}

class BabyYoda {
  constructor() {
    this.x = 20;
    this.y = 330;
    this.speedY = 0;
    this.gravity = 3;
    
  }

  show() {
    image(yodaImg, this.x, this.y, 180, 150);
  }

}

/*function keyPressed(obj) {
  if (keyIsDown(ENTER)) {
    obj.y -= 30;
    obj.vy = 5;
  } else {
    obj.y = 330;
  }
  if (obj.y < 10) {
    obj.y = 330;
  }
}

function keyPressed(obj) {
    if (keyIsDown(ENTER)) {
        obj.vy = -5;
        obj.y += obj.vy;
        obj.vy += obj.grav;
       
    } else {
        obj.y -= obj.vy;
    }
   



  }*/

  function keyPressed(obj){
    if (keyIsDown(ENTER)) {
        obj.speedY = -5;
        obj.y += obj.speedY;
        obj.speedY += obj.gravity;
    } else {
        obj.y -= obj.speedY;
    }

   

    if(obj.y < topOfBoard){
        obj.y = topOfBoard;
    }


    if(obj.y > bottomOfBoard){
        obj.y = bottomOfBoard;
    }
 }




function setup() {
  createCanvas(1400, 500);
  yoda = new BabyYoda();
}

function draw() {
  background(bg);
  yoda.show();
  keyPressed(yoda);
}
