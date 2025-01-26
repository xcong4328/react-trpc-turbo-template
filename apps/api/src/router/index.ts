import { router } from '@api/trpc';
import { helloRouter } from '@api/procedures/hello';
import { createUser } from '../procedures/createUser';
import { getUsers } from '@api/procedures/getUsers';

export const appRouter = router({
  hello: {
    get: helloRouter.get,
  },
  user: {
    create: createUser,
    list: getUsers
  },
});

export type AppRouter = typeof appRouter;
