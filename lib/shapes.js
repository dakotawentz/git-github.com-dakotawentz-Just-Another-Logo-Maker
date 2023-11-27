class Shape {
    constructor() {
      this.color = "";
    }setColor(color) {
      this.color = color;
    }
}

class Circle extends Shape {
  render() {
    // Returns polygon with color input
    return `<circle cx="25" cy="75" r="20" fill="${this.color}" />`;
  }
}
class Triangle extends Shape {
  render() {
    // Returns polygon with color input
    return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
  }
}
class Square extends Shape {
  render() {
    // Returns polygon with color input
    return `<rect x="10" y="10" width="200" height="200" fill="${this.color}" />`;
  }
}


module.exports = { Circle, Triangle, Square };