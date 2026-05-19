import type { ChartConfig } from '@/shared/components/ui/chart'

export const mainChartData = [
    { date: '01 Apr', await: 30, completed: 15 },
    { date: '03 Apr', await: 20, completed: 30 },
    { date: '05 Apr', await: 10, completed: 30 },
    { date: '07 Apr', await: 10, completed: 22 },
    { date: '09 Apr', await: 10, completed: 22 },
    { date: '11 Apr', await: 10, completed: 22 },
    { date: '13 Apr', await: 15, completed: 45 },
    { date: '15 Apr', await: 20, completed: 55 },
    { date: '17 Apr', await: 35, completed: 70 },
    { date: '20 Apr', await: 35, completed: 90 },
    { date: '22 Apr', await: 50, completed: 100 },
    { date: '24 Apr', await: 75, completed: 45 },
    { date: '26 Apr', await: 25, completed: 45 },
    { date: '28 Apr', await: 40, completed: 15 },
    { date: '30 Apr', await: 30, completed: 25 },

    { date: '01 May', await: 25, completed: 12 },
    { date: '03 May', await: 18, completed: 20 },
    { date: '05 May', await: 5, completed: 25 },
    { date: '07 May', await: 5, completed: 25 },
    { date: '09 May', await: 5, completed: 20 },
    { date: '11 May', await: 5, completed: 20 },
    { date: '13 May', await: 5, completed: 20 },
    { date: '14 May', await: 5, completed: 42 },
    { date: '15 May', await: 5, completed: 42 },
    { date: '17 May', await: 25, completed: 55 },
    { date: '19 May', await: 35, completed: 70 },
    { date: '21 May', await: 35, completed: 85 },
    { date: '23 May', await: 48, completed: 98 },
    { date: '25 May', await: 78, completed: 65 },
    { date: '26 May', await: 22, completed: 42 },
    { date: '27 May', await: 26, completed: 42 },
    { date: '28 May', await: 32, completed: 25 },
    { date: '29 May', await: 45, completed: 15 },
    { date: '30 May', await: 38, completed: 24 },

    { date: '01 Jun', await: 40, completed: 20 },
    { date: '03 Jun', await: 30, completed: 35 },
    { date: '05 Jun', await: 15, completed: 40 },
    { date: '07 Jun', await: 15, completed: 30 },
    { date: '09 Jun', await: 15, completed: 30 },
    { date: '11 Jun', await: 15, completed: 55 },
    { date: '14 Jun', await: 25, completed: 75 },
    { date: '15 Jun', await: 45, completed: 85 },
    { date: '18 Jun', await: 60, completed: 110 },
    { date: '21 Jun', await: 85, completed: 50 },
    { date: '23 Jun', await: 30, completed: 50 },
    { date: '25 Jun', await: 40, completed: 30 },
    { date: '27 Jun', await: 50, completed: 20 },
    { date: '29 Jun', await: 42, completed: 35 },
    { date: '30 Jun', await: 35, completed: 35 },
]

export const mainChartConfig = {
    completed: {
        label: 'completed',
        color: '#3b82f6',
    },
    await: {
        label: 'await',
        color: '#60a5fa',
    },
} satisfies ChartConfig

export const chartDataOne = [
    { id: '1', completed: 45, awaiting: 55 },
    { id: '2', completed: 50, awaiting: 50 },
    { id: '3', completed: 85, awaiting: 15 },
    { id: '4', completed: 60, awaiting: 40 },
    { id: '5', completed: 35, awaiting: 65 },
    { id: '6', completed: 45, awaiting: 55 },
    { id: '7', completed: 75, awaiting: 25 },
    { id: '8', completed: 55, awaiting: 45 },
]

export const chartDataTwo = [
    { id: '1', completed: 35, await: 25 },
    { id: '2', completed: 25, await: 15 },
    { id: '3', completed: 45, await: 55 },
    { id: '4', completed: 15, await: 35 },
    { id: '5', completed: 95, await: 45 },
    { id: '6', completed: 75, await: 30 },
    { id: '7', completed: 115, await: 45 },
]

export const chartDataThree = [
    { id: '1', type: 'largest', percent: 72, fill: '#4361ee' },
    { id: '2', type: 'medium', percent: 18, fill: '#b4c6fc' },
    { id: '3', type: 'smallest', percent: 10, fill: '#4982c7' },
]

export const chartDataFour = [
    { id: '1', name: 'tested', value: 70, fill: '#4361ee' },
    { id: '2', name: 'nontested', value: 30, fill: '#e2e8f0' },
]

export const chartConfigOne = {
    completed: {
        label: 'Completed',
        color: '#4361ee',
    },
    awaiting: {
        label: 'Awaiting results',
        color: '#e2e8f0',
    },
} satisfies ChartConfig

export const chartConfigTwo = {
    completed: {
        label: 'completed',
        color: '#3b82f6',
    },
    await: {
        label: 'await',
        color: '#60a5fa',
    },
} satisfies ChartConfig

export const chartConfigThree = {
    largest: {
        label: 'Preclinical testing',
        color: '#4361ee',
    },
    medium: {
        label: 'Clinical Trials',
        color: '#b4c6fc',
    },
    smallest: {
        label: 'Regulatory approval',
        color: '#4982c7',
    },
} satisfies ChartConfig

export const chartConfigFour = {
    tested: {
        label: 'Tested',
        color: '#4361ee',
    },
    nontested: {
        label: 'Non-tested',
        color: '#e2e8f0',
    },
} satisfies ChartConfig
