import { useEffect } from 'react'

export default function Popup({
    type,
    message,
    onClose,
}: {
    type: 'success' | 'error'
    message: string
    onClose: () => void
}) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose()
        }, 4000)

        return () => {
            clearTimeout(timer)
        }
    }, [onClose])

    return (
        <div className="fixed top-6 right-6 z-20 animate-[slideIn_0.3s_ease-out_forwards]">
            <div
                className={`relative flex max-w-100 min-w-60 items-center gap-3 rounded-md border px-5 py-4 shadow-sm ${type === 'success' ? 'border-green-200 bg-green-50 text-green-900' : 'border-red-200 bg-red-50 text-red-600'}`}
            >
                <button
                    type="button"
                    className="absolute top-1/2 flex -translate-y-1/2 cursor-pointer items-center justify-center border-none bg-transparent p-2 text-xl leading-none text-inherit opacity-50 transition-opacity duration-200 ease-out hover:opacity-100"
                    onClick={onClose}
                >
                    &times;
                </button>
                <div className="ml-[20%] flex shrink-0 items-center text-base font-semibold">
                    {type === 'success' ? 'ᕙ( •̀ ᗜ •́ )ᕗ' : `¯\\_(ツ)_/¯`}
                </div>
                <div className="grow">
                    <p className="m-0 text-[0.85rem] leading-[1.4] font-medium">
                        {message}
                    </p>
                </div>
            </div>
        </div>
    )
}
