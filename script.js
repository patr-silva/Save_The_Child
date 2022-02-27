let yoda;
let bg;
let storm;
let stormArr = [];
const topOfBoard = 50;
const bottomOfBoard = 330;
let score = 0;


function preload() {
  bg = loadImage("./IMAGES/2109.w023.n001.1040B.p1.1040.jpg");
  yodaImg = loadImage("./IMAGES/BY2.png");
  stormImg = loadImage("./IMAGES/Stormtrooper.png");
}

class BabyYoda {
  constructor() {
    this.x = 20;
    this.y = 330;
    this.speedY = 0;
    this.gravity = 3;
    this.width = 140;
    this.height = 120;
  }

  show() {
    image(yodaImg, this.x, this.y, this.width, this.height);
  }
}

class Enemies {
  constructor() {
    this.x = 1400;
    this.y = 305;
    this.width = 115;
    this.height = 190;
  }

  show() {
    image(stormImg, this.x, this.y, this.width, this.height);
  }

  move() {
    this.x -= 3;
  }

  hits(target) {
    if (
      target.x < this.x + this.width &&
      target.x + target.width >= this.x &&
      target.y < this.y + this.height &&
      target.height + target.y > this.y
    ) {
      return true;
    }
  }

  offscreen() {
    if (this.x < -this.width) {
      return true;
    }
  }
}

function createEnemies() {
  let randomNumber = Math.random();
  if (randomNumber < 0.005) {
    stormArr.push(new Enemies());
  }
}

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

function setup() {
  createCanvas(1400, 500);
 // canvas.parent("#game-screen")
  yoda = new BabyYoda();
}

function draw() {
  background(bg);
  yoda.show();
  keyPressed(yoda);
  createEnemies();
  stormArr.forEach(function (obstacle) {
    obstacle.show();
    obstacle.move();
    if (obstacle.hits(yoda)) {
      noLoop();
    }
    if (obstacle.offscreen()) {
      stormArr.splice(obstacle, 1);
      score++;
    }
  });
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
