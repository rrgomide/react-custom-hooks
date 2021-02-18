import React from 'react';
import Card from '../components/shared/Card';
import CustomLink from '../components/shared/CustomLink';

export default function HomePage({ routes }) {
  let timeOut = 4;

  return (
    <div className="flex-center">
      <h1 className="center">Escolha uma das opções abaixo:</h1>

      {routes.map(({ id, description, path }) => {
        return (
          <CustomLink key={id} to={path} style={{ textDecoration: 'none' }}>
            <Card description={description} awaitToRender={(timeOut += 100)} />
          </CustomLink>
        );
      })}
    </div>
  );
}
