import React from 'react';
import Button from '../Button';
import Toast from '../Toast';
import styles from './ToastPlayground.module.css';
import useToggle from '../../hooks/use-toggle';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [isOpen, toggleIsOpen] = useToggle(false);

  function handleSubmit(event) {
    event.preventDefault();
    toggleIsOpen(true);
  }

  function handleDismiss(event) {
    event.preventDefault();
    toggleIsOpen(false);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {isOpen &&
        <Toast
          handleDismiss={handleDismiss}
          variant={variant}
        >
          {message}
        </Toast>
      }

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
