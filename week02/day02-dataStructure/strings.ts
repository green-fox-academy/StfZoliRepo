"use strict";
export = {};

let single: string = "single quotes";

let double: string = "double qoutes";

let backTick: string = `today is ${100 ** 2}degrees outside`;

console.log(single, double, backTick);
console.log(single.length);

function toUpperCaseAtIndex(text: string, index: number): string {
  let prefix: string = text.slice(0, index);
  let replaceToUppercase: string = text.charAt(index).toUpperCase();
  let suffix: string = text.slice(index + 1);
  return prefix.concat(replaceToUppercase).concat(suffix);
}

let greeting: string = "hello create class";
let greetingTheRightWay: string = greeting.replace(/create/, "Create");
let letterOfWord: string[] = greeting.split(" ");

console.log(greeting);
console.log(greetingTheRightWay);
console.log(toUpperCaseAtIndex("appletree", 0));

let textToSlice: string = "1234567890";
let spliced: string = textToSlice.slice(4, -3);
console.log(spliced);
