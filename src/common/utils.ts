export const getToken = (): string | null => {
    const token = uni.getStorageSync('token') || uni.getStorageSync('uni_token');
    return token;
}

/**
 * 防抖函数
 * @param func 函数
 * @param delay 延迟时间（毫秒）
 */
export const debounce = (func: Function, delay: number) => {
    let timer: number;
    return function (this: any, ...args: any[]) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};

/**
 * 节流函数
 * @param func 函数
 * @param delay 延迟时间（毫秒）
 */
export const throttle = (func: Function, delay: number) => {
    let timer: number | null = null;
    return function (this: any, ...args: any[]) {
        if (!timer) {
            timer = setTimeout(() => {
                func.apply(this, args);
                timer = null;
            }, delay);
        }
    };
};

// 公共工具函数

// 将对象转为查询字符串
export function objToQueryString(obj: { [key: string]: any }): string {
    let queryString = "";
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            queryString += `${encodeURIComponent(key)}=${encodeURIComponent(
                obj[key]
            )}&`;
        }
    }
    return queryString.slice(0, -1);
}

export function queryStringToObj(queryString: string): { [key: string]: any } {
    const obj: { [key: string]: any } = {}; // 指定 obj 变量的类型为字符串到任意值的映射
    queryString.split("&").forEach((pair) => {
        const [key, value] = pair.split("=");
        obj[decodeURIComponent(key)] = decodeURIComponent(value);
    });
    return obj;
}


// 格式化时间戳
export function formatTimestamp(timestamp: number): string {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return `${year}-${addZero(month)}-${addZero(day)} ${addZero(
        hour
    )}:${addZero(minute)}:${addZero(second)}`;
}

// 在数字前补0
function addZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
}
