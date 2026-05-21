import { getRouteApi, useNavigate } from '@tanstack/react-router'

import { Button } from '@/shared/components/ui/button'

export default function Pagination({ totalPages }: { totalPages: number }) {
    const route = getRouteApi('/tables')

    const navigate = useNavigate({ from: '/tables' })

    const { page = 1 }: { page: number } = route.useSearch()

    if (page > totalPages) {
        throw new Error('No such page available mate')
    }

    if (totalPages < 2) return null

    return (
        <div className="flex items-center justify-start gap-3 border-t border-neutral-200 pt-7 dark:border-neutral-800">
            <Button
                variant={'outline'}
                disabled={page <= 1}
                onClick={() =>
                    navigate({
                        search: (prev) => ({ ...prev, page: page - 1 }),
                    })
                }
                className="text-neutral-600 decoration-2 underline-offset-4 transition-all hover:bg-transparent hover:text-neutral-900 hover:underline disabled:opacity-50 disabled:hover:no-underline dark:text-neutral-400 dark:hover:text-neutral-100"
            >
                Back
            </Button>

            <p className="text-md font-medium text-neutral-700 dark:text-neutral-300">
                Page{' '}
                <span className="text-neutral-900 dark:text-neutral-100">
                    {page}
                </span>{' '}
                of{' '}
                <span className="text-neutral-900 dark:text-neutral-100">
                    {totalPages}
                </span>
            </p>

            <Button
                variant={'outline'}
                disabled={page === totalPages}
                onClick={() =>
                    navigate({
                        search: (prev) => ({ ...prev, page: page + 1 }),
                    })
                }
                className="text-neutral-600 decoration-2 underline-offset-4 transition-all hover:bg-transparent hover:text-neutral-900 hover:underline disabled:opacity-50 disabled:hover:no-underline dark:text-neutral-400 dark:hover:text-neutral-100"
            >
                Next
            </Button>
        </div>
    )
}
