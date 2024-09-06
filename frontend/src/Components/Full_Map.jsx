import { MapContainer } from 'react-leaflet/MapContainer'
import { Popup, Marker } from 'react-leaflet';
import { TileLayer } from 'react-leaflet/TileLayer'

import "leaflet/dist/leaflet.css"

const Full_Map = () => {
    return (

        <div className="w-full h-screen overflow-hidden">

            <div className="w-full h-full">

                <MapContainer center={[28.6139, 77.2088]} zoom={13} scrollWheelZoom={true} className="leaflet-container1">
                    <TileLayer
                        opacity={1}
                        attribution='&copy; <a href="https://carto.com">CartoDB</a>, <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    />
                    <Marker position={[28.6139, 77.2088]}>
                        <Popup>
                            Ek popup
                        </Popup>
                    </Marker>
                </MapContainer>

            </div>

        </div>
    )
}

export default Full_Map