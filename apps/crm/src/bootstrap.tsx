import 'index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Login } from './pages/Login';
import { Home } from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <div>Error</div>,
  },
  {
    path: '/home',
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
