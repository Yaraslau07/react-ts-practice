import { createFileRoute } from '@tanstack/react-router'

import ProcessPageComponent from '@/features/process/components/ProcessPage'

export const Route = createFileRoute('/process')({
    component: ProcessPage,
})

function ProcessPage() {
    return <ProcessPageComponent />
}
