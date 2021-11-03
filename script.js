// const options = {
//   method: 'GET',
//   url: 'https://api.schiphol.nl/public-flights/destinations?page=4',
//   headers: {
//     Accept: "application/json",
//     app_id: "2754d242",
//     app_key: "67b1ecc17f4097520677f888b201d009",
//     ResourceVersion: "v4",
//   }
// };

const getDestinations = async () => {
  const response = await fetch("https://api.schiphol.nl/public-flights/destinations?page=4",{
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
  destinations.map(singleData => {
    const publicName = singleData.publicName.english
    console.log(publicName);
  });
  
}

getDestinations()


// axios.request(options).then((response) => {
// 	// console.log(response.data); 
//   const dataResponse = response.data;
//   const data = dataResponse.destinations
//   data.map(singleData => {
//      const publicName = singleData.publicName.english
//      console.log(publicName);

//   })
  
// })
// .then((response) => {

// })
// .catch(function (error) {
// 	console.error(error);
// });





