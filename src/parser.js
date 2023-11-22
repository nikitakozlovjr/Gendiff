import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';

const supportedExtensions = ['json', 'yml'];

const parse = {
    json: JSON.parse,
    yml: yaml.load
}


export default (filepath) => {
    const extension = path.extname(filepath).slice(1);
    if(!supportedExtensions.includes(extension)) {
        throw new Error(`Данная утилита не поддерживает ${extension}-файлов`)
    }

    const content = fs.readFileSync(filepath, 'utf-8');
    return parse[extension](content);
};