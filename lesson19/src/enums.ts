/*
 * Enums
 */

// - Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.
// - Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

console.log("Enums");

// in the ResourceType each item has its number starting at 0
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

// - using the generic type we can specify, that the data type has to be a string, when we declare it.
const docOne: Resource<string> = {
  uid: 10,
  resourceType: ResourceType.BOOK,
  data: "Name of the wind."
}

// - Let's specify a generic which is an array of strings
const docTwo: Resource<string> = {
  uid: 20,
  resourceType: ResourceType.PERSON,
  data: "Jack Lonndonn",
} 

console.log(docOne, docTwo);
// in docOne: resourceType: 0
// in docTwo: resourceType: 4