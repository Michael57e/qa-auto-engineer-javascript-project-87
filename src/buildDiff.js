const isObject = (value) =>
  value !== null && typeof value === 'object' && !Array.isArray(value)

export default function buildDiff(obj1, obj2) {
  const keys = Array.from(
    new Set([...Object.keys(obj1), ...Object.keys(obj2)]),
  ).sort((a, b) => a.localeCompare(b))

  return keys.map((key) => {
    if (!Object.hasOwn(obj2, key)) {
      return {
        type: 'removed',
        key,
        value: obj1[key],
      }
    }

    if (!Object.hasOwn(obj1, key)) {
      return {
        type: 'added',
        key,
        value: obj2[key],
      }
    }

    if (isObject(obj1[key]) && isObject(obj2[key])) {
      return {
        type: 'nested',
        key,
        children: buildDiff(obj1[key], obj2[key]),
      }
    }

    if (obj1[key] === obj2[key]) {
      return {
        type: 'unchanged',
        key,
        value: obj1[key],
      }
    }

    return {
      type: 'changed',
      key,
      oldValue: obj1[key],
      newValue: obj2[key],
    }
  })
}
