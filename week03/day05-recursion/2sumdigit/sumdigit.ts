function summarise(number: number) {
  let remainder = number % 10;
  let sumOf = remainder;
  if (number >= 10) {
    let rest = Math.floor(number / 10);
    sumOf += summarise(rest);
  }
  return sumOf;
}
console.log(summarise(1283687126));
