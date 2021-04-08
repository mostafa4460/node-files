const fs = require('fs'),
    axios = require('axios');

function handleError(err) {
    console.log(err);
    process.exit(1);
}

function readFile(path) {
    try {
        return fs.readFileSync(path, 'utf8');
    } catch(err) {
        handleError(err);
    }
}

function writeFile(path, data) {
    try {
        fs.writeFileSync(path, data, 'utf8');
    } catch(err) {
        handleError(err);
    }
}

function cat(path) {
    const data = readFile(path);
    console.log(data);
}

function catWrite(path, filePath) {
    const data = readFile(filePath);
    writeFile(path, data);
}

async function webCat(URL) {
    try {
        const res = await axios.get(URL);
        console.log(res.data);    
    } catch(err) {
        handleError(err);
    }
}

async function webCatWrite(path, URL) {
    try {
        const {data} = await axios.get(URL);
        writeFile(path, data);
    } catch(err) {
        handleError(err);
    }
}

if (process.argv.length === 3 && process.argv[2].endsWith('.txt')) {
    cat(process.argv[2]);
} else if (process.argv.length === 3 && !process.argv[2].endsWith('.txt')) {
    webCat(process.argv[2]);
} else if (process.argv.length === 4 && process.argv[3].endsWith('.txt')) {
    catWrite(process.argv[2], process.argv[3]);
} else if (process.argv.length === 4 && !process.argv[3].endsWith('.txt')) {
    webCatWrite(process.argv[2], process.argv[3]);
}