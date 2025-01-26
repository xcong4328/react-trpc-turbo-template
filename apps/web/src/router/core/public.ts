import { createRoute } from '@tanstack/react-router';

import { PublicRoute } from '@/components/core/PublicRoute';

import { rootRoute } from './root';

export const publicRoute = createRoute({
    id: 'public',
    getParentRoute: () => rootRoute,
    component: PublicRoute,
});
