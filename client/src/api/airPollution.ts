import { AirPollutionSchema } from "../schemas/airPollution"

export async function getAirPollution({lat, lon}: {lat: number, lon: number}) {
    const params = new URLSearchParams({
        latitude: lat.toString(),
        longitude: lon.toString(),

        current: [
            "pm10",
      "pm2_5",
      "carbon_monoxide",
      "nitrogen_dioxide",
      "sulphur_dioxide",
      "ozone",
      "us_aqi",
      "european_aqi"
        ].join(","),


        timezone: "auto"
    })

    const res = await fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?${params}`)

    if (!res.ok) {
        throw new Error(`Air pollution API error: ${res.status}`)
    }

    const data: unknown = await res.json()

    return AirPollutionSchema.parse(data)
}