import camelCase from 'lodash/camelCase'
import isPlainObject from 'lodash/fp/isPlainObject'
/**
 * 转换对象所有层级的属性名为camelCase
 * @param {Object} obj
 * @return {Object} 返回一个 camelCase keys的obj
 */
export function deepCamelize(obj: object): object {
  if (!isPlainObject(obj) && !Array.isArray(obj)) return obj

  if (isPlainObject(obj)) return camelizePlainObject(obj)

  if (Array.isArray(obj)) return obj.map(k => isPlainObject(k) ? camelizePlainObject(k) : k)
}

const camelizePlainObject = (obj) => {
  return Object.entries(obj).reduce((result, [key, val]) =>
    Object.assign(result, {
      [camelCase(key)]: deepCamelize(val)
    })
    , {})
}