import React from 'react';

export default function ShuffleItem({ children, picked }) {
  const className = picked ? 'orange darken-3' : 'grey lighten-3';
  return (
    <span
      className={className}
      style={{
        margin: '10px',
        padding: '20px',
        border: '1px solid lightgray',
        fontWeight: 'bold',
      }}
    >
      {children}
    </span>
  );
}
