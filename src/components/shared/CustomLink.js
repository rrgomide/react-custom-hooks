import React from 'react';
import { Link } from 'react-router-dom';

export default function CustomLink(props) {
  const { children, ...otherProps } = props;

  return (
    <Link
      {...otherProps}
      style={{ color: 'inherit', textDecoration: 'inherit' }}
    >
      {children}
    </Link>
  );
}
