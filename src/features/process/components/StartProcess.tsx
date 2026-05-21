import { useEffect, useRef, useState } from 'react'

import Loading from '@/shared/components/loading/Loading'

type Stage = 'connecting' | 'age-select' | 'dose-select' | 'result'
type AgeGroup = '0-17' | '18-40' | '50-80'
type Dosage = 2 | 4 | 8

export default function StartProcess({ onClose }: { onClose: () => void }) {
    const [currentStage, setCurrentStage] = useState<Stage>('connecting')
    const [selectedAge, setSelectedAge] = useState<AgeGroup | null>(null)
    const [chatLog, setChatLog] = useState<
        { id: string; sender: 'user' | 'bot'; message: string }[]
    >([])

    const ws = useRef<WebSocket | null>(null)

    function calculateFinalResult(finalAge: AgeGroup, finalDosage: Dosage) {
        let outcome = 'All died.'
        if (finalAge === '0-17' && finalDosage === 2)
            outcome = 'The drug saved them!'
        if (finalAge === '18-40' && finalDosage === 4)
            outcome = 'The drug saved them!'
        if (finalAge === '50-80' && finalDosage === 8)
            outcome = 'The drug saved them!'

        setChatLog((prev) => [
            ...prev,
            { id: crypto.randomUUID(), sender: 'bot', message: outcome },
        ])
    }

    useEffect(() => {
        const socket = new WebSocket('wss://ws.ifelse.io')
        ws.current = socket

        socket.onopen = () => {
            setCurrentStage('age-select')
            setChatLog([
                {
                    id: crypto.randomUUID(),
                    sender: 'bot',
                    message: 'What age group would u like to perform tests on?',
                },
            ])
        }

        socket.onmessage = (event) => {
            let echoedData

            try {
                echoedData = JSON.parse(event.data)
            } catch {
                return
            }

            if (echoedData.type === 'Age') {
                setCurrentStage('dose-select')
                setChatLog((prev) => [
                    ...prev,
                    {
                        id: crypto.randomUUID(),
                        sender: 'bot',
                        message:
                            'What dose would u like the patients to be given?',
                    },
                ])
            } else if (echoedData.type === 'Dose') {
                setCurrentStage('result')
                calculateFinalResult(echoedData.age, echoedData.dosage)
            }
        }

        return () => {
            if (socket) {
                socket.close()
            }
        }
    }, [])

    const handleAgeSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
        const age = e.currentTarget.value as AgeGroup

        setSelectedAge(age)
        setChatLog((prev) => [
            ...prev,
            { id: crypto.randomUUID(), sender: 'user', message: age },
        ])
        ws.current?.send(JSON.stringify({ type: 'Age', age: age }))
    }

    const handleDosageSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
        const dosage = Number(e.currentTarget.value) as Dosage

        setChatLog((prev) => [
            ...prev,
            {
                id: crypto.randomUUID(),
                sender: 'user',
                message: String(dosage),
            },
        ])
        ws.current?.send(
            JSON.stringify({ type: 'Dose', age: selectedAge, dosage: dosage })
        )
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity">
            <div className="relative flex h-125 w-full max-w-md flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900">
                <div className="flex items-center justify-between border-b border-gray-100 p-4 dark:border-gray-800">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                        Testing Process
                    </h3>
                    <button
                        className="rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-200"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>

                <div className="flex-1 space-y-4 overflow-y-auto bg-gray-50 p-4 dark:bg-gray-950/50">
                    {currentStage === 'connecting' ? (
                        <div className="flex h-full flex-col items-center justify-center space-y-4">
                            <div className="mb-8">
                                <Loading />
                            </div>
                            <p className="animate-pulse text-sm font-medium text-gray-500 dark:text-gray-400">
                                Connecting...
                            </p>
                        </div>
                    ) : (
                        <>
                            {chatLog.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex w-full ${
                                        msg.sender === 'user'
                                            ? 'justify-end'
                                            : 'justify-start'
                                    }`}
                                >
                                    <div
                                        className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm ${
                                            msg.sender === 'user'
                                                ? 'rounded-tr-sm bg-blue-600 text-white'
                                                : 'rounded-tl-sm border border-gray-100 bg-white text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300'
                                        }`}
                                    >
                                        {msg.message}
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>

                <div className="border-t border-gray-100 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                    <div className="flex flex-wrap justify-center gap-2">
                        {currentStage === 'age-select' &&
                            (['0-17', '18-40', '50-80'] as AgeGroup[]).map(
                                (ageGroup) => (
                                    <button
                                        key={ageGroup}
                                        value={ageGroup}
                                        onClick={handleAgeSelect}
                                        className="flex-1 rounded-xl bg-blue-50 px-4 py-3 font-medium text-blue-700 transition-colors hover:bg-blue-100 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-800/50"
                                    >
                                        {ageGroup}
                                    </button>
                                )
                            )}

                        {currentStage === 'dose-select' &&
                            ([2, 4, 8] as Dosage[]).map((dosage) => (
                                <button
                                    key={dosage}
                                    value={dosage}
                                    onClick={handleDosageSelect}
                                    className="flex-1 rounded-xl bg-indigo-50 px-4 py-3 font-medium text-indigo-700 transition-colors hover:bg-indigo-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-800/50"
                                >
                                    {dosage}
                                </button>
                            ))}

                        {currentStage === 'result' && (
                            <button
                                onClick={onClose}
                                className="w-full rounded-xl bg-green-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
                            >
                                Finish & Close
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
