import React from 'react';

// Taken from the “Custom Hooks” exercise:
// https://courses.joshwcomeau.com/joy-of-react/03-hooks/06.01-custom-hook-exercises

function useKeydown(key, callback) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === key) {
        callback(event);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [key, callback]);
}

export default useKeydown;
