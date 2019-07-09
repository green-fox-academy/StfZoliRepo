"use strict";
export {};
// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is
let star: string = "*";
let lineCount: number = 4;
for (let i = 1; i <= lineCount; i++) {
  console.log(star.repeat(i));
}

// for (let i = 1; i <= 4; i++) {
//   for (let lineCount = 1; lineCount <= i; lineCount++) {
//     console.log("*".repeat);
//   }

//    console.log("*".repeat(i));
// }
