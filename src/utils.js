import fs from 'node:fs'
import path from 'node:path'

export const getExtension = filepath =>
  path.extname(filepath).toLowerCase()

export const readFile = (filepath) => {
  const fullPath = path.resolve(process.cwd(), filepath)
  return fs.readFileSync(fullPath, 'utf-8')
}
