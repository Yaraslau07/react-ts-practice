import { Link } from '@tanstack/react-router'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/shared/components/ui/navigation-menu'
import { ACTION_BUTTONS, NAV_ITEMS } from '@/shared/config/navbarConfig'
import { usePopup } from '@/shared/hooks/popup/usePopup'
import { useTheme } from '@/shared/providers/ThemeProvider'

export default function Navbar() {
    const [isNavbarOpened, setIsNavbarOpened] = useState(false)

    const { theme, setTheme } = useTheme()

    const { showPopup, PopupComponent } = usePopup()

    return (
        <nav className="sticky top-0 z-10 flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white px-4 transition-colors md:px-6 dark:border-slate-800 dark:bg-slate-950">
            {PopupComponent}
            <div className="flex items-center md:hidden">
                <button
                    onClick={() => setIsNavbarOpened(!isNavbarOpened)}
                    className="rounded-md p-2 text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                    {isNavbarOpened ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <div className="hidden flex-1 items-center justify-center md:flex">
                <NavigationMenu>
                    <NavigationMenuList className="gap-2">
                        {NAV_ITEMS.map((item) => (
                            <NavigationMenuItem key={item.id}>
                                <NavigationMenuLink
                                    asChild
                                    className={navigationMenuTriggerStyle()}
                                >
                                    {item.isLink ? (
                                        <Link
                                            to={item.path}
                                            className="flex items-center gap-2 text-slate-500 dark:text-slate-400 dark:hover:text-slate-200"
                                        >
                                            <item.icon size={18} /> {item.label}
                                        </Link>
                                    ) : (
                                        <button
                                            onClick={() =>
                                                showPopup(
                                                    'No such page available yet',
                                                    'error'
                                                )
                                            }
                                            className="flex items-center gap-2 text-slate-500 dark:text-slate-400 dark:hover:text-slate-200"
                                        >
                                            <item.icon size={18} /> {item.label}
                                        </button>
                                    )}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="flex items-center justify-end gap-2 text-slate-600 md:gap-3 dark:text-slate-300">
                <button
                    onClick={() =>
                        setTheme(theme === 'light' ? 'dark' : 'light')
                    }
                    className="rounded-full p-2 text-amber-600 transition hover:bg-amber-100 dark:bg-slate-900 dark:text-amber-400 dark:hover:bg-slate-800"
                >
                    {theme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                {ACTION_BUTTONS.map((btn) => (
                    <button
                        key={btn.id}
                        onClick={() => showPopup('Not yet available', 'error')}
                        className="hidden rounded-full p-2 text-slate-500 transition hover:bg-slate-100 sm:flex dark:text-slate-400 dark:hover:bg-slate-800"
                    >
                        <btn.icon size={20} />
                    </button>
                ))}

                <div className="ml-2 h-8 w-8 shrink-0 overflow-hidden rounded-full border border-slate-300 bg-slate-200 dark:border-slate-700 dark:bg-slate-800">
                    <img
                        src="https://i.pravatar.cc/150?u=143"
                        alt="Profile"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>

            {isNavbarOpened && (
                <div
                    className="fixed inset-0 top-16 z-40 bg-slate-900/20 backdrop-blur-sm md:hidden dark:bg-black/40"
                    onClick={() => setIsNavbarOpened(false)}
                />
            )}
            <div
                className={`absolute top-16 left-0 z-50 flex w-full flex-col overflow-hidden border-b border-slate-200 bg-white shadow-lg transition-all duration-300 ease-in-out md:hidden dark:border-slate-800 dark:bg-slate-950 ${isNavbarOpened ? 'max-h-96 py-4 opacity-100' : 'pointer-events-none max-h-0 border-transparent py-0 opacity-0'} `}
            >
                <div className="flex flex-col gap-4 px-6">
                    <NavigationMenu className="w-full max-w-full justify-start">
                        <NavigationMenuList className="w-full flex-col items-stretch gap-2 space-x-0">
                            {NAV_ITEMS.map((item) => (
                                <NavigationMenuItem
                                    key={item.id}
                                    className="w-full"
                                >
                                    <NavigationMenuLink
                                        asChild
                                        className={` ${navigationMenuTriggerStyle()} h-12 w-full justify-start bg-transparent px-4 text-base font-medium text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-white`}
                                    >
                                        {item.isLink ? (
                                            <Link
                                                to={item.path}
                                                onClick={() =>
                                                    setIsNavbarOpened(false)
                                                }
                                                className="flex items-center gap-3"
                                            >
                                                <item.icon
                                                    size={20}
                                                    className="text-slate-500 dark:text-slate-400"
                                                />
                                                {item.label}
                                            </Link>
                                        ) : (
                                            <button
                                                onClick={() =>
                                                    setIsNavbarOpened(false)
                                                }
                                                className="flex items-center gap-3"
                                            >
                                                <item.icon
                                                    size={20}
                                                    className="text-slate-500 dark:text-slate-400"
                                                />
                                                {item.label}
                                            </button>
                                        )}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div className="mt-2 flex gap-4 border-t border-slate-100 pt-4 sm:hidden dark:border-slate-800">
                        {ACTION_BUTTONS.map((btn) => (
                            <button
                                key={btn.id}
                                className="flex w-full items-center gap-3 rounded-md px-4 py-3 text-base font-medium text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-white"
                            >
                                <btn.icon size={20} /> {btn.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}
