class Jaguar {
  constructor() {
    this.images = game.jaguarsIMGS;
    this.index = 0;
    this.r = 73;
    this.x = width;
    this.y = height - this.r;
    this.width = 85;
    this.height = 61;
  }

  checkCollision(capy) {
    let left = this.x;
    let right = this.x + this.width;
    let capyLeft = capy.x;
    let capyRight = capy.x + this.width;

    // console.log(left, right);

    let top = this.y + 1;
    let bottom = this.y + this.height;

    let capyTop = capy.y;
    let capyBottom = capy.y + capy.height;

    let xCollision =
      (left > capyLeft && left < capyRight - 30) ||
      (right - 20 > capyLeft && right < capyRight - 30);

    let yCollision =
      (top > capyTop) & (top < capyBottom - 30) ||
      (bottom > capyTop && bottom < capyBottom - 30);

    let collision = xCollision && yCollision;

    return collision;
  }

  move() {
    this.x -= 13;
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

function top3(products, amounts, prices) {
  const rev = products.map(function (v, i, arr) {
    return { revenue: prices[i] * amounts[i], name: arr[i], index: i };
  });
  const sorted = rev.sort(function (a, b) {
    return b.revenue - a.revenue || a.index - b.index;
  });
  // return sorted;

  return sorted.slice(0, 3).map(function (item) {
    return item.name;
  });
}
