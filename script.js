export const getDestinations = async () => {
  const response = await fetch("https://api.schiphol.nl/public-flights/destinations?page=68",{
    method: "GET",
    headers: {
      Accept: "application/json",
      app_id: "2754d242",
      app_key: "67b1ecc17f4097520677f888b201d009",
      ResourceVersion: "v4",
    }
  });

  const allData = await response.json();
  const destinations = allData.destinations
  // console.log(allData);
  destinations.map(singleData => {
    const publicName = singleData.publicName.english
    publicNameArray.push(publicName)  
  });
  destinations.map(singleData => {
    let city = singleData.city
    if (typeof city === "string") {
      console.log(city);
    } else {
      // delete singleData
    }
    // console.log(city);
    // citiesArray.push(city)  
    // if(typeof city == !'string') {
    //   city = 'kak'
    // }
    // citiesArray.map(city => {
    //   // console.log(city);
    // console.log(citiesArray["Athens"]);
    //   if(city === null) {
    //     delete citiesArray[city]
    //   }
    // })
  });
  // console.log(publicNameArray);
}
 getDestinations()

export let publicNameArray = []
// console.log(publicNameArray);

let citiesArray = []

// citiesArray.map(city => {
//   console.log(city);
//   // if(typeof city == null) {
//   //   return city = 'kak'
//   // }
// })
// console.log(citiesArray);
// import {getCoordinate} from './getlocation.js'

// getCoordinate()







