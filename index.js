#!/usr/bin/node
var numTralalas = Number(process.argv[2]);
var tralala = '\033[31mTralala';
for (var i = 0; i < numTralalas; i++) {
  tralala += '\033[' + (30 + (i % 7)) + 'mla';
}
console.log(tralala + '\033[0m');
