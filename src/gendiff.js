import fs from 'fs'
//import path from 'path' // что это? можно убрать
import stylish from './stylish.js'

const parseJSON = (filepath) => {
  const content = fs.readFileSync(filepath, 'utf8')
  return JSON.parse(content)
};

export const genDiff = (filepath1, filepath2) => {
  const obj1 = parseJSON(filepath1)
  const obj2 = parseJSON(filepath2)

  const keys = Array.from(new Set([...Object.keys(obj1), ...Object.keys(obj2)]))
    .sort()

  const diff = {}

  keys.forEach((key) => {
    if (Object.hasOwn(obj1, key) && !Object.hasOwn(obj2, key)) {
      diff[key] = { type: 'removed', value: obj1[key] }
      return
    }

    if (!Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
      diff[key] = { type: 'added', value: obj2[key] }
      return
    }

    if (Object.is(obj1[key], obj2[key])) {
      diff[key] = { type: 'unchanged', value: obj1[key] }
      return
    }

    diff[key] = {
      type: 'changed',
      oldValue: obj1[key],
      newValue: obj2[key],
    }
  })

  return stylish(diff)
}
