const isObject = (value) =>
  value !== null && typeof value === 'object' && !Array.isArray(value)

export default function buildDiff(data1, data2) {
  const keys = Array.from(
    new Set([...Object.keys(data1), ...Object.keys(data2)]),
  ).sort((a, b) => a.localeCompare(b))

  return keys.map((key) => {
    if (!Object.hasOwn(data2, key)) {
      return {
        type: 'removed',
        key,
        value: data1[key],
      }
    }

    if (!Object.hasOwn(data1, key)) {
      return {
        type: 'added',
        key,
        value: data2[key],
      }
    }

    if (isObject(data1[key]) && isObject(data2[key])) {
      return {
        type: 'nested',
        key,
        children: buildDiff(data1[key], data2[key]),
      }
    }

    if (data1[key] === data2[key]) {
      return {
        type: 'unchanged',
        key,
        value: data1[key],
      }
    }

    return {
      type: 'changed',
      key,
      value1: data1[key],
      value2: data2[key],
    }
  })
}
