class Capy {
  constructor() {
    this.img = createImg('assets/capy.gif', 'Capy');
    this.vy = 0;
    this.gravity = 5;
  }
  setup() {
    this.r = 50;
    this.x = this.r;
    this.y = height - this.r;
  }

  jump() {
    if (this.y == 237) this.vy = -35;
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 100, 237);
  }

  display() {
    this.img.position(this.x, this.y);
  }
}
