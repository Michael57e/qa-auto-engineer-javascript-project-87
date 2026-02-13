import buildDiff from './buildDiff.js'
import formatters from './formatters/index.js'
import parse from './parsers.js'
import { readFile, getExtension } from './utils.js'

export default (filepath1, filepath2, format = 'stylish') => {
  const data1 = readFile(filepath1)
  const data2 = readFile(filepath2)

  const ext1 = getExtension(filepath1)
  const ext2 = getExtension(filepath2)

  const parsedData1 = parse(data1, ext1)
  const parsedData2 = parse(data2, ext2)

  const diff = buildDiff(parsedData1, parsedData2)

  return formatters(diff, format)
}
