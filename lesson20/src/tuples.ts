/*
 * Tuples
 */

// - Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number:

console.log("Tuples");

// - regular arrays:

let array = ["Josh", 30, false];
array[0] = false;
array[1] = "Peter";
array[0] = 67;

// - this is fine
let tup: [string, number, boolean] = ["Josh", 30, false];
tup[1] = 40;

// - this fires an Error
//let tup2: [string, number, boolean] = ["Josh", true, false];
