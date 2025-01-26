"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewCustomer = void 0;
let num = 0.0;
let str = "string";
let bool = true;
let sportsTwo = ["Golf", "Cricket", "Tennis"];
sportsTwo.push("Baseball");
sportsTwo.push("Futbol");
for (let i = 0; i < sportsTwo.length; i++) {
    console.log(sportsTwo[i]);
}
for (let tempSports of sportsTwo) {
    console.log(tempSports);
}
// public
// protected
// private
class Customer {
    constructor(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    getFirstName() {
        return this.firstName;
    }
    getLasttName() {
        return this.lastName;
    }
    setFirstName(firstName) {
        this.firstName = this.firstName;
    }
    setLastName(lastName) {
        this.lastName = this.lastName;
    }
}
let myCustomer = new Customer("Jotham", "Zvikonyaukwa");
console.log(`${myCustomer.getFirstName} ${myCustomer.getLasttName}`);
// Updated Way
class NewCustomer {
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get _getFirstName() {
        return this._firstName;
    }
    get _getLastName() {
        return this._firstName;
    }
    set _setFirstName(firstName) {
        this._firstName = firstName;
    }
    set _setLastName(lastName) {
        this._lastName = lastName;
    }
}
exports.NewCustomer = NewCustomer;
