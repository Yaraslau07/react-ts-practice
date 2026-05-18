import { createFileRoute } from '@tanstack/react-router'

import { DashboardBage } from '@/features/dashboard/components/DashboardBages'
import { MainChart } from '@/features/dashboard/components/MainChart'

export const Route = createFileRoute('/')({
    component: HomePage,
})

function HomePage() {
    return (
        <section className="flex flex-col gap-8 p-8">
            <header className="w-full">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-zinc-50">
                    Testing dashboard
                </h1>
                <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">
                    Uncover insights into your testing processes.
                </p>
            </header>

            <div className="flex w-full flex-col gap-8 xl:flex-row">
                <div className="flex flex-1 flex-col gap-8 rounded-xl p-6">
                    <div className="tems-center flex flex-wrap items-center justify-around border-b border-slate-100 pb-6 dark:border-zinc-800">
                        <DashboardBage
                            variant="success"
                            title="Medicine #580"
                            subtitle="Awaiting results"
                        />

                        <DashboardBage
                            variant="pending"
                            title="3 vaccines"
                            subtitle="On hold"
                        />

                        <DashboardBage
                            variant="error"
                            title="15 products"
                            subtitle="Out of stock"
                        />
                    </div>

                    <MainChart />
                </div>

                <div className="grid w-full grid-cols-2 gap-6 xl:w-[45%]"></div>
            </div>
        </section>
    )
}
