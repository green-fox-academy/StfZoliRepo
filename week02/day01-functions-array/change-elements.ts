"use strict";

// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method
// -  Print the fourth element as a test

/*let numList: number[] = [1, 2, 3, 8, 5, 6];
let change = numList.map(function(x) {
  if (x === 8) {
    return (x = 4);
  }
  return x;
});
console.log(change);
*/
let numList: number[] = [1, 2, 3, 8, 5, 6];
let change = numList.map(function(x) {
  if (x === numList[3]) {
    return (x = 4);
  }
  return x;
});
console.log(change);
