"use strict";

function countToN(start: number, finish: number) {
  console.log(start);
  if (start === finish) {
    return;
  }
  countToN(start + 1, finish);
}
countToN(1, 20);
