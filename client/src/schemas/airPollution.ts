import { z } from "zod"

export const AirPollutionSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
  generationtime_ms: z.number(),
  utc_offset_seconds: z.number(),
  timezone: z.string(),
  timezone_abbreviation: z.string(),

  current: z.object({
    time: z.string(),
    interval: z.number(),

    pm10: z.number(),
    pm2_5: z.number(),

    carbon_monoxide: z.number(),
    nitrogen_dioxide: z.number(),
    sulphur_dioxide: z.number(),
    ozone: z.number(),

    european_aqi: z.number(),
    us_aqi: z.number(),
  }),

  current_units: z.object({
    time: z.string(),
    interval: z.string(),

    pm10: z.string(),
    pm2_5: z.string(),

    carbon_monoxide: z.string(),
    nitrogen_dioxide: z.string(),
    sulphur_dioxide: z.string(),
    ozone: z.string(),

    european_aqi: z.string(),
    us_aqi: z.string(),
  }),
})

export type AirPollution = z.infer<typeof AirPollutionSchema>