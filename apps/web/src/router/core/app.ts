import { createRoute } from '@tanstack/react-router';

import { AppRoute } from '@/components/core/AppRoute';

import { rootRoute } from './root';

export const appRoute = createRoute({
    id: 'app',
    getParentRoute: () => rootRoute,
    component: AppRoute,
});
