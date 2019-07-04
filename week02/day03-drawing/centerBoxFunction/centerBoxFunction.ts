"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.
canvas.width = 800;
canvas.height = 600;
let x: number = canvas.width / 2;
let y: number = canvas.height / 2;
// let f: number = 150;

function squareMidd(f: number) {
  ctx.strokeRect(x - f / 2, y - f / 2, f, f);
}
for (let i = 1; i < 4; i++) {
  squareMidd(i * 40);
}
