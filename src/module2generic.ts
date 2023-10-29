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
