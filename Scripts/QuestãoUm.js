const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Informe o valor do índice (INDICE): ', (indice) => {
  rl.question('Informe o valor de K: ', (k) => {
    if (parseInt(k) >= parseInt(indice)) {
      console.log("O valor de K deve ser menor que o índice.");
    } else {
      let SOMA = 0;
      let K = 0;

      while (K < parseInt(indice)) {
        K = K + 1;
        SOMA = SOMA + K;
      }

      console.log(`O valor da variável SOMA é: ${SOMA}`);
    }

    rl.close();
  });
});