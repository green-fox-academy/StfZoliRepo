"use strict";

let myName: string = "z";

console.log(myName);
let anything: string[] = ["something", "nothing", "blahblah"];

console.log(anything[0]);

for (let i: number = 0; i < 4; i++) {
  console.log(anything[i]);
}
anything.forEach(function(things) {
  console.log(things);
});

let diffArray: [string, boolean] = ["aName", true];
let diffArray2: Array<string | number> = ["nameAgain", 3, 11];

console.log(diffArray2);
diffArray.splice(0, 1, "z");

let doubled: number[] = [1, 2, 3, 4, 5].map(function(i) {
  return i * 2;
});
console.log(doubled);
let odds: number[] = [1, 2, 3, 4, 5].filter(function(item) {
  return item % 2 == 1;
});
console.log(odds);

//spread

let array1: number[] = [1, 2];
let array2: number[] = [3, 4];

let array3: number[] = [...array1, ...array2];

console.log(array3);
