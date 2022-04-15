// function Listing({ data }) {
//   // Render data...
// }

// // This gets called on every request
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`http://feeds.spotahome.com/ads-housinganywhere.json`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }

// export default Listing

import nc from 'next-connect'
// import notes from '../../../src/data/data'

const handler = nc()
  .get((req, res) => {
    res.end(JSON.stringify({data: 'hello'}))
  })
  // .post((req, res) => {
  //   const id = Date.now()
  //   const note = {...req.body, id}

  //   notes.push(note)
  //   res.json({data: note})
  // })
  

export default handler