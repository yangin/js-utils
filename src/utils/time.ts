import moment from 'moment'

// 次日凌晨
const nextDayEarly = moment().add(1, 'day').format('YYYY-MM-DD 00:00:00')

// 空位补零, 将0-9的数字前面加上0\.  1变为01
function checkTime(i: number): string {
  return `${i < 10 ? '0' : ''}${i}`
}

/**
 * 当天剩余时间 
 * 格式：10:23:14
 */
export function restTimerToday(): string {
  // 当天剩余毫秒
  const minusTime = (new Date(nextDayEarly)) - (new Date())

  // 获取元素
  //  const days = parseInt(minusTime / 86400000);  //1天 = 86400000毫秒
  const hours = parseInt((minusTime % 86400000) / 3600000)// 1小时 = 3600000毫秒
  const minutes = parseInt((minusTime % 3600000) / 60000)// 1分钟 = 60000毫秒
  const seconds = parseInt((minusTime % 60000) / 1000)// 1秒 = 1000毫秒

  // 带入函数,获取新元素
  //  days = checkTime(days);
  const fullHours = checkTime(hours)
  const fullMinutes = checkTime(minutes)
  const fullSeconds = checkTime(seconds)

  // 获取最终时间
  return `${fullHours}:${fullMinutes}:${fullSeconds}`
}
