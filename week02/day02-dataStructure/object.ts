"use strict";
export {};

let person: any = {
  name: "John",
  age: 21,
  friend: [],
  greeting: function() {
    console.log("Hi my name is John ;)");
  }
  //plsDontHateMe:{
};
//if(person.hasOwnProperty('address')
//console.log(person.name);

let personCopyWithReference = person;

console.log(person);
console.log(personCopyWithReference.name);
person.name = "new Name";
//person.greeting();
console.log(Object.keys(person));
console.log(person.hasOwnProperty("name"));
