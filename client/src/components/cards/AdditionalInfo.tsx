import { useSuspenseQuery } from '@tanstack/react-query'

import { getWeather } from '../../api/weather'
import Card from './Card'
import {
  Sunrise,
  Sunset,
  Cloud,
  Wind,
  Gauge,
  Thermometer,
  ArrowUp,
} from "lucide-react"
import type { Coords } from '../../types'

type Props = {
    coords: Coords
}

export default function AdditionalInfo({coords}: Props) {
     const {data} = useSuspenseQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather({lat: coords.lat, lon: coords.lon})
  })

      const rows = [
    {
      label: "Cloudiness (%)",
      value: data.current.cloud_cover,
      Icon: Cloud,
    },
    {
      label: "UV Index",
      value: data.daily.uv_index_max[0],
      Icon: Thermometer,
    },
    {
      label: "Wind Direction",
      value: data.current.wind_direction_10m,
      Icon: Wind,
      type: "wind",
    },
    {
      label: "Pressure (hPa)",
      value: data.current.surface_pressure,
      Icon: Gauge,
    },
    {
      label: "Sunrise",
      value: data.daily.sunrise[0],
      Icon: Sunrise,
      type: "time",
    },
    {
      label: "Sunset",
      value: data.daily.sunset[0],
      Icon: Sunset,
      type: "time",
    },
  ]
  return (
    <Card title='Additional Weather Info' childrenClassName='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {rows.map(({label, value, Icon, type}) => (
            <div className='flex justify-between' key={label}>
                <div className='flex gap-4' >
                    <span className='text-gray-500'>
                        {label}
                    </span>
                    <Icon className="size-8" />
                </div>

                <span>
                    <FormatComponent value={value} type={type} />
                </span>
            </div>
        ))}
    </Card>
  )
}

function FormatComponent({
    value, type,
}: {value: number | string
    type?:string
}){
    if(type === "time"){
        return new Date(value).toLocaleTimeString(undefined, {
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        })
    }

    if(type === "wind"){
        return (
            <ArrowUp className="size-8" style={{
                transform: `rotate(${Number(value)}deg)`
            }} />
        )
    }

    return value
}