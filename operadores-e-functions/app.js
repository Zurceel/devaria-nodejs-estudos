const readLine = require('readLine').createInterface({
    input : process.stdin,
    output : process.stdout
});

const validarNumeroInformado = (numero) => {
    const resultado = Number.parseFloat(numero);
    if(!resultado){console.log(`Numero informado não é valido`)};
}

const validarOperador = (operador) => {
    switch(operador){
        case '+':
        case '-':
        case '/':
        case '*':
        case '%':
            return operador;
        default:
            console.log('operador informado é inválido');
            return null;
    }
}

readLine.question('Favor informar um número:', (numero1) => {
    const numeroValidado1 = validarNumeroInformado(numero1);

    if(numeroValidado1){
        readLine.question('Favor informar outro numero:', (numero2) => {  
            const numeroValidado2 = validarNumeroInformado(numero2);

            if(numeroValidado2){
                readLine.question('Favor informar o operador:', (operador) => {
                    const operadorValidado = validarOperador(operador);
                    if(operadorValidado){
                        switch(operadorValidado){
                            case '+' : console.logo(`operador selecionado adição resultado ${numeroValidado1} + ${numeroValidado2} = ${numeroValidado1} + ${numeroValidado2}`);
                                break;
                            case '-' : console.logo(`operador selecionado subitração resultado ${numeroValidado1} - ${numeroValidado2} = ${numeroValidado1} - ${numeroValidado2}`);
                                break;
                            case '/': console.logo(`operador selecionado divisão resultado ${numeroValidado1} / ${numeroValidado2} = ${numeroValidado1} / ${numeroValidado2}`);
                                break;
                            case '*': console.logo(`operador selecionado multiplicação resultado ${numeroValidado1} * ${numeroValidado2} = ${numeroValidado1} * ${numeroValidado2}`);
                                break;
                            case '%': console.logo(`operador selecionado modulo resultado ${numeroValidado1} % ${numeroValidado2} = ${numeroValidado1} % ${numeroValidado2}`);
                                 break;
                            default: break;
                        }
                    }
                })
            }
        });
    }
})