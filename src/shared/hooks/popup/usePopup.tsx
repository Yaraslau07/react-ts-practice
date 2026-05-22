import { useCallback, useState } from 'react'

import Popup from '@/shared/components/popup/Popup.tsx'

type PopupType = 'success' | 'error'

interface PopupState {
    isOpen: boolean
    type: PopupType
    message: string
}

export function usePopup() {
    const [popupState, setPopupState] = useState<PopupState>({
        isOpen: false,
        type: 'success',
        message: '',
    })

    const showPopup = useCallback(
        (message: string, type: PopupType = 'success') => {
            setPopupState({
                isOpen: true,
                type,
                message,
            })
        },
        []
    )

    const hidePopup = useCallback(() => {
        setPopupState((prev) => ({ ...prev, isOpen: false }))
    }, [])

    const PopupComponent = popupState.isOpen ? (
        <Popup
            type={popupState.type}
            message={popupState.message}
            onClose={hidePopup}
        />
    ) : null

    return { showPopup, PopupComponent }
}
