const stylish = (diff) => {
  const lines = Object.entries(diff).map(([key, node]) => {
    switch (node.type) {
      case 'added':
        return `+ ${key}: ${node.value}`
      case 'removed':
        return `- ${key}: ${node.value}`
      case 'unchanged':
        return `  ${key}: ${node.value}`
      case 'changed':
        return [`- ${key}: ${node.oldValue}`, `+ ${key}: ${node.newValue}`].join('\n')
      default:
        return ''
    }
  })

  return `{\n${lines.join('\n')}\n}`
}

export default stylish
