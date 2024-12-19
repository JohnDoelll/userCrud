import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Layout } from '@/layout/Layout';
import { publicRoutes } from '@/router/routes';

import paths from './paths';

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
