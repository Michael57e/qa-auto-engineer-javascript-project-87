const stringify = (value) => {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]'
  }

  if (typeof value === 'string') {
    return `'${value}'`
  }

  return String(value)
}

const plain = (diff, parent = '') => {
  const lines = diff.flatMap((node) => {
    const property = parent ? `${parent}.${node.key}` : node.key

    switch (node.type) {
      case 'added':
        return `Property '${property}' was added with value: ${stringify(node.value)}`

      case 'removed':
        return `Property '${property}' was removed`

      case 'changed':
        return `Property '${property}' was updated. From ${stringify(node.oldValue)} to ${stringify(node.newValue)}`

      case 'nested':
        return plain(node.children, property)

      default:
        return []
    }
  })

  return lines.join('\n')
}

export default plain
