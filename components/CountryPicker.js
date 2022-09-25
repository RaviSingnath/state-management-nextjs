import { useContext } from 'react'
import { CountryContext } from '../pages/_app'

const CountryPicker = () => {
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

export default CountryPicker
