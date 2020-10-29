var input = require('fs').readFileSync('stdin', 'utf8');
var [tempo, velocidade] = input.split('\n').map((item) => parseInt(item));

var resultado = (velocidade * tempo) / 12;

console.log(resultado.toFixed(3));
