import { Login } from '@mui/icons-material';
import { createRoute } from '@tanstack/react-router';

import { publicRoute } from '../core/public';
import type { RouteMeta } from '../core/types';

import { LoginPage } from '@/pages/login/LoginPage';

export const loginMeta = {
  type: 'item',
  page: 'LoginPage',
  path: '/login',
  Icon: Login,
  countHook: undefined,
  features: undefined,
} as const satisfies RouteMeta;

export const loginRoute = createRoute({
  path: loginMeta.path,
  getParentRoute: () => publicRoute,
  component: LoginPage,
});
