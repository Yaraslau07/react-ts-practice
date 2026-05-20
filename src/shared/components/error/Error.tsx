import { Button } from '@/shared/components/ui/button'

interface ErrorProps {
    title?: string
    message?: string
    error?: Error
    reset?: () => void
}

export default function Error({
    title = 'Something went wrong mein herz',
    message,
    error,
    reset,
}: ErrorProps) {
    const errorMessage =
        message || error?.message || 'Try again later mein herz'

    return (
        <div className="flex w-full max-w-md flex-col items-center justify-center space-y-4 rounded-md border border-red-200 bg-red-50/50 p-8 text-center dark:border-red-900/50 dark:bg-red-950/20">
            <div className="space-y-1">
                <h2 className="text-lg font-semibold text-red-800 dark:text-red-400">
                    {title}
                </h2>
                <p className="text-sm text-red-600 dark:text-red-300">
                    {errorMessage}
                </p>
            </div>

            {reset && (
                <Button
                    variant="outline"
                    onClick={reset}
                    className="mt-4 border-red-200 text-red-700 hover:bg-red-100 hover:text-red-800 dark:border-red-800 dark:text-red-300 dark:hover:bg-red-900 dark:hover:text-red-200"
                >
                    Try me
                </Button>
            )}
        </div>
    )
}
