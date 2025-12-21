const stringify = (value) => {
  if (typeof value === 'object' && value !== null) return '[complex value]'
  if (typeof value === 'string') return `'${value}'`
  return value
}

const plain = (diff, parent = '') => {
  const lines = []

  for (const key of Object.keys(diff)) {
    const property = parent ? `${parent}.${key}` : key
    const node = diff[key]

    switch (node.type) {
      case 'added':
        lines.push(`Property '${property}' was added with value: ${stringify(node.value)}`)
        break
      case 'removed':
        lines.push(`Property '${property}' was removed`)
        break
      case 'changed':
        lines.push(
          `Property '${property}' was updated. From ${stringify(node.oldValue)} to ${stringify(node.newValue)}`
        )
        break
      case 'nested':
        lines.push(plain(node.children, property))
        break
      default:
        break
    }
  }

  return lines.join('\n')
}

export default plain
