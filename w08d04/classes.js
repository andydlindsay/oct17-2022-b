// const Rectangle = class {};
class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  area() {
    return this.width * this.length;
  }
}

const rectangle = new Rectangle(2, 3);

console.log(rectangle);
console.log(rectangle.area());

class Prism extends Rectangle {
  constructor(width, length, height) {
    super(width, length);

    this.height = height;

    this.volume = this.volume.bind(this);
  }

  volume() {
    return this.area() * this.height;
  }

  area() {
    console.log('did it call this one???');
  }
}

const prism = new Prism(3, 4, 5);

// console.log(prism);
// console.log(prism.volume());
console.log(prism.area());

const volume = prism.volume;
volume();
