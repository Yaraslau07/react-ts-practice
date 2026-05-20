import { useQuery } from '@tanstack/react-query'
import { getRouteApi } from '@tanstack/react-router'
import { Check, X } from 'lucide-react'

import Error from '@/shared/components/error/Error'
import Loading from '@/shared/components/loading/Loading'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/shared/components/ui/table'

import { getMeditians } from '../api/getMeditians'
import Pagination from './Pagination'

const route = getRouteApi('/tables')

export default function TableComponent() {
    const { page }: { page: number } = route.useSearch()

    const { data, isLoading, isError } = useQuery({
        queryKey: ['meditians', page],
        queryFn: () => getMeditians(page),
    })

    if (isLoading) return <Loading />

    if (isError) return <Error />

    return (
        <section>
            <div className="hidden w-full overflow-x-auto md:block">
                <Table className="w-full">
                    <TableHeader>
                        <TableRow className="border-b bg-gray-50/50 dark:border-neutral-800 dark:bg-neutral-900/50">
                            <TableHead className="font-semibold text-gray-600 dark:text-neutral-400">
                                NAME
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600 dark:text-neutral-400">
                                LOCATION
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600 dark:text-neutral-400">
                                START DATE
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600 dark:text-neutral-400">
                                END DATE
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600 dark:text-neutral-400">
                                SUCCESS REACTION
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600 dark:text-neutral-400">
                                PROCESS
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600 dark:text-neutral-400">
                                STATUS
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data && data.length > 0 ? (
                            data.map((medicine) => (
                                <TableRow
                                    key={medicine.id}
                                    className="border-b hover:bg-gray-50/50 dark:border-neutral-800 dark:hover:bg-neutral-800/50"
                                >
                                    <TableCell className="font-medium text-blue-600 dark:text-blue-400">
                                        {medicine.name}
                                    </TableCell>

                                    <TableCell className="text-gray-600 dark:text-neutral-300">
                                        {medicine.location}
                                    </TableCell>
                                    <TableCell className="text-gray-600 dark:text-neutral-300">
                                        {medicine.startDate}
                                    </TableCell>
                                    <TableCell className="text-gray-600 dark:text-neutral-300">
                                        {medicine.endDate}
                                    </TableCell>

                                    <TableCell>
                                        {medicine.success ? (
                                            <div className="ml-11 flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400">
                                                <Check
                                                    className="h-4 w-4"
                                                    strokeWidth={3}
                                                />
                                            </div>
                                        ) : (
                                            <div className="ml-11 flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-red-500 dark:bg-red-500/20 dark:text-red-400">
                                                <X
                                                    className="h-4 w-4"
                                                    strokeWidth={3}
                                                />
                                            </div>
                                        )}
                                    </TableCell>

                                    <TableCell>
                                        <div className="flex w-32 flex-col gap-1.5">
                                            <span className="text-xs font-medium text-gray-500 dark:text-neutral-400">
                                                {medicine.process} /{' '}
                                                {medicine.total}
                                            </span>
                                            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-neutral-800">
                                                <div
                                                    className="h-full rounded-full bg-green-500"
                                                    style={{
                                                        width: `${(Number(medicine.process) / Number(medicine.total)) * 100}%`,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </TableCell>

                                    <TableCell>
                                        <div className="flex items-center gap-1">
                                            <div
                                                className={`h-1.5 rounded-sm bg-blue-500`}
                                                style={{
                                                    width: `${medicine.status[0]}%`,
                                                }}
                                            />
                                            <div
                                                className={`h-1.5 rounded-sm bg-red-500`}
                                                style={{
                                                    width: `${medicine.status[1]}%`,
                                                }}
                                            />
                                            <div
                                                className={`h-1.5 rounded-sm bg-orange-500`}
                                                style={{
                                                    width: `${medicine.status[2]}%`,
                                                }}
                                            />
                                            <div
                                                className={`h-1.5 rounded-sm bg-green-500`}
                                                style={{
                                                    width: `${medicine.status[3]}%`,
                                                }}
                                            />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={7}
                                    className="py-6 text-center text-gray-500 dark:text-neutral-400"
                                >
                                    No medications found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="mt-2 grid grid-cols-1 gap-4 md:hidden">
                {data && data.length > 0 ? (
                    data.map((record) => (
                        <div
                            key={record.id}
                            className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-lg font-bold tracking-tight text-blue-600 dark:text-blue-400">
                                        {record.name}
                                    </h3>
                                    <p className="mt-0.5 text-sm text-gray-500 dark:text-neutral-400">
                                        {record.location}
                                    </p>
                                </div>
                                <div className="mt-1 shrink-0">
                                    {record.success ? (
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400">
                                            <Check
                                                className="h-4 w-4"
                                                strokeWidth={3}
                                            />
                                        </div>
                                    ) : (
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-500 dark:bg-red-500/20 dark:text-red-400">
                                            <X
                                                className="h-4 w-4"
                                                strokeWidth={3}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 rounded-lg border border-gray-100 bg-gray-50 p-3 dark:border-neutral-800 dark:bg-neutral-800/50">
                                <div>
                                    <p className="mb-1 text-xs font-bold text-gray-400 dark:text-neutral-500">
                                        START DATE
                                    </p>
                                    <p className="text-sm font-medium text-gray-700 dark:text-neutral-300">
                                        {record.startDate}
                                    </p>
                                </div>
                                <div>
                                    <p className="mb-1 text-xs font-bold text-gray-400 dark:text-neutral-500">
                                        END DATE
                                    </p>
                                    <p className="text-sm font-medium text-gray-700 dark:text-neutral-300">
                                        {record.endDate}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-1 flex flex-col gap-4">
                                <div>
                                    <div className="mb-1.5 flex items-end justify-between">
                                        <p className="text-xs font-bold text-gray-500 dark:text-neutral-400">
                                            PROCESS
                                        </p>
                                        <span className="text-xs font-medium text-gray-600 dark:text-neutral-300">
                                            {record.process} / {record.total}
                                        </span>
                                    </div>
                                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-neutral-800">
                                        <div
                                            className="h-full rounded-full bg-green-500 transition-all duration-500"
                                            style={{
                                                width: `${(Number(record.process) / Number(record.total)) * 100}%`,
                                            }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <p className="mb-2 text-xs font-bold text-gray-500 dark:text-neutral-400">
                                        STATUS
                                    </p>
                                    <div className="flex w-full items-center gap-1">
                                        <div
                                            className="h-2 rounded-sm bg-blue-500 transition-all duration-500"
                                            style={{
                                                width: `${record.status[0]}%`,
                                            }}
                                        />
                                        <div
                                            className="h-2 rounded-sm bg-red-500 transition-all duration-500"
                                            style={{
                                                width: `${record.status[1]}%`,
                                            }}
                                        />
                                        <div
                                            className="h-2 rounded-sm bg-orange-500 transition-all duration-500"
                                            style={{
                                                width: `${record.status[2]}%`,
                                            }}
                                        />
                                        <div
                                            className="h-2 rounded-sm bg-green-500 transition-all duration-500"
                                            style={{
                                                width: `${record.status[3]}%`,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No medications found.</div>
                )}
            </div>
            <Pagination totalPages={6} />
        </section>
    )
}
