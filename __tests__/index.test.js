import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const correctFlatDiff = fs.readFileSync(getPath('expectFlatObj.txt'), 'utf-8');

test('Reconciliation of flat JSON files', () => {
    expect(genDiff('../__fixtures__/file1.json', '../__fixtures__/file2.json')).toEqual(correctFlatDiff);
})