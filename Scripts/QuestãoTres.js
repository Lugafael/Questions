// Sequência a) 1, 3, 5, 7, ___
// Lógica: Adicionar 2 a cada termo anterior.
const sequenceA = [1, 3, 5, 7];
const nextA = sequenceA[sequenceA.length - 1] + 2;
console.log("Próximo elemento da sequência a):", nextA);

// Sequência b) 2, 4, 8, 16, 32, 64, ____
// Lógica: Multiplicar cada termo anterior por 2.
const sequenceB = [2, 4, 8, 16, 32, 64];
const nextB = sequenceB[sequenceB.length - 1] * 2;
console.log("Próximo elemento da sequência b):", nextB);

// Sequência c) 0, 1, 4, 9, 16, 25, 36, ____
// Lógica: Quadrados dos números naturais.
const sequenceC = [0, 1, 4, 9, 16, 25, 36];
const nextC = Math.pow(sequenceC.length, 2);
console.log("Próximo elemento da sequência c):", nextC);

// Sequência d) 4, 16, 36, 64, ____
// Lógica: Quadrados dos números pares.
const sequenceD = [4, 16, 36, 64];
const nextD = Math.pow(sequenceD.length * 2, 2);
console.log("Próximo elemento da sequência d):", nextD);

// Sequência e) 1, 1, 2, 3, 5, 8, ____
// Lógica: Sequência de Fibonacci.
const sequenceE = [1, 1, 2, 3, 5, 8];
const nextE = sequenceE[sequenceE.length - 1] + sequenceE[sequenceE.length - 2];
console.log("Próximo elemento da sequência e):", nextE);

// Sequência f) 2,10, 12, 16, 17, 18, 19, ____
// Lógica: Aumenta em 2 para números pares e em 1 para ímpares.
const sequenceF = [2, 10, 12, 16, 17, 18, 19];
const nextF = sequenceF[sequenceF.length - 1] + (sequenceF.length % 2 === 0 ? 2 : 1);
console.log("Próximo elemento da sequência f):", nextF);