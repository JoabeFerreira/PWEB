const fs = require('fs');
const data = fs.readFileSync('file.txt');
//A execução pe bloqueada aqui até o arquivo ser lido
console.log(data.toString());