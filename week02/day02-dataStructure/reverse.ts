"use strict";
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
function reverse(r: string): string {
  return r
    .split("")
    .reverse()
    .join("");
}
//reverse(reversed);
console.log(reverse(reversed));

export = reverse;
// function reverse(s){
//     return s.split("").reverse().join("");
// }
