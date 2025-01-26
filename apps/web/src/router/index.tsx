import { createRouter } from '@tanstack/react-router';

import { queryClient, trpcClient } from '@/api';

import { appRoute } from './core/app';
import { notFoundRoute } from './core/not-found';
import { publicRoute } from './core/public';
import { rootRoute } from './core/root';
import { usersRoute } from './routes/users/users-list-route';

const routeTree = rootRoute.addChildren([
  publicRoute.addChildren([loginRoute]),
  appRoute.addChildren([
    
    // users
    usersRoute,
    // usersNewRoute,
  ]),
  notFoundRoute,
]);

export const router = createRouter({ routeTree, context: { queryClient, trpcClient } });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
