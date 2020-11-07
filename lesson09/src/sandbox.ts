// types can get complicated
const logDetails = (uid: string | number, item: string) => {
  console.log(`${item} has a uid of ${uid}.`);
}

const greet = (user: {name: string, uid: string | number} ) => {
  console.log(`${user.name} say hello`);
}

//1) use aliases as declared types stored in memory
type stringOrNum = string | number;
type objWithName = { name: string, uid: stringOrNum }

  // declared type from variables
const logDetails2 = (uid: stringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}.`);
}

const greet2 = (user: {name: string, uid: stringOrNum} ) => {
  console.log(`${user.name} say hello`);
}

const greet21 = (user: objWithName ) => {
  console.log(`${user.name} say hello`);
}