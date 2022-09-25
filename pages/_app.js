import { useState, createContext } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from '../components/Layout'
import '../styles/globals.css'

export const CountryContext = createContext()

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient()

  function CountryProvider ({children}) {
    const [ country, setCountry ] = useState('USA')
    return <CountryContext.Provider value={{country, setCountry}}>
      {children}
    </CountryContext.Provider>
  }

  return (
    <CountryProvider>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </CountryProvider>
  )
}

export default MyApp
