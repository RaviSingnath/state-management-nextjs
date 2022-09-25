import { useState, memo, createContext, useContext } from 'react'
import { useQuery, QueryClient, QueryClientProvider } from 'react-query'
import styles from '../styles/Home.module.css'

const queryClient = new QueryClient()

const CountryContext = createContext()

function CountryProvider ({children}) {
  const [ country, setCountry ] = useState('USA')
  return <CountryContext.Provider value={{country, setCountry}}>
    {children}
  </CountryContext.Provider>
}

export default function Home() {
  return <CountryProvider>
    <QueryClientProvider client={queryClient}>
      <HomeContent />
    </QueryClientProvider>
  </CountryProvider>
}

const HomeContent =  memo(() => {
  return (
    <div className={styles.container}>
      <CountryPicker />
      <CountryDetails />
    </div>
  )
})

async function fetchCountry (country) {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${country}`)
  const data = await response.json()
  return data
}

function CountryDetails () {
  const {country} = useContext(CountryContext)
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

function CountryPicker () {
  const {country, setCountry} = useContext(CountryContext)

  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <select
      value={country}
      onChange={(e) => {
        setCountry(e.target.value)
      }}
    >
      <option value="IN">India</option>
      <option value="USA">USA</option>
      <option value="CA">Canada</option>
    </select>
    </>
  )
}
