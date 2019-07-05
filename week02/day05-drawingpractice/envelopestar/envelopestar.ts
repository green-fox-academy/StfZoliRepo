"use strict";
const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

canvas.height = 800;
canvas.width = 800;
ctx.strokeStyle = "salmon";
function topright(trx: number, try1: number) {
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, (canvas.height / 20 / 2) * try1);
  ctx.lineTo(canvas.width / 2 + 20 * trx, canvas.height / 2);
  ctx.stroke();
}
for (let i = 1; i < 20; i++) {
  topright(i, i);
}
function topleft(tlx: number) {
  ctx.beginPath();
  ctx.moveTo((canvas.width / 2 / 20) * tlx, canvas.height / 2);
  ctx.lineTo(canvas.height / 2, canvas.width / 2 - 20 * tlx);
  ctx.stroke();
}
for (let i = 1; i < 20; i++) {
  topleft(i);
}
function bottomleft(blx: number) {
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, canvas.height - 20 * blx);
  ctx.lineTo(canvas.width / 2 - 20 * blx, canvas.height / 2);
  ctx.stroke();
}
for (let i = 1; i < 20; i++) {
  bottomleft(i);
}
function bottomright(brx: number) {
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, canvas.height - 20 * brx);
  ctx.lineTo(canvas.height / 2 + 20 * brx, canvas.width / 2);
  ctx.stroke();
}
for (let i = 1; i < 20; i++) {
  bottomright(i);
}
