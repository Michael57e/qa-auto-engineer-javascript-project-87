export default function buildDiff(obj1, obj2) {
  const keys = Array.from(new Set([...Object.keys(obj1), ...Object.keys(obj2)])).sort((a, b) => a.localeCompare(b))

  const diff = {}

  keys.forEach((key) => {
    if (!Object.hasOwn(obj2, key)) {
      diff[key] = { type: 'removed', value: obj1[key] }
    }
    else if (!Object.hasOwn(obj1, key)) {
      diff[key] = { type: 'added', value: obj2[key] }
    }
    else if (obj1[key] === obj2[key]) {
      diff[key] = {
        type: 'unchanged',
        value: obj1[key],
      }
    }
    else {
      diff[key] = {
        type: 'changed',
        oldValue: obj1[key],
        newValue: obj2[key],
      }
    }
  })

  return diff
}
