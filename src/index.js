import fs from 'fs'
import path from 'path'

const readFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath)
  return fs.readFileSync(absolutePath, 'utf-8')
}

export default function genDiff(filepath1, filepath2) {
  const data1 = readFile(filepath1)
  const data2 = readFile(filepath2)

  return [
    '--- File 1 ---',
    data1,
    '--- File 2 ---',
    data2,
  ].join('\n')
}
