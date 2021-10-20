/* eslint-disable no-useless-escape */
/**
 * 检查一个数num 是否符合判断条件
 * condition 格式：=1, >1, <5, <=5, >=5, =>1 & <=5, =>1 && <=5
 * 如 numberInRange(4,'>2 && <=5')
 */
export function numberInRange(num: number, condition: string): boolean | null {
  // 检查表达式合格
  const isNumber = /(\-|\+)?\d+(\.\d+)?$/.test(String(num))
  const isCondition = /^(<|<=|=|>|>=)\s?(\-|\+)?\d+(\.\d+)?$/.test(condition) || /^(>|>=|<|<=)\s?(\-|\+)?\d+(\.\d+)?\s?(\&|\&\&)\s?(>|>=|<|<=)\s?(\-|\+)?\d+(\.\d+)?$/.test(condition)

  if (!isNumber || !isCondition) return null

  const isRange = condition.includes('&')
  let compareExpression
  if (isRange) {
    const mateConditions = condition.match(/(<|<=|>|>=)\s?(\-|\+)?\d+(\.\d+)?/g)
    compareExpression = `${num} ${mateConditions[0]} & ${num} ${mateConditions[1]}`
  } else {
    compareExpression = `${num} ${condition}`
  }
  // eslint-disable-next-line no-eval
  return !!eval(compareExpression)
}