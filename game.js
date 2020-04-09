class Game {
  constructor() {
    this.jaguars = [];
    this.jaguarsIMGS = [];
    this.start = false;
    this.finished = false;
  }

  init() {
    for (let i = 0; i <= 7; i++) {
      this.jaguarsIMGS.push(
        loadImage(`assets/jaguar/frame_${i}_delay-0.06s.png`)
      );
    }
    this.background = new Background();
    this.capy = new Capy();
    this.jag = loadImage('./assets/jaguar/frame_0_delay-0.06s.png');
  }

  setup() {
    // this.capy.setup();
  }

  display() {
    clear();

    this.background.display();
    this.capy.display();
    this.capy.move();
    if (frameCount % 20 === 0) {
      if (random(1) < 0.4) {
        this.jaguars.push(new Jaguar());
      }
    }
    // console.log(this.jaguars);

    this.jaguars.forEach((j) => {
      j.move();
      j.display();
      if (j.checkCollision(this.capy)) {
        console.log('damn you dead bru');
        this.finished = true;
      }
      // if (this.jaguar.checkCollision(capy)) {
      //   this.finished = true;
      // }
    });
    if (this.finished) {
      console.log('finishs');
      fill('blue');
      textSize(20);
      text('GAME OVER', 100, 30);
      noLoop();
    }

    /*     if (this.finished) {
    
    } */
  }
}
