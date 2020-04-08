class Jaguar {
  constructor() {
    this.images = game.jaguarsIMGS;
    this.index = 0;
    this.r = width + 100;
    this.x = width;
    this.y = height - this.r;
  }

  move() {
    this.x -= 11;
  }

  display() {
    // this.move();
    if (frameCount % 2 === 0) {
      this.index++;
    }

    image(
      this.images[this.index % this.images.length],
      this.x,
      205,
      this.width,
      this.height
    );
  }
}
