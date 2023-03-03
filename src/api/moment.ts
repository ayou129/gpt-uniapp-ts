import moment from 'moment';

/**
 * 日期格式化
 * @param date 日期
 * @param format 格式化字符串
 */
export function formatDate(date: Date | string, format = 'YYYY-MM-DD HH:mm:ss'): string {
    return moment(date).format(format);
}

/**
 * 相对时间格式化
 * @param date 日期
 */
export function fromNow(date: Date | string): string {
    return moment(date).fromNow();
}

/**
 * 获取时间戳
 * @param date 日期
 */
export function getTimestamp(date: Date | string): number {
    return moment(date).unix();
}
