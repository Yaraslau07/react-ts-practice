import { Badge } from '@/shared/components/ui/badge'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/shared/components/ui/card'

export default function DashboardCardWrapper({
    title,
    badge,
    metric,
    description = 'Last 7 days',
    legends,
    customFooter,
    children,
}: {
    title: string | React.ReactNode
    badge?: string
    metric?: string | number
    description?: string
    legends?: { label: string; value: string | number; color: string }[]
    customFooter?: React.ReactNode
    children: React.ReactNode
}) {
    return (
        <Card className="border-slate-200 bg-white transition-colors dark:border-slate-800 dark:bg-slate-950">
            <CardHeader>
                <CardTitle className="flex items-center justify-between text-slate-900 dark:text-slate-50">
                    <h2>{title}</h2>
                    {badge && (
                        <Badge
                            variant="secondary"
                            className="mx-2 rounded-full border border-orange-700 bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-700 shadow-none hover:bg-orange-100 dark:border-orange-500/50 dark:bg-orange-950/50 dark:text-orange-400 dark:hover:bg-orange-950/50"
                        >
                            {badge}
                        </Badge>
                    )}
                    {metric && (
                        <p className="text-slate-500 dark:text-slate-400">
                            {metric}
                        </p>
                    )}
                </CardTitle>
                <CardDescription className="text-slate-500 dark:text-slate-400">
                    {description}
                </CardDescription>
            </CardHeader>

            <CardContent className="flex justify-center">
                {children}
            </CardContent>

            <CardFooter className="mt-2 flex flex-col gap-3 border-t-0 bg-transparent">
                {legends &&
                    legends.map((legend, index) => (
                        <div
                            key={index}
                            className="flex w-full items-center justify-between text-[15px]"
                        >
                            <div className="flex items-center gap-3">
                                <span
                                    className="h-3 w-5 rounded-[3px]"
                                    style={{ backgroundColor: legend.color }}
                                />
                                <p className="text-slate-500 dark:text-slate-400">
                                    {legend.label}
                                </p>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400">
                                {legend.value}
                            </p>
                        </div>
                    ))}
                {customFooter}
            </CardFooter>
        </Card>
    )
}
