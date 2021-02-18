import React from 'react';

export default function Card({ description, awaitToRender }) {
  const [transition, setTransition] = React.useState('scale-out');

  React.useEffect(() => {
    setTimeout(() => {
      setTransition('scale-in');
    }, awaitToRender);
  }, [awaitToRender, setTransition]);

  return (
    <div
      style={{ width: '300px' }}
      className={`scale-transition ${transition}`}
    >
      <div className="card-panel hoverable scale-transition">
        <div className="card-stacked">
          <div className="card-content">
            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
