
import { MapContainer, Marker, TileLayer, useMap, useMapEvents } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk"
import type { Coords } from '../types'
import { useEffect } from 'react'
type Props = {
  coords: Coords
  onMapClick: (lat: number, lon: number) => void
  mapType: string
}

const OPENWEATHER_API_KEY =
  import.meta.env.VITE_API_KEY

const MAPTILER_API_KEY =
  import.meta.env.VITE_MAPTILER_API_KEY

export default function Map({coords, onMapClick,mapType }: Props) {
const {lat, lon} = coords
  return (
    <MapContainer
          center={[lat, lon]}
          zoom={5}
          style={{
            width: "1000px",
            height: "400px",
          }}
        >
          {/* Dark base map */}
          <MapTileLayer />
    
          {/* OpenWeather weather layer */}
          <TileLayer
            key={mapType}
            opacity={0.7}
            url={`https://tile.openweathermap.org/map/${mapType}/{z}/{x}/{y}.png?appid=${OPENWEATHER_API_KEY}`}
          />
    
          <Marker position={[lat, lon]} />
    
          <MapClick
            coords={coords}
            onMapClick={onMapClick}
          />
        </MapContainer>
  )
}

function MapClick({
  onMapClick,
  coords,
}: {
  onMapClick: (lat: number, lon: number) => void
  coords: Coords
}) {
  const map = useMap()

  // Move map when selected location changes
  useEffect(() => {
    map.panTo([coords.lat, coords.lon])
  }, [map, coords.lat, coords.lon])

  // Handle user clicking map
  useMapEvents({
    click(e) {
      onMapClick(
        e.latlng.lat,
        e.latlng.lng
      )
    },
  })

  return null
}

function MapTileLayer() {
  const map = useMap()

  useEffect(() => {
    const tileLayer = new MaptilerLayer({
      style: "basic-dark",
      apiKey: MAPTILER_API_KEY,
    })

    tileLayer.addTo(map)

    return () => {
      map.removeLayer(tileLayer)
    }
  }, [map])

  return null
}