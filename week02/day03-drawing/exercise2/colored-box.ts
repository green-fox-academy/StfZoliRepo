"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.
ctx.strokeStyle = "rgb(200, 20, 100)";
ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineTo(150, 300);
ctx.stroke();

ctx.strokeStyle = "rgb(150, 255,0";
ctx.beginPath();
ctx.moveTo(150, 300);
ctx.lineTo(300, 300);
ctx.stroke();

ctx.strokeStyle = "rgb(0,0,200)";
ctx.beginPath();
ctx.moveTo(300, 300);
ctx.lineTo(300, 150);
ctx.stroke();

ctx.strokeStyle = "rgb(180,0, 255)";
ctx.beginPath();
ctx.moveTo(300, 150);
ctx.lineTo(150, 150);
ctx.stroke();
