// boolean
let isDone: boolean = false;

// number
let decimal: number = 6;
let float: number = 3.14;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// string
let color: string = "yellow";

// null
let empty: null = null;

//undefined
let notParam: undefined = undefined;

function foo(num: number, str: string, bool: boolean, empty: null) {
  //Some logic
}

function foo1(num = 10, str = "Some string", bool = true, empty = null) {
  // Some logic
}

// object
const obj: object = {};
const obj1: {} = {};

let user: {
  name: string;
  age: number;
};

type User = {
  name: string;
  age: number;
};

let user1: User = {
  name: "Kate",
  age: 36,
};

let userRoman: User = {
  name: "Roman",
  age: 3,
};

interface Owner {
  name: string;
  age: number;
}

let owner: Owner = {
  name: "Bob",
  age: 40,
};

// array
let arrString: string[];
arrString = ["5", "hello", "6", "7"];

let arrNumber: number[];
arrNumber = [1, 10, 58, 74];

let matrix: number[][] = [
  [1, 2],
  [3, 4],
];

let mixed: (number | string)[] = [1, "two"];

// generic
let numbers: Array<number> = [1, 2, 3, 4, 5];

let users: {
  name: string;
  age: number;
}[] = [
  { name: "Tom", age: 30 },
  { name: "Jack", age: 25 },
  { name: "Alice", age: 32 },
];

type Book = {
  title: string;
  quantity: number;
};

let books: Book[] = [
  { title: "Ocean", quantity: 5 },
  { title: "Lucky", quantity: 4 },
  { title: "Secret", quantity: 1 },
];

//any
let arrAny: any[];
arrAny = [4, "Secret", "one", { title: "second", number: 1 }, [1, 4, 7]];

//unknown
let notSure: unknown = 4;
notSure = "maybe a string instead";
notSure = false;

let num: number;
// num = notSure;

//Tuple
let tupleType: [string, boolean];
tupleType = ["hello", true];
// tupleType = [true, "hello"];  Error. Неправильні типи
// tupleType = ['hello', true, true];  Error. Більше значень ніж у tuple

let date: [number, number, number];
date = [7, 11, 2023]; // OK

let tuple: [string, ...number[]];
tuple = ["hello", 42, 100, 200]; // OK
