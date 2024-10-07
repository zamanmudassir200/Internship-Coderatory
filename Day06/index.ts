// ? Primitive Types:
let myname: string = "John";
let age: number = 30;
let isActive: boolean = true;
let value: null = null;
let undef: undefined = undefined;
let noReturn: void = undefined;
let anything: any = "Could be anything";
console.log(myname);
console.log(age);
console.log(isActive);
console.log(value);
console.log(undef);
console.log(noReturn);
console.log(anything);
// let neverReturn: never = (() => {
//   throw new Error("Error!");
// })();

// // ? Array & Tuple Types:
// let numbers: number[] = [1, 2, 3];
// let tuple: [string, number] = ["John", 23];

// // ? Union & Intersection Types:
// type Person = { name: string };
// type Employee = { id: number };
// let employee: Person | Employee = { name: "Mudassir", id: 101 }; // Intersection
// let value1: string | number = "Hello"; // Union

// console.log(employee, value1);

// // ? Type Inference:
// let inferredString = "This is a string"; // inferred as string
// let inferredNumber = 42; // inferred as number

// // ? 2. Interfaces
// interface User {
//   name: string;
//   age: number;
// }
// let user: User = { name: "Alice", age: 25 };
// console.log(user);

// // ? Optional Properties:
// interface Car {
//   model: string;
//   color?: string;
// }
// let myCar: Car = { model: "Toyota" };
// console.log(myCar);

// // ? Readonly Properties:
// interface Book {
//   readonly title: string;
// }
// let myBook: Book = { title: "TypeScript Guide" };
// // myBook.title = "New Title"; // Error: Cannot modify readonly property

// // ? Extending Interfaces:
// interface Animal {
//   species: string;
// }
// interface Dog extends Animal {
//   breed: string;
// }
// let myDog: Dog = { species: "Canine", breed: "Labrador" };
// console.log(myDog);

// // ? 3. Type Aliases
// // ? Defining Types:
// type ID = string | number;
// let userId: ID = 101;
// console.log(userId);

// // ? Type Composition:
// type Animals = { species: string };
// type Mammal = Animal & { fur: boolean }; // Intersection
// type Pet = Mammal | Bird; // Union

// // ? 4. Functions
// // ? Function Types:
// let greet = (name: string): string => {
//   return `Hello ${name}`;
// };
// console.log(greet("mudassir"));
