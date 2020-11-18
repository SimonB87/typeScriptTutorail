"use strict";
console.log("Generics");
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "Yoshi", age: 40 });
console.log(docOne);
const addingUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let documentOne = addingUID({ name: "Yoshi", age: 40 });
console.log(documentOne.name);
console.log(documentOne.uid);
let documentTwo = addingUID("string");
console.log(documentTwo);
const docThree = {
    uid: 10,
    resourceName: "Person",
    data: "Josh"
};
const docFour = {
    uid: 20,
    resourceName: "Person",
    data: ["London", "Paris"]
};
console.log(docThree, docFour);
