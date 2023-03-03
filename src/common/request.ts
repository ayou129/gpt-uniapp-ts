import { getToken } from '@/common/utils';
import { baseURL, apiPrefix } from '@/common/config';
import showToast from '@/common/toast';

type RequestOptions = {
	url: string;
	header?: Record<string, any>;
	data?: any;
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'TRACE' | 'CONNECT';
	timeout?: number;
	dataType?: string;
	responseType?: string;
	loading?: boolean; // 是否显示loading，默认为true
};

export interface ResponseData<T = any> {
	code: number;
	msg: string;
	data: T;
}


const request = (options: RequestOptions): Promise<any> => {
	const {
		url,
		header = {},
		data = {},
		method = 'GET',
		timeout = 10000,
		dataType = 'json',
		responseType = 'text',
		loading = true,
	} = options;
	const Authorization = getToken();
	const showLoading = loading ? uni.showLoading({ title: '加载中' }) : null;

	const hideLoading = () => {
		if (showLoading) {
			uni.hideLoading();
		}
	};
	const target_url = baseURL + apiPrefix + url;
	return new Promise((resolve, reject) => {
		uni.request({
			url: target_url,
			header: {
				'Content-Type': 'application/json',
				...header,
				Authorization,
			},
			data,
			method,
			timeout,
			dataType,
			responseType,
			success: (res) => {
				const { statusCode, data } = res;
				const { code, msg, data: responseData } = data as ResponseData;
				if (statusCode >= 200 && statusCode < 300) {
					if (code === 0) {
						resolve(responseData);
					} else {
						reject(new Error(msg));
					}
				} else {
					reject(new Error(`${msg}，状态码为 ${statusCode}`));
				}
			},
			fail: (err) => {
				reject(new Error('请求失败，请检查网络'));
			},
			complete: () => {
				hideLoading();
			},
		});
	});
};

// 弹窗只提示一次，记录是否已经提示
let isShowedErrorToast = false;

// 处理请求失败的情况，弹窗提示
const handleRequestError = (error: Error): void => {
	if (!isShowedErrorToast) {
		showToast({ message: error.message });
		isShowedErrorToast = true;
	}
	// 记录日志
	console.error(error);
};

export default async function requestWithRetry(
	options: RequestOptions,
	retryCount = 3,
): Promise<any> {
	try {
		return await request(options);
	} catch (error) {
		if (retryCount > 0) {
			// 重试
			return await requestWithRetry(options, retryCount - 1);
		}
		const err = error as Error;
		handleRequestError(err);
		throw error;
	}
}
