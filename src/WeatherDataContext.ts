import { createContext } from 'react'

export default createContext({
    current: { temp_c: 10, feelslike_c: 1, humidity: 10, wind_dir: 'E', wind_mph: 10, uv: 1, condition: { text: 'Text' } },
    location: { name: 'London', country: 'UK' }
})