const fs = require('fs'),
    axios = require('axios');

function cat(path) {
    fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
            console.log(error);
            process.exit(1);
        }
        console.log(data);
    })
}

async function webCat(URL) {
    try {
        const res = await axios.get(URL);
        console.log(res.data);    
    } catch(e) {
        console.log(e);
    }
}

process.argv[2].endsWith('.txt') ? cat(process.argv[2]) : webCat(process.argv[2]);