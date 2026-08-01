import { useSuspenseQuery } from "@tanstack/react-query";
import Card from "./Card";
import { getWeather } from "../../api/weather";
import WeatherIcon from "../WeatherIcon";
import type { Coords } from "../../types";


type Props = {
    coords: Coords
}

export default function HourlyForecast({coords}: Props) {
    const {data} = useSuspenseQuery({
    queryKey: ['weather', coords],
    queryFn: () => getWeather({lat: coords.lat, lon: coords.lon})
  })
  return (
    <Card title="Hourly Forecast (48 Hours)" childrenClassName="scrollbar-dark flex gap-6 overflow-x-auto" >
        {data.hourly.time.map((time, index) => (
            <div key={time} className="flex flex-col 2xl:justify-between gap-2 items-center p-2" >
                <p className="whitespace-nowrap 2xl:scale-110" >
                    {new Date(time).toLocaleTimeString(undefined, 
                    {
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                    }
                )}
                </p>

                <WeatherIcon className="2xl:size-10" code={data.hourly.weather_code[index]} />

                <p className="2xl:scale-110" >
                    {Math.round(data.hourly.temperature_2m[index])}℃
                </p>
            </div>
        ) )}
    </Card>
  )
}