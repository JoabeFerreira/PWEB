const fs = require('fs');
const { format } = require('path');
fs.readFile('file.txt', (err, data) => {
    if(err) throw err;
        console.log("\n"+data.toString())
});
for(var i=1;i<=10;i++)
    console.log("Segunda parte = "+i);