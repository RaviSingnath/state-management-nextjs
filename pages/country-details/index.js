import { memo } from 'react'
import CountryDetails from "../../components/CountryDetails"
import CountryPicker from "../../components/CountryPicker"
import styles from '../../styles/Home.module.css'

const Country = () => {
  return (
    <div className={styles.container}>
      <CountryPicker />
      <CountryDetails />
    </div>
  )
}

export default memo(Country)
