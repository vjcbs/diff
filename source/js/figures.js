// console.log('This is from figures.js')

function f(x) {
  // console.log(x);
}

function createWaves(class_) {
  let w = $(class_).width();
  // console.log(w);
}

console.log('Hello!');
let re = /,\d+/g;

let s = 'M56,70 Q35,220 45,440';
console.log(s.replace(re, s => ',' + (Number.parseInt(s.substring(1))+5)));
