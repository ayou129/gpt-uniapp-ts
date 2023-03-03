interface ToastOptions {
  message: string; // 消息内容
  icon?: 'success' | 'loading' | 'none' | 'error'; // 消息图标
  duration?: number; // 消息持续时间，单位毫秒
  position?: 'top' | 'center' | 'bottom'; // 消息位置
}

const DEFAULT_TOAST_OPTIONS: ToastOptions = {
  message: '',
  icon: 'none',
  duration: 2000,
  position: 'bottom',
};

/**
 * 显示toast消息
 * @param options toast消息配置项
 */
export default function showToast(options: ToastOptions) {
  const finalOptions: ToastOptions = Object.assign({}, DEFAULT_TOAST_OPTIONS, options);

  if (uni.getSystemInfoSync().platform === 'devtools') {
    // 在开发者工具中展示toast消息
    uni.showToast(finalOptions);
  } else if (uni.getSystemInfoSync().platform === 'wechat') {
    // 在微信小程序中展示toast消息
    uni.showModal({
      content: finalOptions.message,
      showCancel: false,
      confirmText: '知道了',
      success: () => {},
    });
  } else {
    // 在其他平台中展示toast消息
    alert(finalOptions.message);
  }
}
