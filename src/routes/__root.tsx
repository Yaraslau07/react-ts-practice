import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import Navbar from '@/shared/components/layout/Navbar'
import ThemeProvider from '@/shared/providers/ThemeProvider'

export const Route = createRootRoute({
    component: () => (
        <ThemeProvider>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <TanStackRouterDevtools position="bottom-right" />
        </ThemeProvider>
    ),
})
