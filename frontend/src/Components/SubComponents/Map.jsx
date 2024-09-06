import { MapContainer } from 'react-leaflet/MapContainer'
import { Popup, Marker } from 'react-leaflet';
import { TileLayer } from 'react-leaflet/TileLayer'

import "leaflet/dist/leaflet.css"

const Map = () => {
  return (
    <div className="w-full min-h-[20vh] my-6">

      <div className="leaflet-container w-full h-[60vh] border border-slate-800 rounded-xl overflow-hidden">

        <MapContainer center={[28.6139, 77.2088]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            opacity={1}
            zIndex={10}
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

export default Map