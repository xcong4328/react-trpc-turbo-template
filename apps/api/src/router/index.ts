import { router } from '@api/trpc';
import { helloRouter } from '@api/procedures/hello';
import { createUser } from '../procedures/createUser';
import { loginRouter } from '../procedures/auth/loginRouter';
import { getUsers } from '@api/procedures/getUsers';
import { registerRouter } from '@api/procedures/auth/registerRouter';

export const appRouter = router({
  auth: {
    login: loginRouter,
    register: registerRouter
  },
  hello: {
    get: helloRouter.get,
  },
  user: {
    create: createUser,
    list: getUsers
  },
});

export type AppRouter = typeof appRouter;
