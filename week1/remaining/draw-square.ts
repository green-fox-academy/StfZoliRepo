"use strict";

let lineCount: number = 6;

for (let i = 1; i <= lineCount; i++) {
  let percent: string = "";

  for (let j = 1; j <= lineCount; j++) {
    if (i == 1 || i == lineCount) {
      percent += "%";
    } else {
      if (j == 1 || j == lineCount) {
        percent += "%";
      } else {
        percent += " ";
      }
    }
  }
  console.log(percent);
}
export {};
