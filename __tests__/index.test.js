import fsp from 'fs/promises'
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';
import { describe } from 'yargs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

// -------------------- Получение данных из файлов для сверки результата -------------------
const reconciliationFile = ['expectFlatObj.txt', 'expectNestedObj.txt', 'expectPlainFormat.txt'];
const promises = reconciliationFile.map((filename) => fsp.readFile(getPath(filename), 'utf-8'));
// -----------------------------------------------------------------------------------------

// ----------- Переменные хранят правильные данные, использующиеся для проверки ------------
const extentions = ['json', 'yml'];
const [expectFlatObj, expectNestedObj, expectPlainFormat] = await Promise.all(promises);
// -----------------------------------------------------------------------------------------

describe('Correct flat file comparison', () => {
    test.each(extentions)('flat test %s', (extension) => {
      const filepath1 = getPath(`file1.${extension}`);
      const filepath2 = getPath(`file2.${extension}`);
  
      expect(genDiff(filepath1, filepath2)).toEqual(expectFlatObj);
      expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(expectFlatObj);
    });
  });
  
  describe('Correct nested file comparison', () => {
    test.each(extentions)('nested test %s', (extension) => {
      const filepath1 = getPath(`file3.${extension}`);
      const filepath2 = getPath(`file4.${extension}`);

      expect(genDiff(filepath1, filepath2)).toEqual(expectNestedObj);
      expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(expectNestedObj);
    })
  });

  describe('Correct plain of formatters', () => {
    test.each(extentions)('extention %s', (extention) => {
      const filepath3 = getPath(`file3.${extention}`);
      const filepath4 = getPath(`file4.${extention}`);

      expect(genDiff(filepath3, filepath4, 'plain')).toEqual(expectPlainFormat);
    })
  })