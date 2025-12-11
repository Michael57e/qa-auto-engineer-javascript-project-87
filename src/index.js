/*import { readFile, getExtension } from './utils.js'
import parse from './parsers.js'
import buildDiff from './buildDiff.js'

export default function genDiff(filepath1, filepath2) {
  const data1 = readFile(filepath1)
  const data2 = readFile(filepath2)

  const ext1 = getExtension(filepath1)
  const ext2 = getExtension(filepath2)

  const obj1 = parse(data1, ext1)
  const obj2 = parse(data2, ext2)

  const diff = buildDiff(obj1, obj2)

  return JSON.stringify(diff, null, 2)
}
  предыдущая версия. вроде без нее все работает ок
*/
import fs from 'fs'
import path from 'path'
import buildDiff from './buildDiff.js'
import stylish from './stylish.js'

const getPath = (filepath) => path.resolve(process.cwd(), filepath)
const readFile = (filepath) => JSON.parse(fs.readFileSync(getPath(filepath)))

export default (filepath1, filepath2, format = 'stylish') => {
  const obj1 = readFile(filepath1)
  const obj2 = readFile(filepath2)

  const diff = buildDiff(obj1, obj2)

  if (format === 'stylish') {
    return stylish(diff)
  }

  return diff
}