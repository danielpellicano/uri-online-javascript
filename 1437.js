const { Console } = require("console");

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var count = 0;

while(true) {

var comandos = parseInt(lines.shift());

if(comandos == 0) {
    break;
}

var direcao = lines.shift();

// // Norte: 0, Leste: 1, Sul: 2, Oeste: 3
var bussola = 0;

for(var i = 0; i <= direcao.length;i++) {

   if(direcao[i] == 'D') {
       bussola++;
   }
   if(direcao[i] == 'E') {
       bussola--;
   }
}

var bussolaFinal = bussola % 4;

if(bussolaFinal == 0 || bussolaFinal == 4 || bussolaFinal == -4) {
    console.log('N');
}
if(bussolaFinal == 1 || bussolaFinal == -3)     {
    console.log('L');
}
if(bussolaFinal == 2 || bussolaFinal == -2) {
    console.log('S');
}
if(bussolaFinal == 3 || bussolaFinal == -1 || bussolaFinal == 3) {
    console.log('O');
}

}
