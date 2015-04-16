#!/usr/bin/env node
var numTralalas = Math.max(Number(process.argv[2]) || 0, 0);
var vogal = process.argv[3] || 'a';
var initialLalas = 2;

function randomInt(low, high) {
  return Math.floor(Math.random() * (high -low + 1) + low);
}

var initialColor = randomInt(30, 37);

var tralala = '\033[' + initialColor + 'mTr' + vogal;
for (var i = 0; i < numTralalas + initialLalas; i++) {
  tralala += '\033[' + randomInt(30, 37) + 'ml' + vogal;
}
console.log(tralala + '\033[0m');
