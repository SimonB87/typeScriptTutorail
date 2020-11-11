"use strict";
//- by default all detail of the classes are public.
// - it is as if we did put access modifier public in front of it
// if we put private key word in front of it, we can not access this variable - there would be an error on "inv.details" from outside of the class itself
// we can acces private variables inside the class itself - no problem
//read only modifier allows only reading, accessing in all possible parts of the code, but we can not change it
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        // this.client = "Johnny"; - here i can not edit a read only variable
        return this.client + " owes \u00A3" + this.amount + " for " + this.details + ".";
    };
    return Invoice;
}());
var invOne = new Invoice('mario', 'work on the mario website', 250);
var invTwo = new Invoice('luigi', 'work on the luigi website', 300);
// There is a shorthand expression for declaring class variables.
var Car = /** @class */ (function () {
    function Car(name, horsePower, gta) {
        this.name = name;
        this.horsePower = horsePower;
        this.gta = gta;
    }
    return Car;
}());
var carOne = new Car("Mustang", 500, true);
console.log(carOne);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invoices.forEach(function (inv) {
    //inv.client = "Pete"; // we get an error here, because on read only we can not assign a new value on readonly variable
    console.log(inv.client, /* inv.details, */ inv.amount, inv.format()); //inv.details is private property accessible only inside the class itself
});
//- from lesson 11: const form = document.querySelector('form')!;
var form = document.querySelector('.new-item-form');
//- from lesson 11:  inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
//- from lesson 11: note: here "e" stands for event, amount.value (as string) OR amount.valueAsNumber (as a number)
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
