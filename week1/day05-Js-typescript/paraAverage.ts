let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

// 4 sor
console.log("   *   "); // szokoz: 6, csilalg: 1
console.log("  ***  "); // szokoz: 4, csillag: 3
console.log(" ***** "); // szokoz: 2, csillag: 5
console.log("*******"); // szokoz: 0, csillag: 7

// 5 sor
console.log("    *    "); // szokoz: 8, csilalg: 1
console.log("   ***   "); // szokoz: 6, csillag: 3
console.log("  *****  "); // szokoz: 4, csillag: 5
console.log(" ******* "); // szokoz: 2, csillag: 7
console.log("*********"); // szokoz: 0, csillag: 9

// 1 sor
console.log("*"); // szokoz: 0, csilalg: 1

// 2 sor
console.log(" * "); // szokoz: 2, csilalg: 1
console.log("***"); // szokoz: 0, csillag: 3

// csillag = 1 + (lineCount - 1) * 2

const lineCountStar = lineCount => {
  let szokoz = "";
  let csillag = "*";
  console.log(szokoz + csillag + szokoz);
};

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz ... 99, Buzz
// 15 = Fizzbuzz, 30, 45, 60, 75

// x % 3 = 0
// x % 5 = 0

// ternary operator

const threesAndFives = () => {
  //1. loop 1-től 100-ig kitolja a számokat
  //2. Kondició: ha 0 maradék 3-mal osztásnál, akkor felülírod Fizz-zel
  //3. Kondició: ha 0 maradék 5-tell osztásnál, akkor felülírod Buzz-zel
  //4. Kondició: ha 0 maradék 3-mal és 5-tel osztásnál, akkor felülírod FizzBuzz-zel
  // Printeled az eredmenyt
};

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3

// 1 + 2 + 3 + 4 + x = 15
// (1 + 2 + 3 + 4 + x) / x = 3

// x = 6

// 1 + 2 + 3 + 4 + 5 + x = 21

const paraAverage = x => {
  //1. 1-től x-ig össze kell adni a számokat
  //2. a fenti összeget le kell osztani az x-szel
  console.log(sum, avarage);
};
