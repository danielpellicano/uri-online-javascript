var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

for (var i = 0; i < lines.length; i++) {
  var rodadas = lines[i].split(' ').map((i) => parseInt(i));
  var a = rodadas[0];
  var b = rodadas[1];
  var c = rodadas[2];
  if (a != b && a != c) {
    console.log('A');
  } else if (b != a && b != c) {
    console.log('B');
  } else if (c != a && c != b) {
    console.log('C');
  } else if (
    (a === b && a === c) ||
    (b === a && b === c) ||
    (c === a && c === b)
  ) {
    console.log('*');
  }
}
