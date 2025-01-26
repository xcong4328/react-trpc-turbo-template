import { createRoute } from '@tanstack/react-router';

import { NotFoundPage } from '@/pages/not-found/index.page';

import { rootRoute } from './root';

const route = createRoute({
  path: '*',
  getParentRoute: () => rootRoute,
  component: NotFoundPage,
});

export const notFoundRoute = route;
