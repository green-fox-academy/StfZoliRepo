"use strict";

let names: string[] = ["Rob", "Ian", "Gabe", "Z"];

function filterNamesLongerthanthree(names: string[]): string[] {
  let filteredNames: string[] = [];
  for (let index: number = 0; index < names.length; index++) {
    if (names[index].length > 3) {
      filteredNames.push(names[index]);
    }
  }

  return filteredNames;
}

console.log(filterNamesLongerthanthree(names));
