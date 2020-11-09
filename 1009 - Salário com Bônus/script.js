var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = lines.shift();
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());
var vendas = (C * 15) / 100;
var total = B + vendas;

console.log('TOTAL = R$ ' + total.toFixed(2));
