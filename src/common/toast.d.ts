export type ToastOptions = {
    message: string;
    icon?: 'success' | 'loading' | 'none';
    duration?: number;
    position?: 'top' | 'center' | 'bottom';
};

declare const showToast: (options: ToastOptions) => void;

export default showToast;
