// src/routes/indexRoute.tsx
import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './rootRoute'

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IndexRouteComponent,
})

function IndexRouteComponent() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  )
}
