/*
 *  Generics
 */

console.log("Generics");

// - generics allows to create reusable blocks of code, which can be used with different types.
// - the function belows takes any kind of object and attaches to itself another property
const addUID = (obj: object) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}

let docOne = addUID({name: "Yoshi", age: 40});

console.log(docOne);

// - at this point we can access the whole object, but we can not access it's property (like name)
//  - console.log(docOne.name) //Error: property name does not exist on type uid
//    - when we specify this object in the addUID, we do not specify, what this object types should be.

// - we can use the generic type in front of the function parameters. This can be anything, but people usually use <T>:
// - generic captures any type, we pass into the function. So it knows, what type of arguments we pass in the function

const addingUID = <T>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}

let documentOne = addingUID({name: "Yoshi", age: 40});

console.log(documentOne.name); // - no Error "property does not exist" anymore
console.log(documentOne.uid); // - no Error "property does not exist" anymore

// - however in this way we can use anything as an argument, for example even a string
let documentTwo = addingUID("string");
console.log(documentTwo); //returns app.js:36 {0: "s", 1: "t", 2: "r", 3: "i", 4: "n", 5: "g", uid: 91}

// - we can specify which type would the generic be
// const addingUID = <T extends object>(obj: T) => { *some code here* }

// - we can specify which type of objects we are allowed to use
// const addingUID = <T extends { name: string }>(obj: T) => { *some code here* }

/*
 *  Generics and interfaces
 */

// - we can use interfaces, which specify how an object should look
// - resource can be any type, when we specify a new object with this interface

interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

// - using the generic type we can specify, that the data type has to be a string, when we declare it.
const docThree: Resource<string> = {
  uid: 10,
  resourceName: "Person",
  data: "Josh"
}

// - Let's specify a generic which is an array of strings
const docFour: Resource<string[]> = {
  uid: 20,
  resourceName: "Person",
  data: ["London", "Paris"]
}

console.log(docThree, docFour);