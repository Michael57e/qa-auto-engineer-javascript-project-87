### Hexlet tests and linter status:
[![Actions Status](https://github.com/Michael57e/qa-auto-engineer-javascript-project-87/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Michael57e/qa-auto-engineer-javascript-project-87/actions)

[![Quality Gate](https://sonarcloud.io/api/project_badges/measure?project=Michael57e_qa-auto-engineer-javascript-project-87&metric=alert_status)](https://sonarcloud.io/dashboard?id=Michael57e_qa-auto-engineer-javascript-project-87)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Michael57e_qa-auto-engineer-javascript-project-87&metric=coverage)](https://sonarcloud.io/dashboard?id=Michael57e_qa-auto-engineer-javascript-project-87)


## Пример использования:

```
gendiff __fixtures__/file1.json __fixtures__/file2.json
```

### Результат:

```
{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}
```

### Пример работы пакета

Смотри демонстрацию работы пакета в терминале:

[![asciicast](https://asciinema.org/a/bYM7wqcV11xqAi5BIJGuglLL7.svg)](https://asciinema.org/a/bYM7wqcV11xqAi5BIJGuglLL7)



### gendiff

Сравнение двух файлов конфигурации в форматах JSON или YAML.

#### Пример работы:

```
gendiff __fixtures__/file1.json __fixtures__/file2.json --format plain
```

Вывод plain:
```
Property 'follow' was removed
Property 'proxy' was removed
Property 'timeout' was updated. From 50 to 20
Property 'verbose' was added with value: true
```

### Пример работы пакета

Смотри демонстрацию работы пакета в терминале:

[![asciicast](https://asciinema.org/a/4Z3BMuW1K9Nz6nV95HWtmcTag.svg)](https://asciinema.org/a/4Z3BMuW1K9Nz6nV95HWtmcTag)


### Пример работы:

```
gendiff __fixtures__/file1.json __fixtures__/file2.json --format json
```

Вывод json:
```
{
  "follow": { "type": "removed", "value": false },
  "host": { "type": "unchanged", "value": "hexlet.io" },
  "proxy": { "type": "removed", "value": "123.234.53.22" },
  "timeout": { "type": "changed", "oldValue": 50, "newValue": 20 },
  "verbose": { "type": "added", "value": true }
}
```
### Пример работы пакета

Смотри демонстрацию работы пакета в терминале:

[![asciicast](https://asciinema.org/a/QZi9HKl4mXOUAMnlIRafqaa8R.svg)](https://asciinema.org/a/QZi9HKl4mXOUAMnlIRafqaa8R)