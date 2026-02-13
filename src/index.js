import buildDiff from './buildDiff.js'
import formatters from './formatters/index.js'
import parse from './parsers.js'
import { readFile, getExtension } from './utils.js'

const readData = (filepath) => {
  const data = readFile(filepath)
  const format = getExtension(filepath)
  return parse(data, format)
}

export default (filepath1, filepath2, format = 'stylish') => {
  const data1 = readData(filepath1)
  const data2 = readData(filepath2)

  const diff = buildDiff(data1, data2)

  return formatters(diff, format)
}
