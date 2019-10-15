let listObj:{name:string,age:number} = {
    name: 'Danile',
    age: 31
  };
let a:ReadonlyArray<number> = [1,2,3];
let b = a as number[]
b[1] = 3

// 可选属性
interface SquareConfig {
  color?: string;
  width?: number;
  [xx: string]: any;
}

function createSquare(config: SquareConfig): SquareConfig {
  return {
    color: 'red',
    width: 12,
    qq:123
  };
}


// 接口限制
interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
(<string[]>myArray).push('123'); // error!
alert(myArray)


// 限制构造函数

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick(a:string):any;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
      console.log("beep beep");
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
      console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);


// 混合类型
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) { };
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

// 函数
function buildName(firstName: string = 'bob', lastName = "Smith") {
  return firstName + " " + lastName;
}
buildName()


// this
interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  // NOTE: The function now explicitly specifies that its callee must be of type Deck
  createCardPicker: function() {
      return () => {
          let pickedCard = Math.floor(Math.random() * 52);
          let pickedSuit = Math.floor(pickedCard / 13);

          return {suit: this.suits[pickedSuit], card: pickedCard % 13};
      }
  }
}

// 重载
let suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x:any): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

// 泛型
function identity<T1,T2>(arg: T1,arg2:T2): [T1,T2] {
  return [arg,arg2];
}

// 枚举
enum Enum {
  A,
  B,
  C,
  D=1
}
let q = Enum.A;
let nameOfA = Enum[q]; // "A"

// 类型推断
window.onmousedown = function(mouseEvent) {
  console.log(mouseEvent.button);  //<- Error
};