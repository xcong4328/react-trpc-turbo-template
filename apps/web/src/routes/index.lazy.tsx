import { createLazyFileRoute } from '@tanstack/react-router';

import { trpc } from '@/utils/trpc';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  const query = trpc.hello.get.useQuery({ name: 'Jonas' });
  const {data: userList} = trpc.user.list.useQuery()
  console.log('🪠☎️ log:  userList: ', userList)


  return (
    <div>
      <p className="text-xl">Message: {query.data?.message}</p>
      <ul>
        {userList?.users?.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}