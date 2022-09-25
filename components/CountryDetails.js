import { useContext } from 'react'
import { useQuery } from 'react-query'
import { CountryContext } from '../pages/_app'

const CountryDetails = () => {
  const {country} = useContext(CountryContext)
  
  const fetchCountry = async (country) => {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${country}`)
    const data = await response.json()
    return data
  }

  const {data, isLoading, error} = useQuery(['country', country], () => fetchCountry(country))

  if(isLoading) return <span>Loading...</span>
  if(error) return <span>Error</span>
  
  return(
    <div>
      <h1>{country}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default CountryDetails
