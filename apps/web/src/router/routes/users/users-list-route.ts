import { People } from '@mui/icons-material';
import { createRoute } from '@tanstack/react-router';

import UserListPage from '@/features/users/list/components/_UserListPage';
import { appRoute } from '../../core/app';
import type { RouteMeta } from '../../core/types';

export const usersMeta = {
  type: 'item',
  // page: 'UserListPage',
  path: '/users',
  Icon: People,
  countHook: undefined,
  // features: ['user'],
} as const satisfies RouteMeta;

export const usersRoute = createRoute({
  path: usersMeta.path,
  getParentRoute: () => appRoute,
  component: UserListPage,
});
