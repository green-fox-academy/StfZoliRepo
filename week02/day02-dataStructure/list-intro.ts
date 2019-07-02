"use strict";
export {};

let nameList: string[] = [];
nameList.push("William", "John", "Amanda");
//nameList.push("John");
//nameList.push("Amanda");
//for (let i = 0; i < integers.length; i++) {
//   console.log(integers[i]);
//}
for (let i = 0; i < nameList.length; i++) {
  console.log(nameList[i]);
}
//console.log(nameList[2]);

for (let i = 0; i < nameList.length; i++) {
  console.log(i + 1 + ".", nameList[i]);
}
nameList.splice(1, 1);
console.log(nameList);

for (let i = nameList.length - 1; i >= 0; i--) {
  console.log(nameList[i]);
}
nameList.splice(0, 2);
console.log(nameList);
