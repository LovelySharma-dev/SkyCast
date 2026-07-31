import { GeocodeSchema } from "../schemas/geocodeSchema";

export async function getGeocode(location: string) {
    const params = new URLSearchParams({
        name: location,
        count: "5",
        language: "en",
        format: "json",
    })

    const res = await fetch(`https://geocoding-api-open-meteo.com/v1/search?${params}`)

    if(!res.ok){
        throw new Error(`Geocoding API error: ${res.status}`)
    }

    const data: unknown = await res.json()

    return GeocodeSchema.parse(data)
}