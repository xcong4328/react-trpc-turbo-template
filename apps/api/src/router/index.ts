import { router } from '@api/trpc';
import { helloRouter } from '@api/procedures/hello';
import { createUser } from '../procedures/createUser';
import { loginRouter } from '../procedures/auth/loginRouter';
import { getUsers } from '@api/procedures/getUsers';

export const appRouter = router({
  auth: {
    login: loginRouter,
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
