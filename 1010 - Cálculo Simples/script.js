var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = lines.shift().split(' ');
var B = lines.shift().split(' ');

var idItem1 = A.shift();
var qtdItem1 = A.shift();
var valor1 = A.shift();
var total1 = qtdItem1 * valor1;

var idItem2 = B.shift();
var qtdItem2 = B.shift();
var valor2 = B.shift();
var total2 = qtdItem2 * valor2;

var total = total1 + total2;

console.log('VALOR A PAGAR: R$ ' + total.toFixed(2));
