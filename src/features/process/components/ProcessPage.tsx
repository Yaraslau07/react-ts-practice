import { Calendar, MapPin, Signpost } from 'lucide-react'
import { useState } from 'react'

import AmphImg from '@/shared/assets/amphetamine.webp'
import { Badge } from '@/shared/components/ui/badge'
import { Button } from '@/shared/components/ui/button'

import ZovodMap from './Map'
import MapsOpenModel from './MapsOpenModel'
import StartProcess from './StartProcess'

export default function ProcessPageComponent() {
    const [mapsModelOpened, setMapsModelOpened] = useState<boolean>(false)
    const [processStarted, setProcessStarted] = useState(false)

    return (
        <section className="mx-auto flex w-full flex-col p-4 md:flex-row md:p-6 lg:p-8">
            <div className="mb-8 flex flex-1 flex-col border-b border-gray-200 pb-8 md:mb-0 md:border-r md:border-b-0 md:pr-8 md:pb-0 dark:border-slate-800">
                <div className="mb-8 flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8 dark:border-slate-800 dark:bg-slate-950">
                    <h1 className="mb-2 text-2xl font-bold text-slate-900 md:text-3xl dark:text-slate-50">
                        Amphetamine - new drug testing for chronic depression
                    </h1>
                    <p className="mb-8 text-sm font-medium text-slate-500 dark:text-slate-400">
                        Smorgon, Belarus
                    </p>

                    <div className="mb-8 flex flex-col rounded-xl border border-gray-100 bg-slate-50/50 md:flex-row dark:border-slate-800/80 dark:bg-slate-900/50">
                        <div className="flex flex-1 flex-col border-b border-gray-300 p-6 md:border-r md:border-b-0 dark:border-slate-500/80">
                            <div className="mb-3 flex items-center gap-3">
                                <div className="rounded-lg bg-blue-100 p-2.5 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                                    Location
                                </h2>
                            </div>
                            <p className="ml-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                Industrial Avenue, Building 27, Smorgon 231000,
                                Belarus
                            </p>
                        </div>

                        <div className="flex flex-1 flex-col p-6">
                            <div className="mb-3 flex items-center gap-3">
                                <div className="rounded-lg bg-blue-100 p-2.5 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                                    Date & Time
                                </h2>
                            </div>
                            <div className="ml-1 flex flex-col gap-1 text-sm text-slate-600 dark:text-slate-400">
                                <p>28th June - 2nd July 2022</p>
                                <p>10 am - 4 pm CET</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Button
                            onClick={() => setProcessStarted(true)}
                            className="h-12 flex-1 rounded-xl bg-blue-600 py-3 text-base font-medium text-white shadow-none hover:bg-blue-700 md:py-0"
                        >
                            Start Process
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="h-12 flex-1 rounded-xl border-gray-200 bg-transparent py-3 text-base font-medium text-blue-600 shadow-none transition-colors duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 md:py-0 dark:border-slate-800 dark:text-blue-400 dark:hover:border-blue-800 dark:hover:bg-blue-900/20 dark:hover:text-blue-400"
                        >
                            <a
                                target="_blank"
                                href="https://www.google.com/calendar/render?action=TEMPLATE&text=Amphetamine&details=new+drug+testing+for+chronic+depression&location=Industrial+Avenue%2C+Building+27%2C+Smorgon+231000%2C+Belarus&dates=20220628T080000Z%2F20220702T140000Z"
                            >
                                <Calendar className="mr-2 h-5 w-5" />
                                Add to calendar
                            </a>
                        </Button>
                    </div>
                    {processStarted && (
                        <StartProcess
                            onClose={() => setProcessStarted(false)}
                        />
                    )}
                </div>

                <div className="flex flex-col px-1 md:px-2">
                    <h2 className="mb-4 text-xl font-bold text-slate-900 md:text-2xl dark:text-slate-50">
                        About this event
                    </h2>
                    <p className="text-sm leading-relaxed text-slate-600 md:text-base dark:text-slate-400">
                        Amphetamine is a central nervous system (CNS) stimulant
                        that is used in the treatment of attention deficit
                        hyperactivity disorder (ADHD) and narcolepsy; it is also
                        used to treat binge eating disorder in the form of
                        lisdexamfetamine. Historically, it has been used to
                        treat nasal congestion and depression. Amphetamine is
                        also used as an athletic performance enhancer and
                        cognitive enhancer, and recreationally as an aphrodisiac
                        and euphoriant. It is a prescription drug in many
                        countries, and unauthorized possession and distribution
                        of amphetamine are often tightly controlled due to the
                        significant health risks associated with recreational
                        use.
                    </p>
                </div>
            </div>

            <div className="w-full md:ml-8 md:w-[35%]">
                <h2 className="mb-2 text-xl font-bold text-slate-900 md:text-2xl dark:text-slate-50">
                    Manufacturer
                </h2>

                <div className="flex items-center justify-start gap-3">
                    <img
                        className="rounded-xl"
                        src={AmphImg}
                        alt="amphetamine"
                    ></img>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        DOZ
                    </p>
                </div>

                <h2 className="mt-7 mb-2 text-xl font-bold text-slate-900 md:text-2xl dark:text-slate-50">
                    Location
                </h2>

                <div className="flex flex-col">
                    <div className="mt-2">
                        <ZovodMap />
                    </div>
                    <div className="flex justify-between">
                        <p className="mt-6 text-sm font-medium text-slate-600 dark:text-slate-300">
                            Industrial Avenue, Building 27, 231000
                        </p>
                        <p className="mt-6 text-sm font-medium text-slate-500 dark:text-slate-400">
                            Smorgon, Belarus
                        </p>
                    </div>
                </div>

                <Button
                    variant={'outline'}
                    className="mt-8 flex w-full gap-1.5 border-gray-200 bg-transparent transition-colors duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-800 dark:hover:border-blue-800 dark:hover:bg-blue-900/20 dark:hover:text-blue-400"
                    onClick={() => setMapsModelOpened(!mapsModelOpened)}
                >
                    {!mapsModelOpened && <Signpost />}
                    {mapsModelOpened ? 'Close' : 'Get directions'}
                </Button>

                <div
                    className={`grid transition-all duration-300 ease-in-out ${mapsModelOpened ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    inert={!mapsModelOpened ? true : false}
                >
                    <div className="overflow-hidden">
                        <div className="pt-2">
                            <MapsOpenModel />
                        </div>
                    </div>
                </div>

                <h2 className="mt-10 mb-2 text-xl font-bold text-slate-900 md:text-2xl dark:text-slate-50">
                    Tags
                </h2>

                <div className="mt-6 flex gap-4">
                    <Badge className="rounded-sm bg-gray-200 py-3 text-slate-800">
                        Medicine #459026
                    </Badge>
                    <Badge className="rounded-sm bg-gray-200 py-3 text-slate-800">
                        Vaccine #52
                    </Badge>
                </div>
            </div>
        </section>
    )
}
