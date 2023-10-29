// boolean
let isDone = false;
// number
let decimal = 6;
let float = 3.14;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
// string
let color = "yellow";
// null
let empty = null;
//undefined
let notParam = undefined;
function foo(num, str, bool, empty) {
    //Some logic
}
function foo1(num = 10, str = "Some string", bool = true, empty = null) {
    // Some logic
}
// object
const obj = {};
const obj1 = {};
let user;
let user1 = {
    name: "Kate",
    age: 36,
};
let userRoman = {
    name: "Roman",
    age: 3,
};
let owner = {
    name: "Bob",
    age: 40,
};
// array
let arrString;
arrString = ["5", "hello", "6", "7"];
let arrNumber;
arrNumber = [1, 10, 58, 74];
let matrix = [
    [1, 2],
    [3, 4],
];
let mixed = [1, "two"];
// generic
let numbers = [1, 2, 3, 4, 5];
let users1 = [
    { name: "Tom", age: 30 },
    { name: "Jack", age: 25 },
    { name: "Alice", age: 32 },
];
let books = [
    { title: "Ocean", quantity: 5 },
    { title: "Lucky", quantity: 4 },
    { title: "Secret", quantity: 1 },
];
//any
let arrAny;
arrAny = [4, "Secret", "one", { title: "second", number: 1 }, [1, 4, 7]];
//unknown
let notSure = 4;
notSure = "maybe a string instead";
notSure = false;
let num;
// num = notSure;
//Tuple
let tupleType;
tupleType = ["hello", true];
// tupleType = [true, "hello"];  Error. Неправильні типи
// tupleType = ['hello', true, true];  Error. Більше значень ніж у tuple
let date;
date = [7, 11, 2023]; // OK
let tuple;
tuple = ["hello", 42, 100, 200]; // OK
//enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
const person = {
    role: Role.ADMIN,
};
if (person.role === Role.ADMIN) {
    console.log("Role: ", Role.ADMIN);
}
//const enum
var HttpCodes;
(function (HttpCodes) {
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
})(HttpCodes || (HttpCodes = {}));
const status1 = 200 /* HttpCodes.OK */;
//Union Type
let mixedType;
mixedType = "string";
mixedType = 10;
mixedType = true;
// mixedType = {}; //error
function combine(param1, param2) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}
let pet;
// type guard function
function isDog(pet) {
    return "bark" in pet;
}
pet = { legs: 4, bark: () => { } };
// Перевіряємо, чи є наш вихованець собакою перед тим, як використовувати метод bark
if (isDog(pet)) {
    pet.bark();
}
else {
    pet = {
        fins: 2,
        swim: () => {
            // реалізація методу
        },
    };
    pet.swim(); // TypeScript знає, що якщо pet не Dog, то це має бути Fish
}
const ceo = {
    name: "Alice",
    id: 1,
    employees: [
        {
            name: "Bob",
            id: 2,
        },
    ],
};
let value;
value = 1;
value = 2;
let answer;
answer = "yes";
answer = "no";
function getButtonStyle(size) {
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
function greet() {
    return "Hello, world!";
}
let result = greet();
//синтаксис для стрілочних ф-цій
const greet2 = () => {
    return "Hello, world!";
};
let result1 = greet();
const getUserNames = (users) => {
    return users.map((user) => user.name);
};
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
];
let result2 = getUserNames(users);
console.log(result2); // ['Alice', 'Bob', 'Charlie']
//Void
function logMessage(message) {
    console.log(message);
}
logMessage("Hello, world!");
//
function doSomething(callback) {
    callback();
}
doSomething(() => {
    console.log("Callback function!");
});
//Never
// Функція, яка завжди викидає помилку
function throwError(message) {
    throw new Error(message);
}
// Функція з нескінченним циклом
function infiniteLoop() {
    while (true) { }
}
//Function Type
let myFunc;
myFunc = (first, second) => {
    console.log(`First: ${first}, Second: ${second}`);
};
myFunc("Hello", 42); // Висновок: "First: Hello, Second: 42"
function calc(param1, param2, callback) {
    console.log("Result:", callback(param1, param2));
}
// Приклади використання calc з різними функціями зворотного виклику
calc(1, 1, (num1, num2) => num1 + num2);
calc(10, 5, (num1, num2) => num1 - num2);
const userWithCoords = {
    id: 1,
    name: "Alice",
    coords: [10, 20],
};
//
var AnimalIds;
(function (AnimalIds) {
    AnimalIds["cat"] = "cat";
    AnimalIds["dog"] = "dog";
    AnimalIds["fish"] = "fish";
})(AnimalIds || (AnimalIds = {}));
let cat = {
    meow: () => "Meow! I am a cat",
};
let dog = {
    bark: () => "Woof! I am a dog",
};
let fish = {
    swim: () => undefined,
};
//Optional property
//Опціональні параметри та властивості
function greet3(name) {
    if (name) {
        return `Hello, ${name}!`;
    }
    else {
        return `Hello!`;
    }
}
console.log(greet3("Alice")); // Виводить: Hello, Alice!
console.log(greet3()); // Виводить: Hello!
const alice = { name: "Alice", age: 27 };
const bob = { name: "Bob" };
let dog1 = {
    name: "Fido",
    age: 5,
};
let bird = {
    name: "Fido",
    age: 5,
};
class MyLeon {
    constructor() {
        this.name = "Fido";
        this.bark = "Woof!";
    }
}
class OtherLeon {
}
// function combine1(a: ComplexType, b: ComplexType) {
//   return a + b;
// }  Тут ми отримаємо помилку, оскільки TypeScript не знає, як працювати з цими типами.
function combine2(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printDetails(obj) {
    console.log(`Name: ${obj.name}`);
    if ("privileges" in obj) {
        console.log(`Privileges: ${obj.privileges.join(", ")}`);
    }
    if ("startDate" in obj) {
        console.log(`Start Date: ${obj.startDate}`);
    }
}
///////////////////////instanceof/////////////////////
class Car {
    drive() {
        console.log("Driving a car...");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount) {
        console.log(`Loading cargo: ${amount}`);
    }
}
const carInstance = new Car();
const truckInstance = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(carInstance);
useVehicle(truckInstance);
function isDog2(animal) {
    return "bark" in animal;
}
function letAnimalTalk(animal) {
    if (isDog2(animal)) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
function isEmployee(staff) {
    return staff.startDate !== undefined;
}
const staffMember = { name: "Bob", startDate: new Date() };
if (isEmployee(staffMember)) {
    console.log(`Welcome on board, ${staffMember.name}! Your start date is ${staffMember.startDate}`);
}
////////////Type Casting/////////////////
let someValue = "this is a string";
let strLength1 = someValue.length;
// or
let strLength2 = someValue.length;
const userPers = {
    name: "Alex",
    gender: "MAN",
    country: "Ukraine",
};
let usersGroup = {};
let userGr = {
    id: "1",
    name: "Alex",
    email: "alex@example.com",
};
usersGroup[userGr.id] = userGr;
//////////////////
//# sourceMappingURL=module2.js.map