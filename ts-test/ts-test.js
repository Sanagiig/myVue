var listObj = {
    name: 'Danile',
    age: 31
};
var a = [1, 2, 3];
var b = a;
b[1] = 3;
function createSquare(config) {
    return {
        color: 'red',
        width: 12,
        qq: 123
    };
}
var myArray = ["Alice", "Bob"];
myArray.push('123'); // error!
alert(myArray);
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick tock");
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
// 函数
function buildName(firstName, lastName) {
    if (firstName === void 0) { firstName = 'bob'; }
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
buildName();
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
// 重载
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
// 泛型
function identity(arg, arg2) {
    return [arg, arg2];
}
// 枚举
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
    Enum[Enum["B"] = 1] = "B";
    Enum[Enum["C"] = 2] = "C";
    Enum[Enum["D"] = 1] = "D";
})(Enum || (Enum = {}));
var q = Enum.A;
var nameOfA = Enum[q]; // "A"
// 类型推断
window.onmousedown = function (mouseEvent) {
    console.log(mouseEvent.button); //<- Error
};
