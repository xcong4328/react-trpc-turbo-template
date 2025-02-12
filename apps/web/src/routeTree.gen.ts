/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RootRouteImport } from './routes/rootRoute'
import { Route as IndexRouteImport } from './routes/indexRoute'
import { Route as UsersUsersRouteImport } from './routes/users/usersRoute'
import { Route as PostsPostsRouteImport } from './routes/posts/postsRoute'
import { Route as PostsPostsIndexRouteComponentImport } from './routes/posts/postsIndexRouteComponent'
import { Route as LayoutLayoutRouteImport } from './routes/layout/_layoutRoute'
import { Route as AuthRegisterRouteImport } from './routes/auth/registerRoute'
import { Route as AuthAuthRouteImport } from './routes/auth/authRoute'

// Create Virtual Routes

const LayoutImport = createFileRoute('/layout')()
const PostsPostsLazyImport = createFileRoute('/posts/posts')()

// Create/Update Routes

const LayoutRoute = LayoutImport.update({
  path: '/layout',
  getParentRoute: () => rootRoute,
} as any)

const RootRouteRoute = RootRouteImport.update({
  path: '/rootRoute',
  getParentRoute: () => rootRoute,
} as any)

const IndexRouteRoute = IndexRouteImport.update({
  path: '/indexRoute',
  getParentRoute: () => rootRoute,
} as any)

const PostsPostsLazyRoute = PostsPostsLazyImport.update({
  path: '/posts/posts',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/posts/posts.lazy').then((d) => d.Route))

const UsersUsersRouteRoute = UsersUsersRouteImport.update({
  path: '/users/usersRoute',
  getParentRoute: () => rootRoute,
} as any)

const PostsPostsRouteRoute = PostsPostsRouteImport.update({
  path: '/posts/postsRoute',
  getParentRoute: () => rootRoute,
} as any)

const PostsPostsIndexRouteComponentRoute =
  PostsPostsIndexRouteComponentImport.update({
    path: '/posts/postsIndexRouteComponent',
    getParentRoute: () => rootRoute,
  } as any)

const LayoutLayoutRouteRoute = LayoutLayoutRouteImport.update({
  id: '/_layoutRoute',
  getParentRoute: () => LayoutRoute,
} as any)

const AuthRegisterRouteRoute = AuthRegisterRouteImport.update({
  path: '/auth/registerRoute',
  getParentRoute: () => rootRoute,
} as any)

const AuthAuthRouteRoute = AuthAuthRouteImport.update({
  path: '/auth/authRoute',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/indexRoute': {
      id: '/indexRoute'
      path: '/indexRoute'
      fullPath: '/indexRoute'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRoute
    }
    '/rootRoute': {
      id: '/rootRoute'
      path: '/rootRoute'
      fullPath: '/rootRoute'
      preLoaderRoute: typeof RootRouteImport
      parentRoute: typeof rootRoute
    }
    '/auth/authRoute': {
      id: '/auth/authRoute'
      path: '/auth/authRoute'
      fullPath: '/auth/authRoute'
      preLoaderRoute: typeof AuthAuthRouteImport
      parentRoute: typeof rootRoute
    }
    '/auth/registerRoute': {
      id: '/auth/registerRoute'
      path: '/auth/registerRoute'
      fullPath: '/auth/registerRoute'
      preLoaderRoute: typeof AuthRegisterRouteImport
      parentRoute: typeof rootRoute
    }
    '/layout': {
      id: '/layout'
      path: '/layout'
      fullPath: '/layout'
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/layout/_layoutRoute': {
      id: '/layout/_layoutRoute'
      path: '/layout'
      fullPath: '/layout'
      preLoaderRoute: typeof LayoutLayoutRouteImport
      parentRoute: typeof LayoutRoute
    }
    '/posts/postsIndexRouteComponent': {
      id: '/posts/postsIndexRouteComponent'
      path: '/posts/postsIndexRouteComponent'
      fullPath: '/posts/postsIndexRouteComponent'
      preLoaderRoute: typeof PostsPostsIndexRouteComponentImport
      parentRoute: typeof rootRoute
    }
    '/posts/postsRoute': {
      id: '/posts/postsRoute'
      path: '/posts/postsRoute'
      fullPath: '/posts/postsRoute'
      preLoaderRoute: typeof PostsPostsRouteImport
      parentRoute: typeof rootRoute
    }
    '/users/usersRoute': {
      id: '/users/usersRoute'
      path: '/users/usersRoute'
      fullPath: '/users/usersRoute'
      preLoaderRoute: typeof UsersUsersRouteImport
      parentRoute: typeof rootRoute
    }
    '/posts/posts': {
      id: '/posts/posts'
      path: '/posts/posts'
      fullPath: '/posts/posts'
      preLoaderRoute: typeof PostsPostsLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRouteRoute,
  RootRouteRoute,
  AuthAuthRouteRoute,
  AuthRegisterRouteRoute,
  LayoutRoute: LayoutRoute.addChildren({}),
  PostsPostsIndexRouteComponentRoute,
  PostsPostsRouteRoute,
  UsersUsersRouteRoute,
  PostsPostsLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "children": [
        "/indexRoute",
        "/rootRoute",
        "/auth/authRoute",
        "/auth/registerRoute",
        "/layout",
        "/posts/postsIndexRouteComponent",
        "/posts/postsRoute",
        "/users/usersRoute",
        "/posts/posts"
      ]
    },
    "/indexRoute": {
      "filePath": "indexRoute.tsx"
    },
    "/rootRoute": {
      "filePath": "rootRoute.tsx"
    },
    "/auth/authRoute": {
      "filePath": "auth/authRoute.tsx"
    },
    "/auth/registerRoute": {
      "filePath": "auth/registerRoute.tsx"
    },
    "/layout": {
      "filePath": "layout",
      "children": [
        "/layout/_layoutRoute"
      ]
    },
    "/layout/_layoutRoute": {
      "filePath": "layout/_layoutRoute.tsx",
      "parent": "/layout"
    },
    "/posts/postsIndexRouteComponent": {
      "filePath": "posts/postsIndexRouteComponent.tsx"
    },
    "/posts/postsRoute": {
      "filePath": "posts/postsRoute.tsx"
    },
    "/users/usersRoute": {
      "filePath": "users/usersRoute.tsx"
    },
    "/posts/posts": {
      "filePath": "posts/posts.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
