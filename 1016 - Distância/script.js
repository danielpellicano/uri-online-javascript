var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map((item) => parseInt(item));

var X = 60;
var Y = 90;
var numero = lines.shift();

var distancia = (numero / (Y - X)) * 60;
console.log(distancia + ' minutos');
