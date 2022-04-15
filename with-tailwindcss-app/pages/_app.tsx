import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Listing from './api/listing'
import List from '../components/listingsTable'

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
  <Component {...pageProps} 
  />
  ) 
}

export default MyApp
