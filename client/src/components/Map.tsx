
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import type { Coords } from '../types'
type Props = {
  coords: Coords
}

export default function Map({coords}: Props) {

  return (
    <MapContainer center={[10, 23]} zoom={5} style={{ width: "100%", height: "500px" }}>
      <MapClick />
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}/>

  
</MapContainer>
  )
}

function MapClick(){
  const map = useMap()

  map.on('click', (e) => {
    console.log(e);
    
    // map.panTo([])
  })

  return null
}