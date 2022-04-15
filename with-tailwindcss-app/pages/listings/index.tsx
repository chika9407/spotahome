import { NextPage, Link } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ListingsTable from '../../components/listingsTable'
import { Listing } from '../../types/listing'


const Properties = ({ properties }) => {
  return (
    <div>
      <h1>My listings</h1>

      <div>
        <ListingsTable listings={properties}/>
      </div>
    </div>
  )
}


// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://feeds.spotahome.com/ads-housinganywhere.json`)
  const data = await res.json()

  //console.log(data)
  // Pass data to the page via props
  return { 
    props: { properties: data } }
}

export default Properties

