class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        this._radius = value;
    }

    get diameter() {
        return this._radius*2
    }

    area() {
        return Math.PI *this._radius**2
    }

    length() {
        return 2*Math.PI*this._radius
    }
}

const MyCircle = new Circle(4);
MyCircle.radius = 10
console.log(MyCircle.radius,MyCircle.diameter,MyCircle.area,MyCircle.length);

