import fs from 'fs'
import path from 'path'

export const getExtension = (filepath) =>
  path.extname(filepath).toLowerCase()

export const readFile = (filepath) => {
  const fullPath = path.resolve(process.cwd(), filepath)
  return fs.readFileSync(fullPath, 'utf-8')
}