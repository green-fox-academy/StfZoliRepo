// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.
"use strict";
declare function require(path: string): any;
const fs = require("fs");

function lines(fileName: string): number {
  let conti = fs.readFileSync(fileName, "utf-8").split("\n");
  return conti.length;
}

try {
  console.log(lines("my-files.txt"));
} catch (e) {
  console.log(0);
}
