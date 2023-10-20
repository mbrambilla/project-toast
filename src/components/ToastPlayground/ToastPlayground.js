import React from 'react';
import Button from '../Button';
import { ToastContext } from '../ToastProvider';
import ToastShelf from '../ToastShelf';
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const { addToast } = React.useContext(ToastContext);

  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

  function handleSubmit(event) {
    event.preventDefault();
    addToast({
      variant,
      message
    });
    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <main>
        <div className={styles.controlsWrapper}>
          <form onSubmit={handleSubmit}>
            <div className={styles.row}>
              <label
                htmlFor="message"
                className={styles.label}
                style={{ alignSelf: 'baseline' }}
              >
                Message
              </label>
              <div className={styles.inputWrapper}>
                <textarea
                  id="message"
                  className={styles.messageInput}
                  value={message}
                  onChange={event => { setMessage(event.target.value); }}
                />
              </div>
            </div>

            <fieldset className={styles.row}>
              <legend className={styles.label}>Variant</legend>
              <div
                className={`${styles.inputWrapper} ${styles.radioWrapper}`}
              >
                {VARIANT_OPTIONS.map((option) => {
                  const id = `variant-${option}`;
                  return (
                    <label key={id} htmlFor={id}>
                      <input
                        id={id}
                        type="radio"
                        name="variant"
                        value={option}
                        checked={option === variant}
                        onChange={event => {
                          setVariant(event.target.value);
                        }}
                      />
                      {option}
                    </label>
                  );
                })}

                {/* TODO Other Variant radio buttons here */}
              </div>
            </fieldset>

            <div className={styles.row}>
              <div className={styles.label} />
              <div
                className={`${styles.inputWrapper} ${styles.radioWrapper}`}
              >
                <Button>Pop Toast!</Button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default ToastPlayground;
