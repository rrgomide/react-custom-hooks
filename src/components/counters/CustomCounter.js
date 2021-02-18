import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import Button from '../shared/Button';

export default function CustomCounter() {
  const [incrementBy, setIncrementBy] = React.useState(1);
  const [decrementBy, setDecrementBy] = React.useState(1);

  const { counter, doIncrement, doDecrement, doRestart } = useCounter(0);

  function handleDecrement({ currentTarget }) {
    setDecrementBy(parseInt(currentTarget.value));
  }

  function handleIncrement({ currentTarget }) {
    setIncrementBy(parseInt(currentTarget.value));
  }

  const { counterStyle, positionStyle, containerStyle } = styles;

  return (
    <div className="center" style={containerStyle}>
      <h2 style={{ marginTop: '2px' }}>Customizado</h2>

      <div style={positionStyle}>
        <div
          className="input-field"
          style={{ width: '100px', marginRight: '5px' }}
        >
          <input
            id="input-decrement"
            type="number"
            value={decrementBy}
            onChange={handleDecrement}
            min={0}
          />
        </div>

        <Button
          buttonStyle={{ marginRight: '5px' }}
          classNames="red darken-4"
          onClick={() => doDecrement(decrementBy)}
          symbol="remove_circle_outline"
        />

        <span style={counterStyle}>{counter}</span>

        <Button
          buttonStyle={{ marginLeft: '5px' }}
          classNames="green darken-4"
          onClick={() => doIncrement(incrementBy)}
          symbol="add_circle_outline"
        />

        <div
          className="input-field"
          style={{ width: '100px', marginLeft: '5px' }}
        >
          <input
            id="input-increment"
            type="number"
            value={incrementBy}
            onChange={handleIncrement}
            min={0}
          />
        </div>

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
