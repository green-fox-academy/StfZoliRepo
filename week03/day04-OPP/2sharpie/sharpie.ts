"use strict";

class sharpie {
  color: string;
  width: number;
  inkAmount: number = 100;
  constructor(color: string, width: number) {
    this.color = color;
    this.width = width;
  }
  draw(): void {
    this.inkAmount--;
  }
}
let redSharpie: sharpie = new sharpie("red", 0.4);
redSharpie.draw();
console.log(redSharpie);
