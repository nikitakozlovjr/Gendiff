import parse from "./parser.js";
import path from 'path';
import _ from 'lodash';

const buldpath = (file) => path.resolve(file);

const genDiff = (file1, file2) => {
    const filepath1 = buldpath(file1);
    const filepath2 = buldpath(file2);

    const [data1, data2] = [filepath1, filepath2].map((filepath) => parse(filepath));

    const keys1 = _.sortBy(Object.keys(data1));
    const keys2 = _.sortBy(Object.keys(data2));

    const keys = _.uniq(keys1.concat(keys2));

    const diff = keys.map((key) => {
        if(!Object.hasOwn(data1, key)) {
            return {key: key, value: data2[key], status: 'added'}
        }
        if(!Object.hasOwn(data2, key)) {
            return {key: key, value: data1[key], status: 'deleted'}
        }
        if(data1[key] === data2[key]) {
            return {key: key, value: data1[key], status: 'equal'}
        }
        if(data1[key] !== data2[key]) {
            return {key: key, value1: data1[key], value2: data2[key], status: 'unequal'}
        }
    })

    return diff;
};

export default genDiff;