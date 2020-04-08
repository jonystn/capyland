// class Obstacles {
//   constructor() {
//     this.height = 25;
//     this.width = 25;
//     this.x = width;
//     //GIVING RANDOM NUMBER TO THE this.y
//     this.y = random(0, height - this.height);
//   }
//   checkCollision(capy) {
//     let left = this.x;
//     let right = this.x + this.width;
//     let capyLeft = capy.x;
//     let capyRight = capy.x + capy.width;

//     let top = this.y;
//     let bottom = this.y + this.height;

//     let capyTop = capy.y;
//     let capyBottom = capy.y + capy.height;

//     let xCollision =
//       (left > capyLeft && left < capyRight) ||
//       (right > capyLeft && right < capyRight);

//     let yCollision =
//       (top > capyTop && top < capyBottom) ||
//       (bottom > capyTop && bottom < capyBottom);

//     let collision = xCollision && yCollision;
//     return collision;
//   }

//   display() {
//     //Moving the OBSTACLE TO THE LEFT
//     this.x--;
//     fill('red');

//     rect(this.x, this.y, 20, 20);
//   }
// }
