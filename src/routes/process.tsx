import { createFileRoute } from '@tanstack/react-router'

import ProcessPageComponent from '@/features/process/components/ProcessPage'

export const Route = createFileRoute('/process')({
    head: () => ({
        meta: [
            {
                title: 'Amphetamine Testing for Chronic Depression | Pharmaceutical Company',
            },
            {
                name: 'description',
                content:
                    'View details for the new drug testing process for chronic depression treatment in Smorgon, Belarus. Get directions and schedule information.',
            },
        ],
    }),
    component: ProcessPage,
})

function ProcessPage() {
    return <ProcessPageComponent />
}
