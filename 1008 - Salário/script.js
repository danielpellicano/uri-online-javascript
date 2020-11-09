var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());
var C = parseFloat(lines.shift());
var valor = B * C;

console.log('NUMBER = ' + A + '\n' + 'SALARY = U$ ' + valor.toFixed(2));
