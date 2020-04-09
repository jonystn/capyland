let game = new Game();
let score = 0;
let intro;

function preload() {
  game.init();
  intro = loadImage('assets/intro.png');
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
    fill('#112024');
    textSize(20);
    text(`Score ${score}`, 10, 30);
  } else {
    image(intro, 0, 0);
  }
}

//
function keyPressed() {
  let spaceBarCode = 32;
  if (keyCode === spaceBarCode) {
    game.capy.jump();
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
