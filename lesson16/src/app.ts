import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("Yoshi", "Web work", 250);
docTwo = new Payment("Mario", "Plumbing work", 200);

// - let make an array, which stringly limits its kind of childs
let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;

  if (type.value === "invoice"){
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  console.log(doc);
});