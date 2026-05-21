import { createFileRoute } from '@tanstack/react-router'

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
    head: () => ({
        meta: [
            {
                title: 'Medications in Development | Pharmaceutical Company',
            },
            {
                name: 'description',
                content:
                    'Track the progress of vaccines and medicines currently in development. View clinical trial statuses, locations, and success reactions.',
            },
        ],
    }),
    component: TablesPage,
})

function TablesPage() {
    return (
        <section className="flex flex-col gap-8 p-8">
            <header className="w-full">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-zinc-50">
                    List of medications in development
                </h1>
                <p className="mt-1 text-sm text-slate-700 dark:text-zinc-300">
                    Brief summary of testing processes
                </p>
            </header>
            <main>
                <TableComponent />
            </main>
        </section>
    )
}
