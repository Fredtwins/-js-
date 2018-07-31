const fs = require('fs')
fs.readFile('./json.json', 'utf8', function(err, data){
    fs.writeFileSync('./message.json',data.replace(/\"/g,'\'')); 
});

//console.log(fs)
