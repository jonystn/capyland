class Background {
  constructor() {
    this.random = 0;
    this.imgs = [
      { src: loadImage('assets/background/1.png'), x: 0, speed: 0 },
      { src: loadImage('assets/background/2.png'), x: 0, speed: 1 },
      { src: loadImage('assets/background/3.png'), x: 0, speed: 5 },
      { src: loadImage('assets/background/4.png'), x: 0, speed: 3 },
    ];
  }
  move(img) {
    img.x -= img.speed;

    // image(we get the source of image, x coordinate, y coordinate )
    image(img.src, img.x, 0);
    image(img.src, img.x + 1100, 0);
    if (img.x <= -1100) {
      img.x = 0;
    }
  }
  display() {
    this.imgs.forEach((image) => {
      this.move(image);
    });
  }
}
