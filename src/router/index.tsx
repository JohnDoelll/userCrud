import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { publicRoutes } from '@/router/routes';
import { Layout } from '@/layout/Layout';
import paths from './paths';
import { ErrorBoundary } from '@/components/ErrorBoundary';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={paths.home} element={<Layout />} errorElement={<ErrorBoundary />}>
        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </>,
  ),
);
