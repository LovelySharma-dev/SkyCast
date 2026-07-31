import { weatherSchema } from "../schemas/weatherSchema"

export async function getWeather({
  lat,
  lon,
}: {
  lat: number
  lon: number
}) {
  const params = new URLSearchParams({
    latitude: lat.toString(),
    longitude: lon.toString(),

    // Current weather
    current: [
      "temperature_2m",
      "relative_humidity_2m",
      "apparent_temperature",
      "precipitation",
      "weather_code",
      "cloud_cover",
      "surface_pressure",
      "wind_speed_10m",
      "wind_direction_10m",
      "wind_gusts_10m",
      "is_day",
    ].join(","),

    // Hourly forecast
    hourly: [
      "temperature_2m",
      "relative_humidity_2m",
      "apparent_temperature",
      "precipitation_probability",
      "precipitation",
      "weather_code",
      "cloud_cover",
      "visibility",
      "wind_speed_10m",
      "wind_direction_10m",
      "wind_gusts_10m",
    ].join(","),

    // Daily forecast
    daily: [
      "weather_code",
      "temperature_2m_max",
      "temperature_2m_min",
      "apparent_temperature_max",
      "apparent_temperature_min",
      "precipitation_sum",
      "precipitation_probability_max",
      "sunrise",
      "sunset",
      "uv_index_max",
      "wind_speed_10m_max",
      "wind_gusts_10m_max",
    ].join(","),

    timezone: "auto",
    forecast_days: "7",
  })

  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?${params}`
  )

  if (!res.ok) {
    throw new Error(`Weather API error: ${res.status}`)
  }

  const data: unknown = await res.json()

  return weatherSchema.parse(data)
}