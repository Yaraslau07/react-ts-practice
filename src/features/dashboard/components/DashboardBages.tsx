import { DASHBOARD_BAGES_CONFIG } from '@/features/dashboard/config/dashboardBagesConfig'

export function DashboardBage({
    variant,
    title,
    subtitle,
}: {
    variant: 'success' | 'pending' | 'error'
    title: string
    subtitle: string
}) {
    return (
        <div className="flex items-center gap-4 p-2 font-sans">
            <div className="relative flex h-12 w-12 items-end justify-start">
                <div
                    className={`h-9 w-9 rounded-xl ${DASHBOARD_BAGES_CONFIG[variant].baseBg} -rotate-6 transform`}
                />

                <div
                    className={`absolute top-0 right-0 h-7 w-7 rounded-full ${DASHBOARD_BAGES_CONFIG[variant].badgeBg} ring-4 ${DASHBOARD_BAGES_CONFIG[variant].ringColor} flex items-center justify-center ${DASHBOARD_BAGES_CONFIG[variant].iconColor} shadow-sm`}
                >
                    {DASHBOARD_BAGES_CONFIG[variant].icon}
                </div>
            </div>

            <div className="flex flex-col">
                <span className="text-lg leading-tight font-bold text-gray-900 dark:text-zinc-50">
                    {title}
                </span>
                <span className="text-sm font-medium text-slate-500 dark:text-zinc-400">
                    {subtitle}
                </span>
            </div>
        </div>
    )
}
