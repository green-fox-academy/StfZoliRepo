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
