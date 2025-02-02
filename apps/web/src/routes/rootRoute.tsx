// src/routes/rootRoute.tsx
import { QueryClient } from '@tanstack/react-query'
import {
createRootRouteWithContext,
Outlet,
Link,
} from '@tanstack/react-router'
import type { ErrorComponentProps } from '@tanstack/react-router'
import React from 'react'

export const rootRoute = createRootRouteWithContext<{queryClient: QueryClient}>()({
component: RootComponent,
notFoundComponent: NotFoundComponent,
})

function RootComponent() {
return (
    <>
    <div className="p-2 flex gap-2 text-lg">
        <Link
        to="/"
        activeProps={{
            className: 'font-bold',
        }}
        activeOptions={{ exact: true }}
        >
        Home
        </Link>
        <Link to="/posts" activeProps={{ className: 'font-bold' }}>
        Posts
        </Link>
        <Link to="/layout-a" activeProps={{ className: 'font-bold' }}>
        Layout
        </Link>
        {/* Ví dụ 404 */}
        <Link  activeProps={{ className: 'font-bold' }}>
        Invalid
        </Link>
    </div>
    <hr />
    <Outlet />
    </>
)
}

function NotFoundComponent() {
return (
    <div>
    <p>404 - This is the notFoundComponent configured on root route</p>
    <Link to="/">Start Over</Link>
    </div>
)
}
