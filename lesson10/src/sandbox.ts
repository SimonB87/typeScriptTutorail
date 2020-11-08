// types assigned to function.
let greet: Function;

//Function signature describes what kind of function it will hold and what kind of arguments would it hold.


//example 1

  //signature
let greet1: (a:string, b:string) => void;

  //proper function according to the signature
greet1 = (name:string, greeting:string): void => {
  console.log(`${name} says ${greeting}`);
}

  //void is not required
  greet1 = (name:string, greeting:string) => {
    console.log(`${name} says ${greeting}`);
  }

  //function has to hold proper type kinds - this fires an error on the function declaration
  //greet1 = (name:number, greeting:string) => {
  //  console.log(`${name} says ${greeting}`);
  //}

//example 2
let calc: (a: number, b: number, c:string) => number;

  //this action has an error under its declaration because if there is this if, it could return nothing and it has to return a number
  //calc = (numOne: number, numTwo: number, action: string) => {
  //  if (action === "add") {
  //    return numOne + numTwo;
  //  }
  //}

  //this is ok
  calc = (numOne: number, numTwo: number, action: string) => {
    if (action === "add") {
      return numOne + numTwo;
    } else {
      return numOne - numTwo;
    }
  }

  //I don´t have to give the return type, but i could.
  calc = (numOne: number, numTwo: number, action: string): number => {
    if (action === "add") {
      return numOne + numTwo;
    } else {
      return numOne - numTwo;
    }
  }

//example 3
let logDetails: (obj: {name: string, age:number}) => void;

type person = {name: string, age:number};

logDetails = (ninja: person) => {
  console.log(`${ninja.name} has age ${ninja.age}`);
}