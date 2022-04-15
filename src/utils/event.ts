/**
 * 防抖函数
 */
export const debounce = (fn, delay) => {
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

/**
 * 节流函数
 * @param fn 待节流函数
 * @param delay 延时时间
 */
export const throttle = (fn, delay = 500) => {
    let flag = true;
    return (...args) => {
        if (!flag) return;
        flag = false;
        setTimeout(() => {
            fn.apply(this, args)
        }, delay);

    }
}
