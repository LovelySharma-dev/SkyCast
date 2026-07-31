import clsx from "clsx"
import {
  Sun,
  CloudSun,
  Cloud,
  CloudFog,
  CloudDrizzle,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Snowflake,
} from "lucide-react"

type Props = {
  code: number
  className?: string
}

export default function WeatherIcon({ code, className }: Props) {
  const base = "size-8 "

  // ☀️ Clear sky
  if (code === 0) {
    return (
      <Sun
        className={clsx(base, "text-amber-400", className)}
      />
    )
  }

  // 🌤️ Mainly clear
  if (code === 1) {
    return (
      <CloudSun
        className={clsx(base, "text-yellow-400", className)}
      />
    )
  }

  // ⛅ Partly cloudy
  if (code === 2) {
    return (
      <CloudSun
        className={clsx(base, "text-slate-400", className)}
      />
    )
  }

  // ☁️ Overcast
  if (code === 3) {
    return (
      <Cloud
        className={clsx(base, "text-gray-400", className)}
      />
    )
  }

  // 🌫️ Fog
  if (code === 45 || code === 48) {
    return (
      <CloudFog
        className={clsx(base, "text-slate-300", className)}
      />
    )
  }

  // 🌦️ Drizzle
  if (code >= 51 && code <= 57) {
    return (
      <CloudDrizzle
        className={clsx(base, "text-sky-400", className)}
      />
    )
  }

  // 🌧️ Rain
  if (code >= 61 && code <= 67) {
    return (
      <CloudRain
        className={clsx(base, "text-blue-500", className)}
      />
    )
  }

  // ❄️ Snow
  if (code >= 71 && code <= 77) {
    return (
      <Snowflake
        className={clsx(base, "text-cyan-300", className)}
      />
    )
  }

  // 🌦️ Rain showers
  if (code >= 80 && code <= 82) {
    return (
      <CloudRain
        className={clsx(base, "text-sky-500", className)}
      />
    )
  }

  // 🌨️ Snow showers
  if (code === 85 || code === 86) {
    return (
      <CloudSnow
        className={clsx(base, "text-cyan-200", className)}
      />
    )
  }

  // ⛈️ Thunderstorm
  if (code >= 95 && code <= 99) {
    return (
      <CloudLightning
        className={clsx(base, "text-violet-400", className)}
      />
    )
  }

  return (
    <Cloud
      className={clsx(base, "text-gray-400", className)}
    />
  )
}