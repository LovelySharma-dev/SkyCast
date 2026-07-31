import Card from './Card'
import { useSuspenseQuery} from "@tanstack/react-query"
import { getWeather } from "../../api/weather"
import WeatherIcon from '../WeatherIcon'

type Props = {}

export default function DailyForecast({}: Props) {
    const {data} = useSuspenseQuery({
    queryKey: ['weather', 10, 23],
    queryFn: () => getWeather({lat: 10, lon: 23})
  })
  return (
    <Card title="Daily Forecast" childrenClassName='flex flex-col gap-4' >
         {data?.daily?.time?.map((date, index) => (
                <div key={date} className='flex items-center justify-between'>
                    {/* Day */}
                    <p className='w-9' >
                        {new Date(date).toLocaleDateString(undefined, {weekday: "short"})}
                    </p>

                    {/* !*REVIEW - Weather code - replace with icon later */}

                    <WeatherIcon code={data.daily.weather_code[index]} />

                    <p className='text-white' >
                        {Math.round(data.daily.temperature_2m_mean[index])}°C
                    </p>

                    {/* Min Temp */}
                    <p className='text-gray-500/75'>
                        {Math.round(data.daily.temperature_2m_min[index])}°C
                    </p>
                    {/* Max Temp */}
                    <p className='text-gray-500/75'>
                        {Math.round(data.daily.temperature_2m_max[index])}°C
                    </p>
                </div>
            ))}
    </Card>
  )
}