const readLine = require('readLine').createInterface({
    input: process.stdin,
    output: process.stdout
});

const minhaPrimeriaContateString = 'Minha primera constante';
console.log(minhaPrimeriaContateString);

let leituraDeCampo;

readLine.question('Informe sua idade', input => {
    leituraDeCampo = input;
    console.log(`o usuario digitou: ${leituraDeCampo}`);
})