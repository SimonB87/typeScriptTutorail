//create a varible of type function
let greet = () => {
  console.log("hello");
}

let anotherGreet: Function;

anotherGreet = () => {
  console.log("hi there");
}

const add = (a: number, b: number) => {
  console.log(a + b);
}

add(5, 10);

//1) optional argument included with a '?'
const subtract = (a: number, b: number, c?: number|string) => {
  console.log(a - b);
  console.log(`The optional argument is: ${c}`)
}

subtract(5,10,"Simon");
subtract(4,9);

//2) optional argument with a default value
const plus = (a: number, b: number, c: number|string = 10) => {
  console.log(a + b);
  console.log(`The optional argument is: ${c}`);
}

plus(5,10,"Simon");
plus(4,9);

//2a) optional argument with a default value using void
const plusCalculation = (a: number, b: number, c: number|string = 10):void => {
  console.log(a + b);
  console.log(`The optional argument is: ${c}`);
}

  //hover over these function declarations and you will see that the output is void. Void is lack of any kind of value
plusCalculation(5,10,"Simon");
plusCalculation(4,9);

//3) declare a type of basis of function output in return statement
const minus = (a: number, b: number) => {
  return a - b;
}

  //if we hover over the result variable we get the type "number"
let result = minus(10,7);

//4) declare the return type of a variable - place a type behind the arguments
const minusCalculation = (a: number, b: number):number => {
  return a - b;
}

let output = minusCalculation(6,2);