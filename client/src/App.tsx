
import {useQuery} from "@tanstack/react-query"
import { getWeather } from "./api/weather"
import DailyForecast from "./components/cards/DailyForecast"
import HourlyForecast from "./components/cards/HourlyForecast"
import CurrentWeather from "./components/cards/CurrentWeather"
import AdditionalInfo from "./components/cards/AdditionalInfo"
import Map from "./components/Map"
import { useState } from "react"
import type { Coords } from "./types"

const App = () => {
 const [coords, setCoords] = useState<Coords>({lat: 40, lon: 35})

  return (
    
    <div className="flex flex-col gap-8">
      <Map  />
    <CurrentWeather coords={coords} />
    <HourlyForecast coords={coords} />
    <DailyForecast coords={coords} />
    <AdditionalInfo coords={coords} />
    </div>
    
  )
}

export default App

