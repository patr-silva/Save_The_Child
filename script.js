let yoda;
let bg;
let storm;
let stormArr = [];
let frogArr = [];
const topOfBoard = 50;
const bottomOfBoard = 330;
let score = 0;

//Screens
let initialScreen = document.querySelector("#initial-screen");
let gameScreen = document.querySelector("#game-screen");
let finalScreen = document.querySelector("#final-screen");

//Buttons
let startButton = document.querySelector("#start-button");
let tryAgainButton = document.querySelector("#try-again-button");

//Values
let scoreSpan = document.querySelector("#score-value");
let finalScoreSpan = document.querySelector("#final-score-value");

function preload() {
  bg = loadImage("./IMAGES/2109.w023.n001.1040B.p1.1040.jpg");
  yodaImg = loadImage("./IMAGES/BY3.png");
  stormImg = loadImage("./IMAGES/Stormtrooper 2.png");
  frogImg = loadImage(
    "./IMAGES/—Pngtree—frog vector illustration design_4368100.png"
  );
}

class BabyYoda {
  constructor() {
    this.x = 20;
    this.y = 360;
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
    this.x -= 6;
  }

  offscreen() {
    if (this.x < -this.width) {
      return true;
    }
  }
}

class Frogs {
  constructor() {
    this.x = 1400;
    this.y = 400;
    this.width = 85;
    this.height = 80;
  }
  show() {
    image(frogImg, this.x, this.y, this.width, this.height);
  }

  move() {
    this.x -= 6;
  }
}

function creatObstacles() {
  stormArr.forEach(function (obstacle) {
    obstacle.show();
    obstacle.move();
    if (collision(yoda, obstacle)) {
      gameOver();
    }

    if (obstacle.offscreen()) {
      stormArr.splice(obstacle, 1);
    }
  });
}

function creatFrogs() {
  frogArr.forEach(function (frog) {
    frog.show();
    frog.move();
    if (collision(yoda, frog)) {
      score++;
      scoreSpan.innerText = score;
      frogArr.splice(frog, 1);
    }
  });
}


function collision(element1, element2) {
  if (
    element1.x < element2.x + element2.width &&
    element1.x + element1.width >= element2.x &&
    element1.y < element2.y + element2.height &&
    element1.height + element1.y > element2.y
  ) {
    return true;
  }
}

function avoidIntersection() {
  for (let i = 0; i < stormArr.length; i++) {
    for (let j = 0; j < frogArr.length; j++) {
      if (collision(stormArr[i], frogArr[j])) {
        stormArr.splice(stormArr[i], 1);
      }
    }
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
  let canvas = createCanvas(1400, 500);
  canvas.parent("#game-screen");
  noLoop();
  yoda = new BabyYoda();
}

function draw() {
  background(bg);
  yoda.show();
  keyPressed(yoda);
  if (frameCount % 300 === 0) {
    stormArr.push(new Enemies());
  }
  if (frameCount % 475 === 0) {
    frogArr.push(new Frogs());
  }
  avoidIntersection();
  creatObstacles();
  creatFrogs();
}


function startGame() {
    
  initialScreen.style.display = "none";

  finalScreen.style.display = "none";

  gameScreen.style.display = "flex";

  loop()
}


function gameOver(){

  noLoop(); 

  initialScreen.style.display = "none";

  gameScreen.style.display = "none";

  finalScreen.style.display = "flex";

  finalScoreSpan.innerText = score;

  tryAgainButton.onclick = () => {

    score = 0;

    scoreSpan.innerText = score;

    initialScreen.style.display = "none";

    finalScreen.style.display = "none";
  
    gameScreen.style.display = "flex";


    stormArr = [];
    frogArr = [];

    creatObstacles();

    creatFrogs();

    loop();

  };
}


window.onload = () => {

  initialScreen.style.display = "flex";

  gameScreen.style.display = "none";

  finalScreen.style.display = "none";

  startButton.onclick = () => {
    startGame();
  };
   
};




