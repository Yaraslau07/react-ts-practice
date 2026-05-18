import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tables')({
    component: TablesPage,
})

function TablesPage() {
    return <div></div>
}
