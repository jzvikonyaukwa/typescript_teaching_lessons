"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewCustomer = void 0;
var num = 0.0;
var str = "string";
var bool = true;
var sportsTwo = ["Golf", "Cricket", "Tennis"];
sportsTwo.push("Baseball");
sportsTwo.push("Futbol");
for (var i = 0; i < sportsTwo.length; i++) {
    console.log(sportsTwo[i]);
}
for (var _i = 0, sportsTwo_1 = sportsTwo; _i < sportsTwo_1.length; _i++) {
    var tempSports = sportsTwo_1[_i];
    console.log(tempSports);
}
// public
// protected
// private
var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    Customer.prototype.getFirstName = function () {
        return this.firstName;
    };
    Customer.prototype.getLasttName = function () {
        return this.lastName;
    };
    Customer.prototype.setFirstName = function (firstName) {
        this.firstName = this.firstName;
    };
    Customer.prototype.setLastName = function (lastName) {
        this.lastName = this.lastName;
    };
    Object.defineProperty(Customer.prototype, "_getFirstName", {
        get: function () {
            return this._firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "_getLastName", {
        get: function () {
            return this._firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "_setFirstName", {
        set: function (firstName) {
            this._firstName = firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "_setLastName", {
        set: function (lastName) {
            this._lastName = lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("Jotham", "Zvikonyaukwa");
console.log("".concat(myCustomer.getFirstName, " ").concat(myCustomer.getLasttName));
// Updated Way
var NewCustomer = /** @class */ (function () {
    function NewCustomer(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(NewCustomer.prototype, "_getFirstName", {
        get: function () {
            return this._firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewCustomer.prototype, "_getLastName", {
        get: function () {
            return this._firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewCustomer.prototype, "_setFirstName", {
        set: function (firstName) {
            this._firstName = firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewCustomer.prototype, "_setLastName", {
        set: function (lastName) {
            this._lastName = lastName;
        },
        enumerable: false,
        configurable: true
    });
    return NewCustomer;
}());
exports.NewCustomer = NewCustomer;
