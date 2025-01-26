let greet =() =>{
    console.log("This is a function");
}

let newGreet : Function;
newGreet =() :void => {
    console.log("this is new greet");
}

let addFunction =(a:number,b:number): number =>{
    return a+b;
}

console.log(addFunction(5,10));

let addFunction2 =(a:number,b:number, c:number| string =10): number =>{
    const cAsNumber = typeof c === 'string' ? parseFloat(c) : c;
    return a + b + cAsNumber;
}

console.log(addFunction(5,10));

let addFunction3 = (a: number, b: number, c: number | string = 10): string => {
    return a.toString() + b.toString() + c.toString();
};

let addFunction4 = (a: number, b: number, c: number | string = 10): number | string => {
    if (typeof c === 'string') {
        return a.toString() + b.toString() + c;
    } else {
        return a + b + c;
    }
};

console.log(addFunction2(1, 2));
console.log(addFunction2(1, 2, "3"));
console.log(addFunction2(1, 2, 3)); 