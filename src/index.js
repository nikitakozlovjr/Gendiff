import parse from "./parser.js";
import path from 'path';

const buldpath = (file) => path.resolve(file);

const genDiff = (file1, file2) => {
    const filepath1 = buldpath(file1);
    const filepath2 = buldpath(file2);

    return [filepath1, filepath2].map((filepath) => parse(filepath));
};

export default genDiff;