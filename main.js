let game = new Game();
let score = 00000;
let intro;
let jumpSound;

function preload() {
  soundFormats('mp3');
  jumpSound = loadSound('assets/sounds/Jump.mp3');
  intro = loadImage('assets/intro.png');
  game.init();
  /*  console.log(game);
  console.log("Hello"); */
}
function setup() {
  createCanvas(550, 304);
  game.setup();

  /*  console.log(game.random); */
}
function draw() {
  if (game.start === true) {
    if (frameCount % 3 === 0) {
      score++;
    }
    frameRate(40);
    game.display();
    fill('#412b0f');
    textFont('VT323');
    textSize(25);
    text(`SCORE 0${score}`, 10, 30);
  } else {
    image(intro, 0, 0);
  }
}

//
function keyPressed() {
  let spaceBarCode = 32;
  if (keyCode === spaceBarCode && game.finished === false) {
    game.capy.jump();
    jumpSound.setVolume(0.1);
    jumpSound.play();
    // console.log('please jump');
  }
  if (keyCode === 13) {
    game.start = true;
  }

  if (keyCode === 13 && game.finished === true) {
    window.location.reload();
    game.start = true;
  }
}

function mousePressed() {
  game.capy.jump();
  jumpSound.setVolume(0.1);
  jumpSound.play();

  if (game.finished === true) {
    window.location.reload();
    game.start = true;
  }

  if (game.start === false) {
    game.start = true;
  }
}
