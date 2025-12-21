const indent = '  '

const stringify = (value) => {
  if (value !== null && typeof value === 'object') {
    const entries = Object.entries(value)
      .map(([key, val]) => `${indent}${indent}${key}: ${stringify(val)}`)
      .join('\n')
    return `{\n${entries}\n${indent}}`
  }
  return String(value)
}

const stylish = (diff) => {
  const lines = Object.entries(diff).map(([key, node]) => {
    switch (node.type) {
      case 'added':
        return `${indent}+ ${key}: ${stringify(node.value)}`
      case 'removed':
        return `${indent}- ${key}: ${stringify(node.value)}`
      case 'unchanged':
        return `${indent}  ${key}: ${stringify(node.value)}`
      case 'changed':
        return [
          `${indent}- ${key}: ${stringify(node.oldValue)}`,
          `${indent}+ ${key}: ${stringify(node.newValue)}`
        ].join('\n')
      default:
        return ''
    }
  })

  return `{\n${lines.join('\n')}\n}`
}

export default stylish
