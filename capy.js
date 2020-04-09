class Capy {
  constructor() {
    this.img = createImg('assets/capy.gif', 'Capy');
    this.vy = 0;
    this.gravity = 4;
    this.r = 65;
    this.x = this.r;
    this.y = height - this.r;
    this.width = 51;
    this.height = 34;
  }

  jump() {
    if (this.y == height - this.r) this.vy = -25;
    console.log(this.width);
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    // this.y = constrain(this.y, 100, 237);
    if (this.y > height - this.r) {
      this.y = height - this.r;
    }
  }

  display() {
    this.img.position(this.x, this.y);
  }
}
