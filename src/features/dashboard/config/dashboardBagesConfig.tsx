export const DASHBOARD_BAGES_CONFIG = {
    success: {
        baseBg: 'bg-green-300/70',
        badgeBg: 'bg-green-100',
        ringColor: 'ring-white',
        iconColor: 'text-green-500',
        icon: (
            <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.784 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z" />
            </svg>
        ),
    },
    pending: {
        baseBg: 'bg-amber-200/70',
        badgeBg: 'bg-amber-100',
        ringColor: 'ring-white',
        iconColor: 'text-amber-700',
        icon: (
            <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
        ),
    },
    error: {
        baseBg: 'bg-red-300/70',
        badgeBg: 'bg-red-100',
        ringColor: 'ring-white',
        iconColor: 'text-red-600',
        icon: (
            <svg
                className="h-3.5 w-3.5 stroke-current stroke-3"
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        ),
    },
}

export const DASHBOARD_BAGES_DATA: Array<{
    variant: 'success' | 'pending' | 'error'
    title: string
    subtitle: string
}> = [
    {
        variant: 'success',
        title: 'Medicine #580',
        subtitle: 'Awaiting results',
    },
    {
        variant: 'pending',
        title: '3 vaccines',
        subtitle: 'On hold',
    },
    {
        variant: 'error',
        title: '15 products',
        subtitle: 'Out of stocks',
    },
]
