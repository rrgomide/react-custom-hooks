import React from 'react';

export default function useLocalStorage(key, initialValue = []) {
  /**
   * Utilizandos useState com uma função que OU obtém
   * o valor atual de localStorage ou utiliza o valor
   * inicial. Em ambos os casos vai invocar o effect
   * mais abaixo
   */
  const [value, setValue] = React.useState(
    () => JSON.parse(window.localStorage.getItem(key)) || initialValue
  );

  /**
   * O setValue enviado ao consumidor vai invocar o effect,
   * que vai sincronizar o valor de value no localStorage
   */
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
