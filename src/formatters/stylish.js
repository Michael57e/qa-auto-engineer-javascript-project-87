const spacesCount = 4
const indentSize = spacesCount - 2

const getIndent = depth => ' '.repeat(depth * spacesCount - indentSize)
const getBracketIndent = depth => ' '.repeat(depth * spacesCount - spacesCount)

const stringify = (value, depth) => {
  if (value === null || typeof value !== 'object') {
    return String(value)
  }

  const lines = Object.entries(value).map(
    ([key, val]) =>
      `${getIndent(depth + 1)}  ${key}: ${stringify(val, depth + 1)}`,
  )

  return [
    '{',
    ...lines,
    `${getBracketIndent(depth + 1)}}`,
  ].join('\n')
}

const iter = (nodes, depth = 1) => {
  const lines = nodes.flatMap((node) => {
    switch (node.type) {
      case 'added':
        return `${getIndent(depth)}+ ${node.key}: ${stringify(node.value, depth)}`

      case 'removed':
        return `${getIndent(depth)}- ${node.key}: ${stringify(node.value, depth)}`

      case 'unchanged':
        return `${getIndent(depth)}  ${node.key}: ${stringify(node.value, depth)}`

      case 'changed':
        return [
          `${getIndent(depth)}- ${node.key}: ${stringify(node.oldValue, depth)}`,
          `${getIndent(depth)}+ ${node.key}: ${stringify(node.newValue, depth)}`,
        ]

      case 'nested':
        return `${getIndent(depth)}  ${node.key}: ${iter(node.children, depth + 1)}`

      default:
        throw new Error(`Unknown type: ${node.type}`)
    }
  })

  return [
    '{',
    ...lines,
    `${getBracketIndent(depth)}}`,
  ].join('\n')
}

export default iter
