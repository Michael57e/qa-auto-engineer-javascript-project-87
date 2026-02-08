import genDiff from '../src/index.js'
import path from 'path'

const filepath1 = path.join('__tests__', 'fixtures', 'file1.json')
const filepath2 = path.join('__tests__', 'fixtures', 'file2.json')

test('plain format', () => {
  const diff = genDiff(filepath1, filepath2, 'plain')

  expect(diff).toBe(
    `Property 'follow' was removed
Property 'proxy' was removed
Property 'timeout' was updated. From 50 to 20
Property 'verbose' was added with value: true`,
  )
})
