const replacer = ' '
const spacesCount = 4

const getIndent = (depth) => replacer.repeat(depth * spacesCount)
const getBracketIndent = (depth) => replacer.repeat(depth * spacesCount - spacesCount)

const stringify = (value, depth) => {
  if (value === null || typeof value !== 'object') {
    return String(value)
  }

  const lines = Object.entries(value).map(
    ([key, val]) =>
      `${getIndent(depth + 1)}${key}: ${stringify(val, depth + 1)}`,
  )

  return [
    '{',
    ...lines,
    `${getBracketIndent(depth + 1)}}`,
  ].join('\n')
}

const iter = (nodes, depth = 0) => {
  const lines = nodes.flatMap((node) => {
    const indent = getIndent(depth + 1)
    const signIndent = replacer.repeat((depth + 1) * spacesCount - 2)

    switch (node.type) {
      case 'added':
        return `${signIndent}+ ${node.key}: ${stringify(node.value, depth + 1)}`

      case 'removed':
        return `${signIndent}- ${node.key}: ${stringify(node.value, depth + 1)}`

      case 'unchanged':
        return `${indent}${node.key}: ${stringify(node.value, depth + 1)}`

      case 'changed':
        return [
          `${signIndent}- ${node.key}: ${stringify(node.oldValue, depth + 1)}`,
          `${signIndent}+ ${node.key}: ${stringify(node.newValue, depth + 1)}`,
        ]

      case 'nested':
        return `${indent}${node.key}: ${iter(node.children, depth + 1)}`

      default:
        throw new Error(`Unknown node type: ${node.type}`)
    }
  })

  return [
    '{',
    ...lines,
    `${getBracketIndent(depth + 1)}}`,
  ].join('\n')
}

export default iter
