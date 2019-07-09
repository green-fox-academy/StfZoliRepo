export {};
"use strict";
declare function require(path: string): any;
const fs = require("fs");
// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

function copy(oldtxt: string, newtxt: string): boolean {
  try {
    let content = fs.readFileSync(oldtxt, "utf-8");
    fs.appendFileSync(newtxt, content);
    return true;
  } catch (e) {
    return false;
  }
}
copy("a.txt", "b.txt");
