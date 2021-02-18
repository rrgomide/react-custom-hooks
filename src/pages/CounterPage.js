import React from 'react';

import AutomaticCounter from '../components/counters/AutomaticCounter';
import CustomCounter from '../components/counters/CustomCounter';
import SimpleCounter from '../components/counters/SimpleCounter';

export default function Counter() {
  return (
    <div className="container">
      <h1 className="center">Contador</h1>

      <SimpleCounter />
      <br />
      <CustomCounter />
      <br />
      <AutomaticCounter />
    </div>
  );
}
