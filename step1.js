const fs = require('fs');

function cat(path) {
    fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
            console.log(error);
            process.exit(1);
        }
        console.log(data);
    })
}

cat(process.argv[2]);