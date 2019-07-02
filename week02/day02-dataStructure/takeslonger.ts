"use strict";
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
function missingSentence(b: string): string {
  let f: string[] = b.split("");
  f.splice(20, 0, " always takes longer than");
  return f.join("");
}
console.log(missingSentence(quote));

// let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

// let left: string = quote.slice(0, 20);
// let right: string = quote.slice(20, quote.length);
// let midpart: string = " always takes longer than";
// console.log(left + midpart + right);
