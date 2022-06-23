import React from 'react';
import { useLocation } from 'react-router-dom'

export function NoFound() {
  let location = useLocation();

  return (
    <div>
      <h3>
        404 — страница не найдена <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
