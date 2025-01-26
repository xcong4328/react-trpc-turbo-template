import type { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext } from '@tanstack/react-router';

import type { TRPCClient } from '@/api';
import { Root } from '@/components/core/Root';

export type RouterContext = {
    queryClient: QueryClient;
    trpcClient: TRPCClient;
};

export const rootRoute = createRootRouteWithContext<RouterContext>()({ component: Root });
