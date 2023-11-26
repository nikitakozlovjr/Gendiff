[![Maintainability](https://api.codeclimate.com/v1/badges/6739e7a10f4ae9ea5dba/maintainability)](https://codeclimate.com/github/nikitakozlovjr/genDiff/maintainability) [![test](https://github.com/nikitakozlovjr/genDiff/actions/workflows/run_tests.yml/badge.svg)](https://github.com/nikitakozlovjr/genDiff/actions/workflows/run_tests.yml) [![Test Coverage](https://api.codeclimate.com/v1/badges/6739e7a10f4ae9ea5dba/test_coverage)](https://codeclimate.com/github/nikitakozlovjr/genDiff/test_coverage)

# genDiff
___
Консольная утилита, которая принимает две структуры данных в качестве входных данных и выводит их различия в ходе предыдущих изменений.

### Информация о функциях утилиты:
___

##### Поддерживаемые расширения сверяемых файлов
- Json
- Yaml(yml)

##### Поддеживаемые форматы вывода результата

- Stylish
- Plain
- Json

### Инструкция установки
___

Склонируйте данный репозиторий `git clone` и выполните следующие команды:

```
make install
```

```
sudo npm link
```

### Информация об использовании:

____

Введите команду ниже в консоли и проверьте информацию

```
gendiff -h
```

```
Usage: genDiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format <type>  output format
  -h, --help           display help for command
```

### Примеры работы с утилитой
____

##### Сравнение плоских файлов (.JSON)
[![asciicast](https://asciinema.org/a/K9WP44V4ow0pDzXGk2y6qIjgn.svg)](https://asciinema.org/a/K9WP44V4ow0pDzXGk2y6qIjgn)

#### Сравнение плоских файлов (.Yaml, .yml)
[![asciicast](https://asciinema.org/a/SUDoGGozFYkM2nxPecFpRQw26.svg)](https://asciinema.org/a/SUDoGGozFYkM2nxPecFpRQw26)

#### Рекурсивное сравнение вложенных файлов формат stylish(.JSON)

[![asciicast](https://asciinema.org/a/sSgr5ASGBWRafeA4CFe4h6y2m.svg)](https://asciinema.org/a/sSgr5ASGBWRafeA4CFe4h6y2m)
#### Рекурсивное сравнение вложенных файлов формат plain(.JSON)

[![asciicast](https://asciinema.org/a/prVzvPQgQJ76qLHZbAhdNrpkq.svg)](https://asciinema.org/a/prVzvPQgQJ76qLHZbAhdNrpkq)
#### Рекурсивное сравнение вложенных файлов формат json(.JSON)

[![asciicast](https://asciinema.org/a/dA92FzvC5MpCl6bDKzeKaX6t3.svg)](https://asciinema.org/a/dA92FzvC5MpCl6bDKzeKaX6t3)