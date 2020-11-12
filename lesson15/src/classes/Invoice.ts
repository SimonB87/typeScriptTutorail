// - put "export" in from of the file
export class Invoice {
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