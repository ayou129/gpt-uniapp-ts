// /**
//  * 好友相关模块
//  */

// import { request } from '@/common/request';

// /**
//  * 获取好友列表
//  */
// export function getFriendList() {
//   return request({
//     url: '/friends',
//     method: 'get'
//   });
// }

// /**
//  * 添加好友
//  * @param friendId 好友id
//  */
// export function addFriend(friendId: number) {
//   return request({
//     url: '/friends',
//     method: 'post',
//     data: {
//       friendId
//     }
//   });
// }

// /**
//  * 删除好友
//  * @param friendId 好友id
//  */
// export function deleteFriend(friendId: number) {
//   return request({
//     url: `/friends/${friendId}`,
//     method: 'delete'
//   });
// }

// /**
//  * 关注好友
//  * @param friendId 好友id
//  */
// export function followFriend(friendId: number) {
//   return request({
//     url: `/friends/${friendId}/follow`,
//     method: 'put'
//   });
// }

// /**
//  * 取消关注好友
//  * @param friendId 好友id
//  */
// export function unfollowFriend(friendId: number) {
//   return request({
//     url: `/friends/${friendId}/unfollow`,
//     method: 'put'
//   });
// }
