console.log("1)");

const length = 4;
const valueToFill = "hello";

let fillArray = (length, valueToFill) => {
  return new Array(length).fill(valueToFill);
};

console.log(fillArray(length, valueToFill));
// ['hello', 'hello', 'hello', 'hello']

console.log("2)");

let obj = {
  width: 10,
  height: 5,
  title: "Test Array",
  count: 4,
};

let multiplyNumeric = (obj) => {
  // let entries = Object.entries(obj);
  // entries.forEach((entry) => {
  //   let value = entry[1];
  //   if (typeof value === "number") {
  //     value = value ** 2;
  //   }
  // });
  // let multiply = Object.fromEntries(entries);
  // return multiply;

  let multiply = Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, value ** 2]));
  return multiply;
};

console.log(multiplyNumeric(obj));
//   {
//     width: 100,
//     height: 25,
//     title: 'Test Array',
//     count: 16
//   }
