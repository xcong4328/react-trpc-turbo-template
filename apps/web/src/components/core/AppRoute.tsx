import { Suspense } from 'react';

import { Outlet } from '@tanstack/react-router';

import { AppContextProvider } from './AppContextProvider';
import { Authentication } from './Authentication';
import GoogleMapLoader from './GoogleMapLoader';
import { LoadingSpinner } from './LoadingSpinner';
import Layout from './layout/Layout';

export const AppRoute = () => {
  return (
    <Authentication>
      <AppContextProvider>
        <GoogleMapLoader>
          <Layout>
            <Suspense fallback={<LoadingSpinner />}>
              <Outlet />
            </Suspense>
          </Layout>
        </GoogleMapLoader>
      </AppContextProvider>
    </Authentication>
  );
};
