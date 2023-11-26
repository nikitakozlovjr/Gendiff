import parse from "./parser.js";
import path from 'path';
import getDiff from './getDiff.js';
import formatter from './formatter/index.js';

const buldpath = (filepath) => path.resolve(process.cwd(), filepath).trim();

const genDiff = (file1, file2, format = 'stylish') => {
    const filepath1 = buldpath(file1);
    const filepath2 = buldpath(file2);

    const [data1, data2] = [filepath1, filepath2].map((filepath) => parse(filepath));

    const diff = getDiff(data1, data2);
    return formatter(format, diff)
};

export default genDiff;