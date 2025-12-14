import fs from 'fs'
// import path from 'path' // что это? можно убрать
import stylish from './stylish.js'

const parseJSON = (filepath) => {
  const content = fs.readFileSync(filepath, 'utf8')
  return JSON.parse(content)
}

export const genDiff = (filepath1, filepath2) => {
  const obj1 = parseJSON(filepath1)
  const obj2 = parseJSON(filepath2)

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
      }
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
