/*
const anchor = document.querySelector("a");

console.log(anchor);
//- let's try to reach the anchor html attribute
  //- we get an error, because: "Object is possibly null". This is for cases, when _JS can not find an <a> element in the page.
  //console.log(anchor.href);

  //- lets try the case, when the JS found the <a> element inside the page
  if(anchor){//in this statement anchor was found, so it can not be null. This took away the error.
    console.log(anchor.href);
  }

  //- if we are certain as developers, this things exists, we can add an "!" sign to the query selector:
  const anchorElem = document.querySelector("a")!;
  console.log(anchorElem.href);

//- TypeScript holds also types of HTML elements
const anchorElem2 = document.querySelector("a")!; //this is type of HTMLAnchorElement, so we can use all the proper methods on the anchorElem2
anchorElem2.setAttribute("href", "#");

//- When operating with a query selector, just using a class will not find a form element
const form = document.querySelector('.new-item-form'); //this is just any kind of HTML element
const formWithClass = document.querySelector('form.new-item-form'); //also any kind of HTML element
const formElement = document.querySelector('form'); //this is! the HTMLFormElement
  //- we can redeclare element that it will! be HTMLFormElement
  const formDeclared = document.querySelector('.new-item-form') as HTMLFormElement; //this is! the HTMLFormElement

  console.log("form childer:");
  console.log(formDeclared.children);

//- Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
*/