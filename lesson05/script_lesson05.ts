//explicit types
let character: string;
let age: number;
let isLoggedInt: boolean;
let object: object;

character = "Lui";

age = 1;

object = {
  size: "big"
};

//arrays

let ninjas: string[] = [];

//ninjas = [1, "Pete", true];
ninjas.push("Pete");

//union types
let mixedArray: (string|number|object)[] = [];

mixedArray.push(1);
mixedArray.push("hy");
mixedArray.push(["hy", true, {name: "John"}]);
console.log( mixedArray );


let placeholder: string|number;

//objects

let ninjaOne: object;

ninjaOne = { name: "Simon", age: 20 };
ninjaOne = ["Simon", 20 ];

let ninjaTwo: {
  name: string,
  age: number,
  senior: boolean
}

ninjaTwo = {
  name: "TimeRanges",
  age: 30,
  senior: true
}