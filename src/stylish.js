//const indent = (depth) => '  '.repeat(depth) - убрать!

export default (diff) => {
  const lines = Object.entries(diff).flatMap(([key, info]) => {
    const { type } = info

    switch (type) {
      case 'removed':
        return [`  - ${key}: ${info.value}`]

      case 'added':
        return [`  + ${key}: ${info.value}`]

      case 'unchanged':
        return [`    ${key}: ${info.value}`]

      case 'changed':
        return [
          `  - ${key}: ${info.oldValue}`,
          `  + ${key}: ${info.newValue}`,
        ];

      default:
        throw new Error(`Unknown type: ${type}`)
    }
  })

  return ['{', ...lines, '}'].join('\n')
}
