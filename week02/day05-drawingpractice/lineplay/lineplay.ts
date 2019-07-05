"use strict";
const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

canvas.height = 800;
canvas.width = 800;
function leftside(lx: number, ly: number) {
  ctx.strokeStyle = "darkblue";
  ctx.beginPath();
  ctx.moveTo(0, (canvas.height / 20) * lx);
  ctx.lineTo((canvas.width / 20) * ly, canvas.height);
  ctx.stroke();
}
for (let i = 1; i <= 20; i++) {
  leftside(i + 2, i);
}

function rightside(rx: number, ry: number) {
  ctx.strokeStyle = "lightblue";
  ctx.beginPath();
  ctx.moveTo((canvas.height / 20) * rx, 0);
  ctx.lineTo(canvas.height, (canvas.width / 20) * ry);
  ctx.stroke();
}
for (let i = 1; i <= 20; i++) {
  rightside(i + 2, i);
}
