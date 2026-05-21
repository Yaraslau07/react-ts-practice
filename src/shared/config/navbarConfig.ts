import { Bell, FileText, GitMerge, Grid, Home, LayoutGrid } from 'lucide-react'

export const NAV_ITEMS = [
    { id: 'home', label: 'Home', path: '/', icon: Home, isLink: true },
    {
        id: 'tables',
        label: 'Tables',
        path: '/tables',
        icon: LayoutGrid,
        isLink: true,
    },
    {
        id: 'process',
        label: 'Process',
        path: '/process',
        icon: GitMerge,
        isLink: true,
    },
    {
        id: 'docs',
        label: 'Documentation',
        path: '',
        icon: FileText,
        isLink: false,
    },
]

export const ACTION_BUTTONS = [
    {
        id: 'notifications',
        label: 'Notifications',
        icon: Bell,
        'aria-label': 'notifications',
    },
    { id: 'apps', label: 'Apps', icon: Grid, 'aria-label': 'apps' },
]
