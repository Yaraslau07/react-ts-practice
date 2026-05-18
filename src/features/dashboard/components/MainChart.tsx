import { useMemo, useState } from 'react'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/shared/components/ui/card'
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/shared/components/ui/chart'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/shared/components/ui/select'

import { mainChartConfig, mainChartData } from '../config/chartsConfig'

export function MainChart() {
    const [month, setMonth] = useState<'May' | 'Apr' | 'Jun'>('May')

    const filtered = useMemo(() => {
        return mainChartData.filter((el) => el.date.includes(month))
    }, [month])

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
                <div className="flex flex-col gap-1">
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-zinc-50">
                        Total tests
                    </CardTitle>
                    <CardDescription className="text-sm text-slate-500 dark:text-zinc-400">
                        Testing results received in all areas
                    </CardDescription>
                </div>

                <Select
                    value={month}
                    onValueChange={(value: 'Apr' | 'May' | 'Jun') =>
                        setMonth(value)
                    }
                >
                    <SelectTrigger className="h-9 w-45 rounded-lg border-slate-200 bg-white font-medium text-slate-900 shadow-sm transition-colors hover:bg-slate-50 focus:ring-1 focus:ring-slate-200 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800/50 dark:focus:ring-zinc-700">
                        <SelectValue placeholder="Select month" />
                    </SelectTrigger>

                    <SelectContent
                        position="popper"
                        className="z-10 mt-1 rounded-xl border-slate-200 bg-white shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
                    >
                        <SelectItem
                            value="Apr"
                            className="data-highlighted:bg-slate-150 cursor-pointer rounded-md font-medium text-slate-700 focus:bg-slate-100 focus:text-slate-900 dark:text-zinc-300 dark:focus:bg-zinc-800 dark:focus:text-zinc-50 dark:data-highlighted:bg-zinc-800"
                        >
                            Apr 1 - 30, 2022
                        </SelectItem>
                        <SelectItem
                            value="May"
                            className="data-highlighted:bg-slate-150 cursor-pointer rounded-md font-medium text-slate-700 focus:bg-slate-100 focus:text-slate-900 dark:text-zinc-300 dark:focus:bg-zinc-800 dark:focus:text-zinc-50 dark:data-highlighted:bg-zinc-800"
                        >
                            May 1 - 31, 2022
                        </SelectItem>
                        <SelectItem
                            value="Jun"
                            className="data-highlighted:bg-slate-150 cursor-pointer rounded-md font-medium text-slate-700 focus:bg-slate-100 focus:text-slate-900 dark:text-zinc-300 dark:focus:bg-zinc-800 dark:focus:text-zinc-50 dark:data-highlighted:bg-zinc-800"
                        >
                            Jun 1 - 30, 2022
                        </SelectItem>
                    </SelectContent>
                </Select>
            </CardHeader>

            <CardContent>
                <ChartContainer config={mainChartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={filtered}
                        margin={{
                            left: 12,
                            right: 12,
                            top: 20,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid
                            vertical={true}
                            horizontal={false}
                            stroke="#27272a"
                            strokeDasharray="4 4"
                        />

                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            stroke="#a1a1aa"
                            tickFormatter={(value) => value.slice(0, 3)}
                        />

                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent />}
                        />

                        <Line
                            dataKey="completed"
                            type="monotone"
                            stroke="var(--color-completed)"
                            strokeWidth={2}
                            dot={false}
                        />
                        <Line
                            dataKey="await"
                            type="monotone"
                            stroke="var(--color-await)"
                            strokeWidth={2}
                            strokeDasharray="4 4"
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
