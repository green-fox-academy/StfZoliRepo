"use strict";
class postIt {
  backgroundColor: string;
  text: string;
  textColor: string;
  constructor(backgroundColor: string, text: string, textColor: string) {
    this.backgroundColor = backgroundColor;
    this.text = text;
    this.textColor = textColor;
  }
}
let postItOne: postIt = new postIt("orange", "Idea1", "blue");
let postItTwo: postIt = new postIt("pink", "Awesome", "black");
let postItThree: postIt = new postIt("yellow", "Suberb!", "green");

console.log(postItOne, postItTwo, postItThree);
