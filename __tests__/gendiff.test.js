import path from 'path'
import fs from 'fs'
import genDiff from '../src/index.js'

const getFixturePath = (filename) =>
  path.join('__fixtures__', filename)

const readFile = (filename) =>
  fs.readFileSync(getFixturePath(filename), 'utf-8')

const expectedStylish = readFile('expectedStylish.txt')
const expectedPlain = readFile('expectedPlain.txt')
const expectedJson = readFile('expectedJson.txt')

describe('gendiff', () => {
  const formats = ['json', 'yml', 'yaml']

  test.each(formats)('compare %s files with default formatter', (format) => {
    const file1 = getFixturePath(`file1.${format}`)
    const file2 = getFixturePath(`file2.${format}`)

    expect(genDiff(file1, file2)).toEqual(expectedStylish)
  })

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
})
