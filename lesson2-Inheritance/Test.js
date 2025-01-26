"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new Shape_1.Shape(10, 11);
console.log(myShape.getInfo());
let myCircle = new Circle_1.Circle(10, 11, 18);
console.log(myCircle.getInfo());
let myRectangle = new Rectangle_1.Rectangle(13, 13, 13, 13);
console.log(myRectangle.getInfo());
let myShapes = [];
//let myShapes:Shape[] =[myCircle,myRectangle];
myShapes.push(myCircle);
myShapes.push(myRectangle);
for (let shape of myShapes) {
    console.log(shape.getInfo());
}
