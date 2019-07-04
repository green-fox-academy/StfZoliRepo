"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

function dsteps(x: number, y: number) {
  ctx.fillStyle = "purple";
  ctx.fillRect(x, x, y, y);
}
let size: number = 10;
let position: number = size;

for (let i = 0; i < 7; i++) {
  dsteps(position + size * (i - 1), size * i);
  position = position + size * (i - 1);
}
