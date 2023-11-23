import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const correctFlatDiff = fs.readFileSync(getPath('expectFlatObj.txt'), 'utf-8');
const correctNestedDiff = fs.readFileSync(getPath('expectNestedObj.txt'), 'utf-8');
const correctPlainFormat = fs.readFileSync(getPath('expectPlainFormat.txt'), 'utf-8');

test('Reconciliation of flat files', () => {
    expect(genDiff('file1.json', 'file2.json')).toEqual(correctFlatDiff);
    expect(genDiff('file1.yml', 'file2.yml')).toEqual(correctFlatDiff);
})

test('Reconciliation of nested files', () => {
    expect(genDiff('file3.json', 'file4.json')).toEqual(correctNestedDiff);
    expect(genDiff('file3.yml', 'file4.yml')).toEqual(correctNestedDiff);
})

test('Checking the correctness of the plain formatter', () => {
    expect(genDiff('file3.json', 'file4.json', 'plain')).toEqual(correctPlainFormat);
    expect(genDiff('file3.yml', 'file4.yml', 'plain')).toEqual(correctPlainFormat);
})