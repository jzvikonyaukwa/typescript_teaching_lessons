import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
let myShape= new Shape(10,11);
console.log(myShape.getInfo());

let myCircle= new Circle(10,11,18);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(13,13,13,13);
console.log(myRectangle.getInfo());

let myShapes:Shape[] =[];
//let myShapes:Shape[] =[myCircle,myRectangle];
myShapes.push(myCircle);
myShapes.push(myRectangle);

for(let shape of myShapes){
    console.log(shape.getInfo())
}


