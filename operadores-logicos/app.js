const readLine = requeire('readLine').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Essse programa vai checar se você é maior de 18 anos e tem habilitação se você pode entrar no kart');
console.log('Além de suas verificações, precisamos verificar se você está na lista de prsença do horário');

readLine.question('Qual o ano do seu nascimento?' , ano => {
    if(ano > 2004){
        console.log('Você não tem 18 anos');
    }else{
        readLine.question("Você tem habilitação? (Sim/Não)", temHabilitacao => {
            if(!(temHabilitacao.toUperrCase() === "SIM")){
                console.log('Você não tem habilitação para entrar no Kart');
            }else{
                readLine.question("Qual seu nome?", nome =>{
                    switch(nome){
                        case 'Douglas' :
                            console.log('bem vindo ao Kart Douglas');
                            break;
                        case 'Gabriel' :
                                console.log('bem vindo ao Kart Gabriel');
                            break;
                        default: 
                            console.log('Seu nome não foi identificado na lista de presença');
                    }
                })
            }
        })
    }
})