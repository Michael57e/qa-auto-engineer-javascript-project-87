import stylish from './stylish.js'
import parse from './parsers.js'
import { readFile, getExtension } from './utils.js'

const genDiff = (filepath1, filepath2) => {
  const data1 = readFile(filepath1)
  const data2 = readFile(filepath2)

  const ext1 = getExtension(filepath1)
  const ext2 = getExtension(filepath2)

  const obj1 = parse(data1, ext1)
  const obj2 = parse(data2, ext2)

  const diff = {}

  for (const key of Object.keys(obj1)) {
    if (!Object.hasOwn(obj2, key)) {
      diff[key] = { type: 'removed', value: obj1[key] }
    } else if (Object.is(obj1[key], obj2[key])) {
      diff[key] = { type: 'unchanged', value: obj1[key] }
    } else {
      diff[key] = {
        type: 'changed',
        oldValue: obj1[key],
        newValue: obj2[key],
      };
    }
  }

  for (const key of Object.keys(obj2)) {
    if (!Object.hasOwn(obj1, key)) {
      diff[key] = { type: 'added', value: obj2[key] }
    }
  }

  const sortedDiff = Object.keys(diff)
    .sort()
    .reduce((acc, key) => {
      acc[key] = diff[key]
      return acc
    }, {})

  return stylish(sortedDiff)
}

export default genDiff

