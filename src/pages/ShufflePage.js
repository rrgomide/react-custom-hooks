import React from 'react';
import Button from '../components/shared/Button';
import ShuffleItem from '../components/shuffle/ShuffleItem';
import useShuffle from '../hooks/useShuffle';

const SHUFFLE_COUNT = 999;

export default function Shuffle() {
  const [isShuffling, setIsShuffling] = React.useState(false);

  const {
    values,
    canShuffle,
    doShuffle,
    currentShuffledValue,
    doConfirmShuffle,
    doRestart,
  } = useShuffle('AEIOU'.split(''));

  const handleShuffle = () => {
    doShuffle();
  };

  const handleMultipleShuffle = () => {
    setIsShuffling(true);

    for (let i = 0; i < SHUFFLE_COUNT; i++) {
      setTimeout(() => {
        doShuffle();

        if (i + 1 === SHUFFLE_COUNT) {
          setIsShuffling(false);
        }
      }, 10);
    }
  };

  return (
    <div className="container">
      <h1 className="center">Sorteador de valores</h1>

      <div className="default-flex-row">
        {values.map(({ value, picked }) => {
          return (
            <ShuffleItem key={value} picked={picked}>
              {value}
            </ShuffleItem>
          );
        })}
      </div>

      <div className="center">
        <Button
          buttonStyle={{ marginRight: '5px' }}
          classNames="blue darken-4"
          disabled={isShuffling || !canShuffle}
          onClick={handleShuffle}
        >
          Sortear uma vez
        </Button>

        <Button
          classNames="purple darken-4"
          disabled={isShuffling || !canShuffle}
          onClick={handleMultipleShuffle}
        >
          Sortear {SHUFFLE_COUNT} vezes
        </Button>

        <p style={{ fontSize: '2rem' }}>
          Último valor sorteado:{' '}
          <strong>
            {!!currentShuffledValue ? currentShuffledValue.value : '?'}
          </strong>
        </p>

        <Button
          buttonStyle={{ marginRight: '5px' }}
          disabled={isShuffling || !currentShuffledValue}
          classNames="green darken-4"
          onClick={() => doConfirmShuffle()}
        >
          Escolher valor sorteado
        </Button>

        <Button
          disabled={isShuffling}
          classNames="orange darken-4"
          onClick={() => doRestart()}
        >
          Reiniciar
        </Button>
      </div>
    </div>
  );
}
