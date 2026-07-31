
import {useQuery} from "@tanstack/react-query"
import { getWeather } from './api'
const App = () => {
  const {data} = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather({lat: 45, lon: 40})
  })
  return (
    
    <>
    {JSON.stringify(data)}
    </>
    
  )
}

export default App

