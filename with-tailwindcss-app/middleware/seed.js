const dynamic = () => {
  require ('next/dynamic')
};

const mongoose = dynamic(import('mongoose'), {ssr: false}) // Async API cannot be server-side rendered
const Listing = dynamic(import("../../models/listing"))
const fetch = dynamic(import("node-fetch"));

let resultData;
let saveCounter = 0;
let db = process.env.mongourl;

console.log(mongoose)

mongoose.connect(db)
  .then(() => console.log("mongodb connection success"))
  .catch(error => console.log(error));

  const url = ['http://feeds.spotahome.com/ads-housinganywhere.json']
  url.map(async url => {
  try{
    const response = await fetch(url);
    const json = await response.json();
    resultData = [...json];
    for (let i = 0; i < resultData.length; i++) {
        let listing = new Listing({
          title: resultData[i].title,
          address: resultData[i].address,
          city: resultData[i].city,
          link: resultData[i].link,
          image: resultData[i].image[0],
        })
    listing.save(() => {
        console.log("saved" + Listing)
        
        saveCounter++;
    
        if (saveCounter === resultData.length) {
          mongoose.disconnect()
          .then(() => console.log("saved succesfully and mongodb disconnected"))
          .catch(error => console.log(error));
          }
        });
    }
  } catch (error) {
    console.log(error);
  }
  })