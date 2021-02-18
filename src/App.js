import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/shared/NavBar';

import CounterPage from './pages/CounterPage';
import HomePage from './pages/HomePage';
import LocalStoragePage from './pages/LocalStoragePage';
import ShufflePage from './pages/ShufflePage';
import TodoPagePage from './pages/TodoPage';

const routes = [
  {
    id: 'r1',
    path: '/counter',
    description: 'useCounter',
    Page: CounterPage,
  },

  {
    id: 'r2',
    path: '/shuffle',
    description: 'useShuffle',
    Page: ShufflePage,
  },

  {
    id: 'r3',
    path: '/todo',
    description: 'useTodos',
    Page: TodoPagePage,
  },

  {
    id: 'r4',
    path: '/local-storage',
    description: 'useLocalStorage',
    Page: LocalStoragePage,
  },
];

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <Switch>
          {routes.map(({ id, path, Page }) => {
            return (
              <Route key={id} path={path}>
                <Page />
              </Route>
            );
          })}

          <Route key="home" path="/">
            <HomePage routes={routes} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
