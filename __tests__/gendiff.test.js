import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import gendiff from '../src/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = filename =>
  path.join(__dirname, '..', '__fixtures__', filename)

const readExpected = filename =>
  fs.readFileSync(getFixturePath(filename), 'utf8').trimEnd()

describe('gendiff', () => {
  const stylish = readExpected('expected-stylish.txt')
  const plain = readExpected('expected-plain.txt')
  const json = readExpected('expected-json.txt')

  const json1 = getFixturePath('file1.json')
  const json2 = getFixturePath('file2.json')

  const yml1 = getFixturePath('file1.yml')
  const yml2 = getFixturePath('file2.yml')

  const yaml1 = getFixturePath('file1.yaml')
  const yaml2 = getFixturePath('file2.yaml')

  test('stylish format (json)', () => {
    expect(gendiff(json1, json2)).toBe(stylish)
  })

  test('stylish format (yml)', () => {
    expect(gendiff(yml1, yml2)).toBe(stylish)
  })

  test('stylish format (yaml)', () => {
    expect(gendiff(yaml1, yaml2)).toBe(stylish)
  })

  test('plain format', () => {
    expect(gendiff(json1, json2, 'plain')).toBe(plain)
  })

  test('json format', () => {
    expect(gendiff(json1, json2, 'json')).toBe(json)
  })
})
