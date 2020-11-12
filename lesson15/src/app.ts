// - Interface: allows to infer a certain structure on the class or object (properties types, kinds of methods used in them)
interface IsPerson {
  name: string; // each person has to have a name which is a string
  age: number; // each person has to have an age which is a number
  speak(a: string): void; // each person has to have this method, which uses some argument as a string and returns nothing at all
  spend(a: number): number;
}

const me: IsPerson = {
  name: "Simon",
  age: 32,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log(`I spent ${amount}.`);
    return amount;
  }//,
  // skills: [] // we can not add this property because it is not part of the IsPerson interface
}

let someone: IsPerson; // this variable later in the future has to match the interface value

const greetPerson = (person: IsPerson): void => {
  console.log('hello ', person.name);
}

console.log(me); //here I am allowed to use a me object as an argument, only because it matches the interface structure

import { Invoice } from "./classes/Invoice.js";

const invOne = new Invoice('mario', 'work on the mario website', 250);
  const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

  let invoices: Invoice[] = [];
  invoices.push(invOne);
  invoices.push(invTwo);

  console.log(invoices);

  invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format() );
  });

  const form = document.querySelector('.new-item-form') as HTMLFormElement;
  
  const type = document.querySelector('#type') as HTMLInputElement;
  const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
  const details = document.querySelector('#details') as HTMLInputElement;
  const amount = document.querySelector('#amount') as HTMLInputElement;

  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
      type.value,
      tofrom.value,
      details.value,
      amount.valueAsNumber
    );
  });
