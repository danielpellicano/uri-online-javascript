var input = require("fs").readFileSync("stdin", "utf8");
var [pessoas, opnioes] = input.split("\n");

opnioes = opnioes.split(" ").map(item => parseInt(item));

var resultado = {
    satisfatorio: 0,
    naoSatisfatorio:0
}

for(var i = 0; i < opnioes.length;i++) {

    if(opnioes[i] === 0) {
        resultado.satisfatorio++
    } else {
        resultado.naoSatisfatorio++
    }
}

if(resultado.satisfatorio > resultado.naoSatisfatorio) {
    console.log('Y')
} else {
    console.log('N')
}
