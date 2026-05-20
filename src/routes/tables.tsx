import { createFileRoute } from '@tanstack/react-router'

import Pagination from '@/features/tables/components/Pagination'
import TableComponent from '@/features/tables/components/Table'

type TablesSearch = {
    page?: number
}

export const Route = createFileRoute('/tables')({
    validateSearch: (search: Record<string, unknown>): TablesSearch => {
        return {
            page: Number(search?.page ?? 1),
        }
    },
    component: TablesPage,
})

function TablesPage() {
    return (
        <section className="flex flex-col gap-8 p-8">
            <header className="w-full">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-zinc-50">
                    List of medications in development
                </h1>
                <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">
                    Brief summary of testing processes
                </p>
            </header>
            <main>
                <TableComponent />
            </main>
            <Pagination totalPages={6} />
        </section>
    )
}
