import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function addToast({ variant, message }) {
    const newToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        variant,
        message
      }];

    setToasts(newToasts);
  }

  function removeToast(id) {
    const newToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });
    setToasts(newToasts);
  }

  const clearToasts = React.useCallback(() => {
    setToasts([]);
  }, []);

  return <ToastContext.Provider
    value={{ toasts, addToast, removeToast, clearToasts }}
  >
    {children}
  </ToastContext.Provider>;
}

export default ToastProvider;
