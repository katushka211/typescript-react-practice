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

let users1: {
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

//enum
enum Role {
  ADMIN,
  USER,
}
const person = {
  role: Role.ADMIN,
};
if (person.role === Role.ADMIN) {
  console.log("Role: ", Role.ADMIN);
}

//const enum
const enum HttpCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
}
const status1 = HttpCodes.OK;

//Union Type
let mixedType: string | number | boolean;
mixedType = "string";
mixedType = 10;
mixedType = true;
// mixedType = {}; //error

function combine(param1: number | string, param2: number | string) {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

//union type з об'єктами
type Dog = {
  legs: 4;
  bark: () => void;
};

type Fish = {
  fins: 2;
  swim: () => void;
};

let pet: Dog | Fish;

// type guard function
function isDog(pet: Dog | Fish): pet is Dog {
  return "bark" in pet;
}

pet = { legs: 4, bark: () => {} };

// Перевіряємо, чи є наш вихованець собакою перед тим, як використовувати метод bark
if (isDog(pet)) {
  pet.bark();
} else {
  pet = {
    fins: 2,
    swim: () => {
      // реалізація методу
    },
  };
  pet.swim(); // TypeScript знає, що якщо pet не Dog, то це має бути Fish
}

//Intersection Type (символ &)
type Employee = {
  name: string;
  id: number;
};

type Manager = {
  employees: Employee[];
};

type CEO = Employee & Manager;

const ceo: CEO = {
  name: "Alice",
  id: 1,
  employees: [
    {
      name: "Bob",
      id: 2,
    },
  ],
};

//Literal Type
type OneOrTwo = 1 | 2;
let value: OneOrTwo;
value = 1;
value = 2;
// value = 3; // Error: Type '3' is not assignable to type 'OneOrTwo'.

type YesOrNo = "yes" | "no";
let answer: YesOrNo;
answer = "yes";
answer = "no";
// answer = 'maybe'; // Error: Type '"maybe"' is not assignable to type 'YesOrNo'.

type ButtonSize = "small" | "medium" | "large";

function getButtonStyle(size: ButtonSize) {
  switch (size) {
    case "small":
      return { fontSize: "10px", padding: "5px" };
    case "medium":
      return { fontSize: "14px", padding: "10px" };
    case "large":
      return { fontSize: "18px", padding: "15px" };
    default:
      return { fontSize: "14px", padding: "10px" };
  }
}

let myButtonStyle = getButtonStyle("medium"); // OK
// myButtonStyle = getButtonStyle('extra-large'); // Error: Argument of type '"extra-large"' is not assignable to parameter of type 'ButtonSize'.

//return TYPE

function greet(): string {
  return "Hello, world!";
}

let result = greet();

//синтаксис для стрілочних ф-цій
const greet2 = (): string => {
  return "Hello, world!";
};

let result1 = greet();

//
type User1 = {
  id: number;
  name: string;
};

const getUserNames = (users: User1[]): string[] => {
  return users.map((user) => user.name);
};

const users: User1[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

let result2 = getUserNames(users);
console.log(result2); // ['Alice', 'Bob', 'Charlie']

//Void
function logMessage(message: string): void {
  console.log(message);
}
logMessage("Hello, world!");

//
function doSomething(callback: () => void) {
  callback();
}
doSomething(() => {
  console.log("Callback function!");
});

//Never
// Функція, яка завжди викидає помилку
function throwError(message: string): never {
  throw new Error(message);
}
// Функція з нескінченним циклом
function infiniteLoop(): never {
  while (true) {}
}

//Function Type
let myFunc: (firstArg: string, secondArg: number) => void;

myFunc = (first: string, second: number) => {
  console.log(`First: ${first}, Second: ${second}`);
};

myFunc("Hello", 42); // Висновок: "First: Hello, Second: 42"
//

type CallbackType = (num1: number, num2: number) => number;

function calc(param1: number, param2: number, callback: CallbackType): void {
  console.log("Result:", callback(param1, param2));
}

// Приклади використання calc з різними функціями зворотного виклику
calc(1, 1, (num1, num2) => num1 + num2);
calc(10, 5, (num1, num2) => num1 - num2);

//Custom Types
type Coordinate = [number, number];

type UserWithCoords = {
  id: number;
  name: string;
  coords: Coordinate;
};

const userWithCoords: UserWithCoords = {
  id: 1,
  name: "Alice",
  coords: [10, 20],
};

//
enum AnimalIds {
  cat = "cat",
  dog = "dog",
  fish = "fish",
}

type Animal = {
  [AnimalIds.cat]: {
    meow: () => string;
  };
  [AnimalIds.dog]: {
    bark: () => string;
  };
  [AnimalIds.fish]: {
    swim: () => undefined;
  };
};

let cat: Animal[AnimalIds.cat] = {
  meow: () => "Meow! I am a cat",
};

let dog: Animal[AnimalIds.dog] = {
  bark: () => "Woof! I am a dog",
};

let fish: Animal[AnimalIds.fish] = {
  swim: () => undefined,
};
//Optional property
//Опціональні параметри та властивості
function greet3(name?: string) {
  if (name) {
    return `Hello, ${name}!`;
  } else {
    return `Hello!`;
  }
}

console.log(greet3("Alice")); // Виводить: Hello, Alice!
console.log(greet3()); // Виводить: Hello!

//
type Person = {
  name: string;
  age?: number; // age є опціональною властивістю
};

const alice: Person = { name: "Alice", age: 27 };
const bob: Person = { name: "Bob" }; // age не вказано, це припустимо
