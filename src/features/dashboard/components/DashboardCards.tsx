import { Bar, BarChart, Label, Line, LineChart, Pie, PieChart } from 'recharts'

import { ChartContainer } from '@/shared/components/ui/chart'

import {
    chartConfigFour,
    chartConfigOne,
    chartConfigThree,
    chartConfigTwo,
    chartDataFour,
    chartDataOne,
    chartDataThree,
    chartDataTwo,
} from '../config/chartsConfig'
import DashboardCardWrapper from './DashboardCardWrapper'

export default function DashboardCards() {
    return (
        <section className="grid grid-cols-1 gap-6 p-4 xl:grid-cols-2">
            <DashboardCardWrapper
                title="Total tested drugs"
                badge="-6.8%"
                metric="16,247"
                legends={[
                    { label: 'Completed', value: '52%', color: '#2563eb' },
                    {
                        label: 'Awaiting results',
                        value: '48%',
                        color: '#e2e8f0',
                    },
                ]}
            >
                <ChartContainer
                    config={chartConfigOne}
                    className="h-32 w-[50%]"
                >
                    <BarChart
                        data={chartDataOne}
                        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                        barGap={4}
                    >
                        <Bar
                            dataKey="completed"
                            stackId="a"
                            fill="var(--color-completed)"
                            radius={[0, 0, 4, 4]}
                            barSize={6}
                        />
                        <Bar
                            dataKey="awaiting"
                            stackId="a"
                            fill="var(--color-awaiting)"
                            radius={[4, 4, 0, 0]}
                            barSize={6}
                        />
                    </BarChart>
                </ChartContainer>
            </DashboardCardWrapper>

            <DashboardCardWrapper
                title="Drug approval rates"
                badge="+26.5%"
                metric="356"
                customFooter={
                    <div className="mt-2 flex w-full items-center justify-between border-t-2 border-slate-100 pt-4 text-[15px] dark:border-slate-800">
                        <p className="text-slate-500 dark:text-slate-400">
                            01 May
                        </p>
                        <p className="text-slate-500 dark:text-slate-400">
                            07 May
                        </p>
                    </div>
                }
            >
                <ChartContainer config={chartConfigTwo} className="h-32 w-full">
                    <LineChart
                        accessibilityLayer
                        data={chartDataTwo}
                        margin={{ left: 12, right: 12, top: 10, bottom: 0 }}
                    >
                        <Line
                            dataKey="completed"
                            type="linear"
                            stroke="var(--color-completed)"
                            strokeWidth={2}
                            dot={false}
                        />
                        <Line
                            dataKey="await"
                            type="linear"
                            stroke="var(--color-await)"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </DashboardCardWrapper>

            <DashboardCardWrapper
                title="Testing process"
                legends={[
                    {
                        label: 'Preclinical testing',
                        value: '72%',
                        color: '#2563eb',
                    },
                    {
                        label: 'Clinical trials',
                        value: '18%',
                        color: '#93c5fd',
                    },
                    {
                        label: 'Regulatory approval',
                        value: '10%',
                        color: '#3b82f6',
                    },
                ]}
            >
                <ChartContainer
                    config={chartConfigThree}
                    className="mt-4 h-32 w-[50%]"
                >
                    <PieChart>
                        <Pie
                            data={chartDataThree}
                            dataKey="percent"
                            nameKey="type"
                            innerRadius={50}
                            outerRadius={55}
                            paddingAngle={4}
                            stroke="none"
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (
                                        viewBox &&
                                        'cx' in viewBox &&
                                        'cy' in viewBox
                                    ) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-slate-600 text-xl font-semibold dark:fill-slate-300"
                                                >
                                                    72%
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </DashboardCardWrapper>

            <DashboardCardWrapper
                title="Number of people tested"
                legends={[
                    { label: 'Tested', value: '70%', color: '#2563eb' },
                    { label: 'Non tested', value: '30%', color: '#e2e8f0' },
                ]}
            >
                <ChartContainer
                    config={chartConfigFour}
                    className="mb-7 h-32 w-[50%]"
                >
                    <PieChart>
                        <Pie
                            data={chartDataFour}
                            dataKey="value"
                            nameKey="name"
                            innerRadius={50}
                            outerRadius={55}
                            startAngle={180}
                            endAngle={0}
                            stroke="none"
                            cornerRadius={10}
                            cy="100%"
                        />
                    </PieChart>
                </ChartContainer>
            </DashboardCardWrapper>
        </section>
    )
}
