/**
 * 将object转义后传入url
 */
export function encodeJSON(value: object): string {
  return encodeURIComponent(JSON.stringify(value))
}

/**
 * 对url的参数进行解析，解析成object
 */
export function decodeJSON(value: string): object {
  return JSON.parse(decodeURIComponent(value))
}