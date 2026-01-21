# Gendiff — утилита для сравнения конфигурационных файлов

### Hexlet tests and linter status:
[![Actions Status](https://github.com/Michael57e/qa-auto-engineer-javascript-project-87/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Michael57e/qa-auto-engineer-javascript-project-87/actions)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Michael57e_qa-auto-engineer-javascript-project-87&metric=coverage)](https://sonarcloud.io/summary/new_code?id=Michael57e_qa-auto-engineer-javascript-project-87)

[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=Michael57e_qa-auto-engineer-javascript-project-87&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=Michael57e_qa-auto-engineer-javascript-project-87)

## Описание проекта

**Gendiff** - это консольная утилита для сравнения двух конфигурационных файлов. Она показывает различия между файлами в удобном для чтения виде и поддерживает несколько форматов вывода.

Поддерживаемые форматы входных файлов:
* JSON
* YAML/YML

## Установка

#### Требования
* Node.js версии 18 и выше
* npm

Склонируйте репозиторий:
```
git clone git@github.com:Michael57e/qa-auto-engineer-javascript-project-87.git
cd qa-auto-engineer-javascript-project-87
```

Из корневой папки проекта установить зависимости:
```
npm install
```
Запустить проект:
```
npm start
```

Глобальная установка (опционально)
```
npm link
```
*После этого утилита будет доступна как команда gendiff из любого места в системе.*

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


### Что реализовано в проекте

* CLI-утилита для сравнения конфигурационных файлов
* Парсинг JSON и YAML файлов
* Форматирование результата в трёх форматах (json, yaml, yml)
* Автоматические тесты (Jest)
* Проверка качества кода и покрытия (GitHub Actions, SonarCloud)

### Используемые технологии

* JavaScript
* Node.js
* Commander.js
* js-yaml
* Jest
* ESLint
* GitHub Actions
* SonarCloud


#### Примечания

Проект выполнен в рамках обучения в школе Hexlet
