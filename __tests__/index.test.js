import fs from 'fs';
import fsp from 'fs/promises'
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

// -------------------- Получение данных из файлов для сверки результата -------------------
const reconciliationFile = ['expectFlatObj.txt', 'expectNestedObj.txt', 'expectPlainFormat.txt'];
const promises = reconciliationFile.map((filename) => fsp.readFile(getPath(filename), 'utf-8'));
const [expectFlatObj, expectNestedObj, expectPlainFormat] = await Promise.all(promises);
// -----------------------------------------------------------------------------------------


test('Reconciliation of flat files', () => {
    expect(genDiff('file1.json', 'file2.json')).toEqual(expectFlatObj);
    expect(genDiff('file1.yml', 'file2.yml')).toEqual(expectFlatObj);
})

test('Reconciliation of nested files', () => {
    expect(genDiff('file3.json', 'file4.json')).toEqual(expectNestedObj);
    expect(genDiff('file3.yml', 'file4.yml')).toEqual(expectNestedObj);
})

test('Checking the correctness of the plain formatter', () => {
    expect(genDiff('file3.json', 'file4.json', 'plain')).toEqual(expectPlainFormat);
    expect(genDiff('file3.yml', 'file4.yml', 'plain')).toEqual(expectPlainFormat);
})

test('Checking the correct operation of the parser', () => {
    expect(() => genDiff('file1.false', 'file2.false', 'plain')).toThrow('Неподдерживаемый формат файла');
})