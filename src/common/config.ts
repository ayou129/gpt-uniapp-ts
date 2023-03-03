export const baseURL = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:9501' : 'http://api.example.com'
export const apiPrefix = '/api/v1'
export const pageSize = 10

export const platformInfo = {
    wx: {
        appId: 'wx123456',
        appSecret: 'wx7890'
    },
    android: {
        packageName: 'com.example.app',
        versionCode: 1,
        versionName: '1.0.0'
    },
    ios: {
        bundleId: 'com.example.app',
        versionCode: 1,
        versionName: '1.0.0'
    }
}