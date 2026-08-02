
import {useQuery} from "@tanstack/react-query"
import { getWeather } from "./api/weather"
import DailyForecast from "./components/cards/DailyForecast"
import HourlyForecast from "./components/cards/HourlyForecast"
import CurrentWeather from "./components/cards/CurrentWeather"
import AdditionalInfo from "./components/cards/AdditionalInfo"
import Map from "./components/Map"
import { useState } from "react"
import type { Coords } from "./types"
import LocationDropdown from "./components/dropdowns/LocationDropdown"
import { getGeocode } from "./api/geocoding"

const App = () => {
 const [coordinates, setCoords] = useState<Coords>({ lat: 50, lon: 45 })
 const [mapType, setMapType] = useState("clouds_new")
const [location, setLocation] = useState("Tokyo")

  const {data: geocodeData} = useQuery({
    queryKey: ["geocode", location],
    queryFn: () =>  getGeocode(location)
  })
 const onMapClick = (lat: number, lon: number) => {
  setCoords({lat, lon})
  setLocation("custom")
 }
const coords =
  location === "custom"
    ? coordinates
    : {
        lat: geocodeData?.results?.[0]?.latitude ?? 0,
        lon: geocodeData?.results?.[0]?.longitude ?? 0,
      }




  return (
    
    <div className="flex flex-col gap-8">
      <Map coords={coords} onMapClick={onMapClick} mapType={mapType} />
      <LocationDropdown location={location} setLocation={setLocation}/>
    <CurrentWeather coords={coords} />
    <HourlyForecast coords={coords} />
    <DailyForecast coords={coords} />
    <AdditionalInfo coords={coords} />

    </div>
    
  )
}

export default App

