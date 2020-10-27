var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

//while (true) {

for (var i = 0; i < lines.length; i++) {
  var caso = lines[i].split('=');
  var calculo = caso
    .shift()
    .split('+')
    .map((item) => parseInt(item));

  var resultado = parseInt(caso.shift());

  var soma = calculo[0] + calculo[1];

  if (soma === resultado) {
    console.log('False');
  } else {
    console.log('True');
  }
}

//}
