import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import Button from '../shared/Button';

export default function SimpleCounter() {
  const { counter, doIncrement, doDecrement, doRestart } = useCounter(0);

  const { counterStyle, positionStyle, containerStyle } = styles;

  return (
    <div className="center" style={containerStyle}>
      <h2 style={{ marginTop: '2px' }}>Simples</h2>

      <div style={positionStyle}>
        <Button
          buttonStyle={{ marginRight: '5px' }}
          classNames="red darken-4"
          onClick={() => doDecrement(1)}
          symbol="remove_circle_outline"
        />

        <span style={counterStyle}>{counter}</span>

        <Button
          buttonStyle={{ marginLeft: '5px' }}
          classNames="green darken-4"
          onClick={() => doIncrement(1)}
          symbol="add_circle_outline"
        />

        <Button
          buttonStyle={{ marginLeft: '5px' }}
          classNames="orange darken-4"
          onClick={() => doRestart()}
          symbol="refresh"
        />
      </div>
    </div>
  );
}

const styles = {
  containerStyle: {
    padding: '5px',
    border: '1px solid lightgray',
    borderRadius: '4px',
  },

  positionStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  counterStyle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
};
