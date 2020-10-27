var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var n = 3.14159;
var raio = parseFloat(lines.shift());
var area = n * Math.pow(raio, 2);

console.log('A=' + area.toFixed(4));
