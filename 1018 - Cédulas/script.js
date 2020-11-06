var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map((item) => parseInt(item));

var resto100 = lines % 100;
var resto50 = resto100 % 50;
var resto20 = resto50 % 20;
var resto10 = resto20 % 10;
var resto5 = resto10 % 5;
var resto2 = resto5 % 2;
var resto1 = resto2 % 1;

console.log(parseInt(lines));
console.log(parseInt(lines / 100) + ' nota(s) de R$ 100,00');
console.log(parseInt(resto100 / 50) + ' nota(s) de R$ 50,00');
console.log(parseInt(resto50 / 20) + ' nota(s) de R$ 20,00');
console.log(parseInt(resto20 / 10) + ' nota(s) de R$ 10,00');
console.log(parseInt(resto10 / 5) + ' nota(s) de R$ 5,00');
console.log(parseInt(resto5 / 2) + ' nota(s) de R$ 2,00');
console.log(parseInt(resto2 / 1) + ' nota(s) de R$ 1,00');
