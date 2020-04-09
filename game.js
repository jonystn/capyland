let gameover;

class Game {
  constructor() {
    this.jaguars = [];
    this.jaguarsIMGS = [];
    this.capyIMGS = [];
    this.start = false;
    this.finished = false;
  }

  init() {
    for (let i = 0; i <= 7; i++) {
      this.jaguarsIMGS.push(
        loadImage(`assets/jaguar/frame_${i}_delay-0.06s.png`)
      );
    }
    for (let i = 0; i <= 1; i++) {
      this.capyIMGS.push(loadImage(`assets/capy/capy${i}.png`));
    }
    this.background = new Background();
    this.capy = new Capy();
    gameover = loadImage('assets/gameover.png');
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

    this.jaguars.forEach((j) => {
      j.move();
      j.display();
      if (j.checkCollision(this.capy)) {
        console.log('damn you dead bru');
        this.finished = true;
      }
    });

    if (this.finished) {
      image(gameover, 0, 0);
      noLoop();
    }
  }
}
