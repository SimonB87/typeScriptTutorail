//- from lesson 12: classes expamples
  // first we can errors in the class for client, details, amount. because we are not signing values for these variables. We need to declare the values in the constructor.
class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a:number){
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format(){
    return `${this.client} owes £${this.amount} for ${this.details}.`;
  }
}

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

//- we can create an array for invoices
//let invoices: string[] = [];
//- better to do it with the type of a class
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

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
