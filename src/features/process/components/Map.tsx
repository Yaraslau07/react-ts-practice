import { Map } from 'pigeon-maps'
import { useState } from 'react'

export default function ZovodMap() {
    const [center, setCenter] = useState<[number, number]>([
        54.542764, 26.376369,
    ])
    const [zoom, setZoom] = useState(15)
    return (
        <Map
            height={250}
            center={center}
            zoom={zoom}
            onBoundsChanged={({ center, zoom }) => {
                setCenter(center)
                setZoom(zoom)
            }}
        />
    )
}
