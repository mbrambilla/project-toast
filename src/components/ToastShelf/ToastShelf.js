import React from 'react';
import { ToastContext } from '../ToastProvider';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts, clearToasts } = React.useContext(ToastContext);

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        clearToasts();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [clearToasts]);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {
        toasts.map(({ id, variant, message }) => (
          <li key={id} className={styles.toastWrapper}>
            <Toast
              id={id}
              variant={variant}
            >
              {message}
            </Toast>
          </li>
        ))
      }

    </ol >
  );
}

export default ToastShelf;
