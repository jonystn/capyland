class Game {
  constructor() {
    this.jaguars = [];
    this.jaguarsIMGS = [];
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
    this.capy.setup();
  }

  display() {
    clear();

    this.background.display();
    this.capy.display();
    this.capy.move();

    if (random(1) < 0.005) {
      this.jaguars.push(new Jaguar());
    }

    // console.log(this.jaguars);

    this.jaguars.forEach((j) => {
      j.move();
      j.display();
    });
  }
}
