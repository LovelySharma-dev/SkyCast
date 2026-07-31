
import {useQuery} from "@tanstack/react-query"
import { getWeather } from "./api/weather"
import DailyForecast from "./components/cards/DailyForecast"
import HourlyForecast from "./components/cards/HourlyForecast"
import CurrentWeather from "./components/cards/CurrentWeather"
import AdditionalInfo from "./components/cards/AdditionalInfo"
import Map from "./components/Map"
const App = () => {
  const {data} = useQuery({
    queryKey: ['weather', 10, 23],
    queryFn: () => getWeather({lat: 10, lon: 23})
  })
  return (
    
    <div className="flex flex-col gap-8">
      <Map/>
    <CurrentWeather/>
    <HourlyForecast/>
    <DailyForecast/>
    <AdditionalInfo/>
    </div>
    
  )
}

export default App

