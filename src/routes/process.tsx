import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/process')({
    component: ProcessPage,
})

function ProcessPage() {
    return <div></div>
}
