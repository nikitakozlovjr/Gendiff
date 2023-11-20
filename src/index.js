import parse from "./parser.js";
import path from 'path';

const buldpath = (file) => path.resolve(file);

const genDiff = (file1, file2) => {
    const filepath1 = buldpath(file1);
    const filepath2 = buldpath(file2);

    const [data1, data2] = [filepath1, filepath2].map((filepath) => parse(filepath));

    const keys1 = Object.keys(data1).sort();
    // const keys2 = Object.keys(data2).sort();

    const diff = keys1.map((key) => {
        if(data1[key] === data2[key]) {
            return {key: key, value: data1[key], status: 'equal'}
        }
        if(data1[key] !== data2[key]) {
            return {key: key, value1: data1[key], value2: data2[key], status: 'unequal'}
        }
        if(data1.hasOwnProperty(key)) {
            return {key: key, value: data1[key], status: 'deleted'}
        }
        if(data2.hasOwnProperty(key)) {
            return {key: key, value: data2[key], status: 'added'}
        }
    })

    return diff;
};

export default genDiff;