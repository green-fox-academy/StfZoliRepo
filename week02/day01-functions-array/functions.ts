let NumberToMultiply: number = 12;

let twice: number = NumberToMultiply;
console.log(twice);

let AnotherToMultiply: number = 11;

let TwiceAnother: number = AnotherToMultiply * 2;
console.log(TwiceAnother);

function printNumberAndChangeIt(inputNumber: number) {
  let doubledValue: number = inputNumber * 2;
  console.log(doubledValue);
}

function multiplitcation(base: number, another: number): number {
  return base * another;
}

printNumberAndChangeIt(12);
printNumberAndChangeIt(11);

console.log(multiplitcation(9, 5));
