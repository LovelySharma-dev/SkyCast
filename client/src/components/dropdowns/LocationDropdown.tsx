import type { Dispatch, SetStateAction } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

type Props = {
  location: string
  setLocation: Dispatch<SetStateAction<string>>
}

const locations = [
  "Delhi",
  "Tokyo",
  "Seoul",
  "Dubai",
  "Manila",
  "London",
  "New York",
  "Paris",
  "Berlin",
  "Madrid",
  "Rome",
  "Lisbon",
]

export default function LocationDropdown({
  location,
  setLocation,
}: Props) {
  return (
    <Select
      value={location}
      onValueChange={(value) => {
        if(value !== null){
            setLocation(value)
        }
      }}
    >
      <SelectTrigger
  className="
    w-[200px]
    border-zinc-800
    bg-zinc-900/80
    text-zinc-100
    hover:border-zinc-700
    focus:ring-zinc-700
  "
>
  <SelectValue placeholder="Select Location" />
</SelectTrigger>

<SelectContent
  className="
    border-zinc-800
    bg-zinc-900
    text-zinc-100
  "
>
  {locations.map((city) => (
    <SelectItem
      key={city}
      value={city}
      className="
        text-zinc-200
        focus:bg-zinc-800
        focus:text-zinc-100
        data-[state=checked]:bg-zinc-800
        hover:text-white
      "
    >
      {city}
    </SelectItem>
  ))}
</SelectContent>
    </Select>
  )
}