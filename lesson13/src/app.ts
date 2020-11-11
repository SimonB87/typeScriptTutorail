//- by default all detail of the classes are public.
  // - it is as if we did put access modifier public in front of it
// if we put private key word in front of it, we can not access this variable - there would be an error on "inv.details" from outside of the class itself
  // we can acces private variables inside the class itself - no problem
//read only modifier allows only reading, accessing in all possible parts of the code, but we can not change it
  class Invoice {
    readonly client: string;
    private details: string;
    public amount: number;
  
    constructor(c: string, d: string, a:number){
      this.client = c;
      this.details = d;
      this.amount = a;
    }
  
    format(){
      // this.client = "Johnny"; - here i can not edit a read only variable
      return `${this.client} owes £${this.amount} for ${this.details}.`;
    }
  }
  
  const invOne = new Invoice('mario', 'work on the mario website', 250);
  const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
  
// There is a shorthand expression for declaring class variables.
  class Car {
    constructor(
      readonly name: string,
      private horsePower: number,
      public gta: boolean
    ){}
  }

  const carOne = new Car("Mustang", 500, true);
  console.log(carOne);

  let invoices: Invoice[] = [];
  invoices.push(invOne);
  invoices.push(invTwo);
  
  console.log(invoices);

  invoices.forEach(inv => {
    //inv.client = "Pete"; // we get an error here, because on read only we can not assign a new value on readonly variable
    console.log(inv.client, /* inv.details, */ inv.amount, inv.format() ); //inv.details is private property accessible only inside the class itself
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
  