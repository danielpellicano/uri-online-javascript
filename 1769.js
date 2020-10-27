
for(var i = 0; i <= lines.length - 1; i++) {


    var digitos = lines[i].replace(/[^\d]/g, "").slice(0, -2);
    var verificador = lines[i].replace(/[^\d]/g, "").substr(-2, 2);
    
    var digitoArray = digitos.replace(/\./g, '').split("").map(digito => parseInt(digito));
    var b1 = parseInt(verificador[0]);
    var b2 = parseInt(verificador[1]);
    
    var somaVerificacao1 = digitoArray.reduce((total, valorAtual, index) =>{
        return total + valorAtual * (index + 1);
    },0);
    
    var somaVerificacao2 = digitoArray.reduce((total, valorAtual, index) =>{
        return total + valorAtual * (9 - index);
    },0);
    
    var totalB1 = somaVerificacao1 % 11
    var totalB2 = somaVerificacao2 % 11
    
    if(totalB1 === 10) {
        b1 === 0;
    }
    
    if(totalB2 === 10) {
        b2 === 0;
    }
    
    
    if(b1 === totalB1 && b2 === totalB2) {
        console.log('CPF valido');
    } else {
        console.log('CPF invalido');
    }
    
    }