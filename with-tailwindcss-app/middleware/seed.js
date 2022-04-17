const mongoose = require("mongoose");
const Listing = require("../models/listing");
const fetch = require("node-fetch");

let resultData;
let saveCounter = 0;
let db = process.env.mongourl;

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