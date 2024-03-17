const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

rl.question('Digite uma string: ', (inputString) => {
    const reversedString = reverseString(inputString);
    console.log("String original:", inputString);
    console.log("String invertida:", reversedString);
    rl.close();
});
