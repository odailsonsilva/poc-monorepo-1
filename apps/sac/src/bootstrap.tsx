import 'index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Root</div>,
    errorElement: <div>Error</div>,
  },
  {
    path: '/about',
    element: <div>About</div>,
  },
  {
    path: '/notes',
    element: <div>Notes</div>
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
