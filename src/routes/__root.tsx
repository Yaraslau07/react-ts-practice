import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import Navbar from '@/shared/components/layout/Navbar'
import ThemeProvider from '@/shared/providers/ThemeProvider'

export const Route = createRootRoute({
    component: () => (
        <ThemeProvider>
            <Navbar />
            <main className="h-full bg-gray-100 dark:bg-zinc-900">
                <Outlet />
            </main>
            <TanStackRouterDevtools position="bottom-right" />
        </ThemeProvider>
    ),
})
