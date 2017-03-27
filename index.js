// Rectangle constructor
function Rectangle(sides, width, height) {
  this.sides = sides;
  this.width = width;
  this.height = height;
  this.area = function() {
    return this.width * this.height;
  }
  this.perimeter = function() {
    return (this.width + this.height) * 2;
  }
}

// Square constructor
function Square(sides, length) {
  Rectangle.call(this, sides, length, length);
}

var rect = new Rectangle(4, 3, 5);
var square = new Square(4, 2);

rect.area();
square.area();
