import { createRootRoute, Outlet } from '@tanstack/react-router'

import Navbar from '@/shared/components/layout/Navbar'
import ThemeProvider from '@/shared/providers/ThemeProvider'

export const Route = createRootRoute({
    component: () => (
        <ThemeProvider>
            <div className="flex min-h-screen flex-col bg-gray-100 dark:bg-black">
                <Navbar />

                <main className="flex-1 bg-gray-100 dark:bg-black">
                    <Outlet />
                </main>

                <footer className="text-md flex h-20 items-center justify-center border-t border-gray-200 bg-gray-100 text-base text-slate-600 dark:border-gray-800 dark:bg-black dark:text-slate-400">
                    Pharmaceutical company
                </footer>
            </div>
        </ThemeProvider>
    ),
    errorComponent: () => <div>kakashka</div>,
    notFoundComponent: () => (
        <div className="w-full p-7">
            <p className="text-amber-900">A ezze zaebal</p>
        </div>
    ),
})
