"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

let color: string[] = ["red", "yellow", "grey", "black"];

function rects(x: number, y: number, z: number, s: number) {
  ctx.fillRect(x, y, z, s);
}
for (let i = 1; i < 5; i++) {
  ctx.fillStyle = color[i - 1];
  rects(i * 45, i * 90, i * 20, i * 20);
}
