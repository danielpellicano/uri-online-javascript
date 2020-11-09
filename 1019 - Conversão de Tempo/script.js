var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var horas = Math.floor(lines / 3600);
var minutos = parseInt(Math.floor(lines - horas * 3600) / 60);
var segundos = Math.floor(lines % 60);

console.log(horas + ':' + minutos + ':' + segundos);
