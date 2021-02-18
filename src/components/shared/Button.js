import React from 'react';

export default function Button({
  classNames,
  children,
  onClick,
  buttonStyle = {},
  symbol = '',
  disabled = false,
}) {
  const description =
    symbol !== '' ? (
      <span
        style={{
          verticalAlign: 'middle',
        }}
        className="material-icons"
      >
        {symbol}
      </span>
    ) : (
      children
    );

  return (
    <button
      style={buttonStyle}
      className={`btn ${classNames}`}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {description}
    </button>
  );
}
