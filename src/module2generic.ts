let arr: Array<string | number> = [];

//Буде помилка:
//arr = ["str", 10, true];
arr = ["str", 10];

//PROMISE

const promise: Promise<string> = new Promise((resolve) => {
  setInterval(() => {
    resolve("Done!");
  }, 1000);
});

promise.then((data) => {
  console.log(data);
});

///Generic function/method

function identity<T>(arg: T): T {
  return arg;
}
let output1 = identity<string>("myString");
let output2 = identity<number>(100);
let output3 = identity("myString");
let output4 = identity(100);

///////////////*/////////////

function firstElement<T>(arr: T[]): T {
  return arr[0];
}

let numbersArr = [1, 2, 3, 4, 5];
let firstNum = firstElement(numbersArr);

let strings = ["a", "b", "c", "d"];
let firstStr = firstElement(strings);

///////////////*/////////////

// type Pers = {
//   name: string;
// };

// type AdditionFields = {
//   age: number;
// };

// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign({}, objA, objB);
// }

// const merged = merge<Pers, AdditionFields>({ name: "Alisa" }, { age: 28 });

// merged.name;

/////////////EXTENDS

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const merged = merge({ name: "Alisa" }, { age: 28 });

merged.name;

////////////////////
type Length = {
  length: number;
};

function getLength<T extends Length>(str: T) {
  return str.length;
}

getLength("text");
getLength([1, 2, 3]);
// getLength(100); // Error: Argument of type 'number' is not assignable to parameter of type 'ILength'

function arrayLogger<T extends Array<string>>(array: T): void {
  array.forEach((item) => console.log(item));
}

arrayLogger(["Hello", "World"]); // Ok
// arrayLogger([1, 2, 3]); // Error

/////////////////     keyof       ////////////////

type Actor = {
  name: string;
  age: number;
  location: string;
};
type ActorKeys = keyof Actor; // 'name' | 'age' | 'location'

//////
type PersonAct = {
  name: string;
  age: number;
  location: string;
};

type PersonKeys = keyof PersonAct; // 'name' | 'age' | 'location'

function getPersonInfo(person: PersonAct, key: PersonKeys) {
  return person[key];
}

const john: PersonAct = {
  name: "John",
  age: 25,
  location: "NY",
};

console.log(getPersonInfo(john, "age")); // 25
console.log(getPersonInfo(john, "name")); // 'John'
// console.log(getPersonInfo(john, "job")); // Error: Argument of type '"job"' is not assignable to parameter of type 'PersonKeys'.

function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

extractValue({ name: "John" }, "name");

//////////////   Generic Classes   ////////

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Hello");
textStorage.addItem("World");
console.log(textStorage.getItems()); // ['Hello', 'World']
// textStorage.addItem(1); // Error

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
console.log(numberStorage.getItems()); // [1, 2]
// numberStorage.addItem('TEXT'); // Error

/////////////
class KeyValuePair<TKey, TValue> {
  constructor(private key: TKey, private value: TValue) {}

  getKey(): TKey {
    return this.key;
  }

  getValue(): TValue {
    return this.value;
  }
}

const pair1 = new KeyValuePair("name", "Alice");
console.log(pair1.getKey()); // 'name'
console.log(pair1.getValue()); // 'Alice'

const pair2 = new KeyValuePair(1, true);
console.log(pair2.getKey()); // 1
console.log(pair2.getValue()); // true

///////////////////          Utility Types   ///////////////////

//////////Partial<T>//////////////

type UserProf = {
  id: number;
  name: string;
  email: string;
  registered: boolean;
};

function createUser(data: Partial<UserProf>): UserProf {
  const defaultUser: UserProf = {
    id: Date.now(),
    name: "",
    email: "",
    registered: false,
  };

  return { ...defaultUser, ...data };
}

const newUser = createUser({ name: "Alice", email: "alice@example.com" });

console.log(newUser);
