let game = new Game();
function preload() {
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
  frameRate(40);
  game.display();
  /*   console.log(game.random);
   */
}

//
function keyPressed() {
  let spaceBarCode = 32;
  if (keyCode === spaceBarCode) {
    game.capy.jump();
    console.log('please jump');
  }
}
