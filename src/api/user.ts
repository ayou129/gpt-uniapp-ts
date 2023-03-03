import request from '@/common/request'

export const getUserInfo = () => {
    return request({
        url: '/user/info',
        method: 'GET'
    })
}