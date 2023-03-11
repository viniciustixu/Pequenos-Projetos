const fs = require('fs'); // Módulo do Node.js para leitura de arquivos
const jsonString = fs.readFileSync('arquivo.json', 'utf-8'); // Lê o arquivo e armazena em uma variável
const arquivo = JSON.parse(jsonString);

console.log(arquivo.uva.preco);