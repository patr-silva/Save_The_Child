let yoda;
let bg;

function preload(){
    bg = loadImage('./IMAGES/2109.w023.n001.1040B.p1.1040.jpg');
    yodaImg = loadImage('./IMAGES/BY.png');
}



class BabyYoda{
    constructor(){
        this.x = 20;
        this.y = 330; 
        //this.velY = 0;
    }

    show() {
        image(yodaImg, this.x, this.y, 180, 150)
    }

    
}


function keyPressed(obj) {
    if (keyIsDown(ENTER)) {
     obj.y -= 20;
     } else {
     obj.y = 330;  
    }
  
}


function setup(){
    createCanvas(1400, 500);
    yoda = new BabyYoda();
}

  
  function draw() {
    background(bg);
    yoda.show();
    keyPressed(yoda);
    
  }


