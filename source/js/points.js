class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get X() {
    return this.x;
  }

  get Y() {
    return this.y;
  }

  // set x(newX) {
  //   this.x = newX;
  // }
  //
  // set y(newY) {
  //   this.y = newY;
  // }
}

let point = new Point(10, 15);

console.log('x = ' + point.X);
console.log('y = ' + point.Y);

point.x = 20;
point.y = 30;

console.log('New values setted:');
console.log('x = ' + point.x);
console.log('y = ' + point.y);
