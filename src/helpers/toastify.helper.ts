import { cssTransition, toast, ToastContent, ToastOptions } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export const bounce = cssTransition({
    enter: "animateanimated animatebounceIn",
    exit: "animateanimated animatebounceOut"
});

const defaultOptions: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: 'd-flex flex-row m-2'
}

export const setToastMessage = (message: ToastContent, options: ToastOptions) => {
    toast(message, Object.assign(defaultOptions, options));
}

export const toastAlert = (message: string, type: "error" | "success" | "warning" = "success", position: "top-center" | "top-right" = "top-center") => {
    setToastMessage(message, {
        type,
        position,
        style: {
        }
    })
}