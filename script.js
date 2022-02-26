let yoda;
let bg;
let storm;
let stormArr = [];
const topOfBoard = 50;
const bottomOfBoard = 330;

function preload() {
  bg = loadImage("./IMAGES/2109.w023.n001.1040B.p1.1040.jpg");
  yodaImg = loadImage("./IMAGES/BY.png");
  stormImg = loadImage("./IMAGES/Cartoon-Stormtrooper-Star-Wars-PNG.png");
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

class Enemies {
    constructor() {
        this.x1 = 1210;
        this.y1 = 270;
     // this.speedY = 0;
     // this.gravity = 3;
    }
  
    show() {
      image(stormImg, this.x1, this.y1, 250, 250);
    }

    move(){
        this.x1 -= 3;
    }

}
/*
function createEnemies(){
    let randomNumber = Math.random();
    if(randomNumber < 0.00011){
    stormArr.push(new Enemies())
    }
};*/

function createEnemies(){
    let randomNumber = Math.random();
    if(randomNumber < 0.00011){
    stormArr.push(new Enemies())
    }
    return stormArr;
};



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

function keyPressed(obj) {
  if (keyIsDown(ENTER)) {
    obj.speedY = -5;
    obj.y += obj.speedY;
    obj.speedY += obj.gravity;
  } else {
    obj.y -= obj.speedY;
  }

  if (obj.y < topOfBoard) {
    obj.y = topOfBoard;
  }

  if (obj.y > bottomOfBoard) {
    obj.y = bottomOfBoard;
  }
}

/*function enemiesMoving(arr){
    arr.x1 -= 3;
}*/

function setup() {
  createCanvas(1400, 500);
  yoda = new BabyYoda();
  createEnemies();  
 //storm = new Enemies();
 
}

function draw() {
  background(bg);
  yoda.show();
  keyPressed(yoda);
  createEnemies();  
 // stormArr.move();
  //stormArr.show();
}

/*
window.onload = () => {
    document.getElementById("start-button").onclick = () => {
        startGame();
    };
    document.getElementById("restart-button").onclick = () => {
        startGame
    };
};

function startGame() {
    const gameIntro = document.querySelector("intro");
    gameIntro.style.display = "none";

    const gameOver = document.querySelector("over");
    gameOver.style.display = "none";

    const gameBoard = document.getElementById("board");
    bottomOfBoard.style.display = "flex";
    loop()
}
*/
