import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeather } from "../../api/weather";
import WeatherIcon from "../WeatherIcon";
import Card from "./Card";


type Props = {}

export default function CurrentWeather({}: Props) {
    const {data} = useSuspenseQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather({lat: 10, lon: 23})
  })

  return (
    <Card title="Current Weather" className="md:pb-11" childrenClassName="flex flex-col items-center gap-6 2xl:justify-between" >
        {/* Temp */}

        <div className="flex flex-col gap-2 items-center">
            <h2 className="text-6xl font-semibold text-center">
                {Math.round(data.current.temperature_2m)}℃
            </h2>

            <WeatherIcon code={data.current.weather_code} className="size-14" />
        </div>

        {/* Local Time */}
        <div className="flex flex-col gap-2 items-center">
            <p className="text-xl text-center" >
                Local Time:
            </p>

            <h3 className="text-3xl font-semibold">
                {new Intl.DateTimeFormat("en-IN", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                    timeZone: data.timezone,
                }).format(new Date())}
            </h3>
            
        </div>

        {/* Details */}
        <div className="flex justify-between w-full">
            <div className="flex flex-col items-center gap-2">
                <p className="text-gray-500" >Feels Like</p>

                <p>
                    {Math.round(data.current.apparent_temperature)}℃
                </p>
            </div>

            <div className="flex flex-col items-center gap-2">
                <p className="text-gray-500" >
                    Humidity
                </p>

                <p>
                    {data.current.relative_humidity_2m}%
                </p>
            </div>

            <div className="flex flex-col items-center gap-2">
                <p className="text-gray-500">Wind</p>

                <p>
                    {Math.round(data.current.wind_speed_10m)} km/h
                </p>
            </div>
        </div>
    </Card>
  )
}