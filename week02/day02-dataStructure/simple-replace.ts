"use strict";

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away

let example: string = "In a dishwasher far far away";
let newExample: any = /dishwasher/;
let newSentence: string = example.replace(newExample, "galaxy");
example = newSentence;
console.log(example);

export = example;
