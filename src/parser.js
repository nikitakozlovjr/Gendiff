import fs from 'fs';

const parse = (filepath) => {
    const content = fs.readFileSync(filepath, 'utf-8');
    return JSON.parse(content);
}

export default parse;