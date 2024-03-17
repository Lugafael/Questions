// Função para embaralhar um array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Função principal
function assignLampsToSwitches(numLamps) {
  // Array para armazenar o estado das lâmpadas
  let lamps = [];
  for (let i = 0; i < numLamps; i++) {
    lamps.push(i + 1); // Inicialmente, cada lâmpada é representada por um número
  }

  // Array para armazenar as atribuições de lâmpadas para interruptores
  let assignments = [];

  // Array para representar os interruptores
  let switches = [];
  for (let i = 0; i < numLamps; i++) {
    switches.push(i + 1);
  }

  // Embaralhar os interruptores
  switches = shuffleArray(switches);

  // Atribuir lâmpadas aos interruptores
  for (let i = 0; i < numLamps; i++) {
    const lamp = lamps.splice(Math.floor(Math.random() * lamps.length), 1)[0];
    const switchNum = switches[i];
    assignments.push({ lamp, switchNum });
  }

  return assignments;
}

// Exemplo de uso
const numLamps = 3;
const assignments = assignLampsToSwitches(numLamps);

// Exibir atribuições
assignments.forEach((assignment) => {
  console.log(`Interruptor ${assignment.switchNum} liga à lâmpada ${assignment.lamp}`);
});
