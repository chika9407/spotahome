import ListingsTable from '../../components/listingsTable'

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



export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`http://feeds.spotahome.com/ads-housinganywhere.json`)
  const data = await res.json()

  //console.log(data)
  // Pass data to the page via props
  return { 
    props: { properties: data } }
}

export default Properties

