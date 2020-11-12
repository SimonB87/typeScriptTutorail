/*// - add path, from where I want to "import" the js file. Be aware that we are putting there the "Invoice.js" file name, because we are compiling the code down to JS */
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
  
  //- from lesson 11: const form = document.querySelector('form')!;
  const form = document.querySelector('.new-item-form') as HTMLFormElement;
  
  //- from lesson 11:  inputs
  const type = document.querySelector('#type') as HTMLInputElement;
  const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
  const details = document.querySelector('#details') as HTMLInputElement;
  const amount = document.querySelector('#amount') as HTMLInputElement;
  
  //- from lesson 11: note: here "e" stands for event, amount.value (as string) OR amount.valueAsNumber (as a number)
  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
  
    console.log(
      type.value, 
      tofrom.value, 
      details.value, 
      amount.valueAsNumber
    );
  });
