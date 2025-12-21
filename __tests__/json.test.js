import genDiff from '../../src/index.js'
import path from 'path'

const filepath1 = path.join('__fixtures__', 'file1.json')
const filepath2 = path.join('__fixtures__', 'file2.json')

test('json format', () => {
  const diff = genDiff(filepath1, filepath2, 'json')
  const parsed = JSON.parse(diff)

  expect(parsed).toEqual({
    follow: { type: 'removed', value: false },
    host: { type: 'unchanged', value: 'hexlet.io' },
    proxy: { type: 'removed', value: '123.234.53.22' },
    timeout: { type: 'changed', oldValue: 50, newValue: 20 },
    verbose: { type: 'added', value: true },
  })
})