const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isFibonacci(number) {
  let a = 0;
  let b = 1;
  let next = a + b;

  while (next <= number) {
    if (next === number) {
      return true;
    }
    a = b;
    b = next;
    next = a + b;
  }
  return false;
}

rl.question('Informe um número para verificar se pertence à sequência de Fibonacci: ', (inputNumber) => {
  const number = parseInt(inputNumber);

  if (isFibonacci(number)) {
    console.log(`${number} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${number} não pertence à sequência de Fibonacci.`);
  }

  rl.close();
});