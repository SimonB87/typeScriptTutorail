import { HasFormatter } from "../interfaces/HasFormatter.js";

// - we want to implement a HasFormatter interface. This meains that this class has to have a format() method inside
export class Invoice implements HasFormatter {
  readonly client: string;
  private details: string;
  public amount: number;

  constructor(c: string, d: string, a:number){
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format(){
    return `${this.client} owes £${this.amount} for ${this.details}.`;
  }
}