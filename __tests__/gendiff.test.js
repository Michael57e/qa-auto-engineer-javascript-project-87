import path from 'path'
import fs from 'fs'
import genDiff from '../src/index.js'

const getFixturePath = filename =>
  path.join('fixtures', filename)

const readFile = filename =>
  fs.readFileSync(getFixturePath(filename), 'utf-8')

const expectedStylish = readFile('expected-stylish.txt')
const expectedPlain = readFile('expected-plain.txt')
const expectedJson = readFile('expected-json.txt')
const expectedNestedStylish = readFile('expected-nested-stylish.txt')

describe('gendiff', () => {
  const formats = ['json', 'yml', 'yaml']

  test.each(formats)('compare %s files with stylish formatter', (format) => {
    const file1 = getFixturePath(`file1.${format}`)
    const file2 = getFixturePath(`file2.${format}`)

    expect(genDiff(file1, file2, 'stylish')).toEqual(expectedStylish)
  })

  test.each(formats)('compare %s files with plain formatter', (format) => {
    const file1 = getFixturePath(`file1.${format}`)
    const file2 = getFixturePath(`file2.${format}`)

    expect(genDiff(file1, file2, 'plain')).toEqual(expectedPlain)
  })

  test.each(formats)('compare %s files with json formatter', (format) => {
    const file1 = getFixturePath(`file1.${format}`)
    const file2 = getFixturePath(`file2.${format}`)

    expect(genDiff(file1, file2, 'json')).toEqual(expectedJson)
  })

  test('default formatter equals stylish', () => {
    const file1 = getFixturePath('file1.json')
    const file2 = getFixturePath('file2.json')

    expect(genDiff(file1, file2)).toEqual(
      genDiff(file1, file2, 'stylish'),
    )
  })
})

test('throws error on unknown input format', () => {
  const file1 = getFixturePath('file1.txt')
  const file2 = getFixturePath('file2.txt')

  expect(() => genDiff(file1, file2))
    .toThrow('Unknown format')
})

test('throws error on unknown formatter', () => {
  const file1 = getFixturePath('file1.json')
  const file2 = getFixturePath('file2.json')

  expect(() => genDiff(file1, file2, 'html'))
    .toThrow()
})

test('stylish formatter with nested objects', () => {
  const nested1 = getFixturePath('nested1.json')
  const nested2 = getFixturePath('nested2.json')

  expect(genDiff(nested1, nested2))
    .toEqual(expectedNestedStylish)
})
