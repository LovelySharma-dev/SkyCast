import { z } from "zod"

export const GeocodeSchema = z.object({
  results: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      latitude: z.number(),
      longitude: z.number(),
      elevation: z.number().optional(),
      feature_code: z.string().optional(),
      country_code: z.string(),
      timezone: z.string(),
      population: z.number().optional(),
      country_id: z.number().optional(),
      country: z.string(),
      admin1: z.string().optional(),
      admin2: z.string().optional(),
      admin3: z.string().optional(),
      admin4: z.string().optional(),
    })
  ).optional(),
  generationtime_ms: z.number(),
})

export type Geocode = z.infer<typeof GeocodeSchema>