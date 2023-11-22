import parse from "./parser.js";
import path from 'path';
import getDiff from './getDiff.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const buldpath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const genDiff = (file1, file2) => {
    const filepath1 = buldpath(file1);
    const filepath2 = buldpath(file2);

    const [data1, data2] = [filepath1, filepath2].map((filepath) => parse(filepath));

    return getDiff(data1, data2);
};

export default genDiff;