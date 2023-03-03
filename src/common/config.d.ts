declare module "@/common/config" {
    export const baseURL: string;
    export const pageSize: number;
    export const apiPrefix: string;
    export const platformInfo: {
        wx: {
            appId: string;
            appSecret: string;
        };
        android: {
            packageName: string;
            versionCode: number;
            versionName: string;
        };
        ios: {
            bundleId: string;
            versionCode: number;
            versionName: string;
        };
    };
}
