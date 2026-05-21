const isAppleDevice = /iPad|iPhone|iPod|Macintosh/.test(
    navigator.userAgent || navigator.vendor
)

export default function MapsOpenModel() {
    return (
        <div className="relative z-10 mt-4 flex w-full flex-col gap-3 sm:flex-row">
            <a
                href="https://www.google.com/maps/place/%D0%A1%D0%BC%D0%BE%D1%80%D0%B3%D0%BE%D0%BD%D1%81%D0%BA%D0%B8%D0%B9+%D0%90%D0%B3%D1%80%D0%B5%D0%B3%D0%B0%D1%82%D0%BD%D1%8B%D0%B9+%D0%97%D0%B0%D0%B2%D0%BE%D0%B4/@54.541929,26.3121538,9600m/data=!3m1!1e3!4m6!3m5!1s0x46dc44b31dfdbcb5:0x8d4e0ed3360c48b6!8m2!3d54.5419298!4d26.3796738!16s%2Fg%2F11f1047g0k?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:border-blue-200 hover:bg-slate-50 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:hover:border-blue-900/50 dark:hover:bg-slate-900 dark:hover:text-blue-400"
            >
                Google Maps
            </a>

            {isAppleDevice && (
                <a
                    href="https://maps.apple.com/place?auid=5882658592006647927&address=231044+Smorgon%27%2C+Grodno+Region%2C+Belarus&coordinate=54.541938%2C26.380463&name=231044&lsp=7618"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:border-blue-200 hover:bg-slate-50 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:hover:border-blue-900/50 dark:hover:bg-slate-900 dark:hover:text-blue-400"
                >
                    Apple Maps
                </a>
            )}
        </div>
    )
}
