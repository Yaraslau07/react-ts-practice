import { createFileRoute } from '@tanstack/react-router'

import { DashboardBage } from '@/features/dashboard/components/DashboardBages'
import DashboardCards from '@/features/dashboard/components/DashboardCards'
import { MainChart } from '@/features/dashboard/components/MainChart'
import { DASHBOARD_BAGES_DATA } from '@/features/dashboard/config/dashboardBagesConfig'

export const Route = createFileRoute('/')({
    head: () => ({
        meta: [
            {
                title: 'Testing Dashboard Overview | Pharmaceutical Company',
            },
            {
                name: 'description',
                content:
                    'Monitor testing processes, drug approval rates, and clinical trial analytics in real-time. Uncover insights into your testing operations.',
            },
        ],
    }),
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
                        {DASHBOARD_BAGES_DATA.map((bage) => (
                            <DashboardBage
                                key={bage.variant}
                                variant={bage.variant}
                                title={bage.title}
                                subtitle={bage.subtitle}
                            />
                        ))}
                    </div>

                    <MainChart />
                </div>

                <div className="w-full xl:w-[45%]">
                    <DashboardCards />
                </div>
            </div>
        </section>
    )
}
