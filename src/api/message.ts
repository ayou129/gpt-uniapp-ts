/**
 * 消息相关模块
 */

// import request from '@/common/request';

// /**
//  * 获取消息列表
//  */
// export function getMessageList() {
//     return request({
//         url: '/messages',
//         method: 'get'
//     });
// }

// /**
//  * 发送消息
//  * @param toUserId 接收消息的用户id
//  * @param content 消息内容
//  */
// export function sendMessage(toUserId: number, content: string) {
//     return request({
//         url: '/messages',
//         method: 'post',
//         data: {
//             toUserId,
//             content
//         }
//     });
// }

// /**
//  * 删除消息
//  * @param messageId 消息id
//  */
// export function deleteMessage(messageId: number) {
//     return request({
//         url: `/messages/${messageId}`,
//         method: 'delete'
//     });
// }
