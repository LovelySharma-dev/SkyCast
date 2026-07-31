import { z } from "zod"

export const weatherSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
  generationtime_ms: z.number(),
  utc_offset_seconds: z.number(),
  timezone: z.string(),
  timezone_abbreviation: z.string(),
  elevation: z.number(),

  // =====================
  // CURRENT
  // =====================

  current: z.object({
    time: z.string(),
    interval: z.number(),

    temperature_2m: z.number(),
    relative_humidity_2m: z.number(),
    apparent_temperature: z.number(),

    precipitation: z.number(),

    weather_code: z.number(),
    cloud_cover: z.number(),

    surface_pressure: z.number(),

    wind_speed_10m: z.number(),
    wind_direction_10m: z.number(),
    wind_gusts_10m: z.number(),

    is_day: z.number(),
  }),

  // =====================
  // HOURLY
  // =====================

  hourly: z.object({
    time: z.array(z.string()),

    temperature_2m: z.array(z.number()),
    relative_humidity_2m: z.array(z.number()),
    apparent_temperature: z.array(z.number()),

    precipitation_probability: z.array(z.number()),
    precipitation: z.array(z.number()),

    weather_code: z.array(z.number()),
    cloud_cover: z.array(z.number()),
    visibility: z.array(z.number()),

    wind_speed_10m: z.array(z.number()),
    wind_direction_10m: z.array(z.number()),
    wind_gusts_10m: z.array(z.number()),
  }),

  // =====================
  // DAILY
  // =====================

  daily: z.object({
    time: z.array(z.string()),

    weather_code: z.array(z.number()),

    temperature_2m_max: z.array(z.number()),
    temperature_2m_min: z.array(z.number()),

    apparent_temperature_max: z.array(z.number()),
    apparent_temperature_min: z.array(z.number()),

    precipitation_sum: z.array(z.number()),
    precipitation_probability_max: z.array(z.number()),

    sunrise: z.array(z.string()),
    sunset: z.array(z.string()),

    uv_index_max: z.array(z.number()),

    wind_speed_10m_max: z.array(z.number()),
    wind_gusts_10m_max: z.array(z.number()),

  }),
})

export type Weather = z.infer<typeof weatherSchema>