import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import Button from '../shared/Button';

export default function AutomaticCounter() {
  const [incrementBy, setIncrementBy] = React.useState(1);
  const [decrementBy, setDecrementBy] = React.useState(1);
  const [runInterval, setRunInterval] = React.useState(100);

  const {
    counter,
    doRestart,
    doAutoIncrement,
    doAutoDecrement,
    setBy,
    changeInterval,
  } = useCounter(0);

  function handleDecrement({ currentTarget }) {
    const newValue = parseInt(currentTarget.value);

    setDecrementBy(newValue);
    setBy(newValue);
  }

  function handleIncrement({ currentTarget }) {
    const newValue = parseInt(currentTarget.value);

    setIncrementBy(newValue);
    setBy(newValue);
  }

  function handleInterval({ currentTarget }) {
    const newInterval = parseInt(currentTarget.value);

    setRunInterval(newInterval);
    changeInterval(newInterval);
  }

  const { counterStyle, positionStyle, containerStyle } = styles;

  return (
    <div className="center" style={containerStyle}>
      <h2 style={{ marginTop: '2px' }}>Automatizado</h2>

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

          <label htmlFor="input-decrement" className="active">
            Andamento:
          </label>
        </div>

        <Button
          buttonStyle={{ marginRight: '5px' }}
          classNames="red darken-4"
          onClick={() => doAutoDecrement(decrementBy, runInterval)}
          symbol="remove_circle_outline"
        />

        <span style={counterStyle}>{counter}</span>

        <Button
          buttonStyle={{ marginLeft: '5px' }}
          classNames="green darken-4"
          onClick={() => doAutoIncrement(incrementBy, runInterval)}
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

          <label htmlFor="input-increment" className="active">
            Andamento:
          </label>
        </div>

        <div
          className="input-field"
          style={{ width: '100px', marginLeft: '5px' }}
        >
          <input
            id="input-interval-increment"
            type="number"
            value={runInterval}
            onChange={handleInterval}
            min={0}
          />

          <label htmlFor="input-interval-increment" className="active">
            Intervalo:
          </label>
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
