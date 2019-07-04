"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
let x: number = canvas.width;
let y: number = canvas.height;
let z = x;
// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.
let randomColor: string[] = [
  "red",
  "green",
  "ble",
  "yellow",
  "cyan",
  "magenta",
  "lime",
  "orange",
  "brown",
  "indigo",
  "springgreen",
  "maroon",
  "silver",
  "peru"
];

function squares(f: number, colors: string) {
  ctx.fillStyle = colors;
  ctx.fillRect(x / 2 - f / 2, y / 2 - f / 2, f, f);
  //ctx.fillStyle()
}
for (let i = 0; i < randomColor.length; i++) {
  squares(z, randomColor[i]);
  z = z - randomColor.length * i;
}
