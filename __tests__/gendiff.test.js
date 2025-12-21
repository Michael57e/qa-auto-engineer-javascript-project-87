import path from 'path'
import fs from 'fs'
import gendiff from '../src/index.js'

const getFixturePath = (filename) =>
  path.join(__dirname, '..', '__fixtures__', filename)

const readExpected = (filename) =>
  fs.readFileSync(getFixturePath(filename), 'utf8').trimEnd()

describe('gendiff', () => {
  const expected = readExpected('expected.txt')

  test('compares two JSON files', () => {
    const filepath1 = getFixturePath('file1.json')
    const filepath2 = getFixturePath('file2.json')

    const result = gendiff(filepath1, filepath2)

    expect(result).toBe(expected)
  })

  test('compares two YML files', () => {
    const filepath1 = getFixturePath('file1.yml')
    const filepath2 = getFixturePath('file2.yml')

    const result = gendiff(filepath1, filepath2)

    expect(result).toBe(expected)
  })

  test('compares two YAML files', () => {
    const filepath1 = getFixturePath('file1.yaml')
    const filepath2 = getFixturePath('file2.yaml')

    const result = gendiff(filepath1, filepath2)

    expect(result).toBe(expected)
  })
})

