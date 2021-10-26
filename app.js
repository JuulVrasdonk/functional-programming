// fetch('tech-track-dataset.json').then(response => {

// return response.json();


// }).then(data => {

//     console.log(data);
//     // console.log(data);

// }).catch(err => {});



const data = require('./tech-track-dataset.json');

// console.log(data);


// let onderwerpNaam = 'Wat is je oogkleur?';

// let toLowerCase = data.map(answers => answers[onderwerpNaam].toLowerCase());

// let replaceQuestion = data.map(() => onderwerpNaam.replace(onderwerpNaam, 'oogkleur'));

// console.log(replaceQuestion);


// alleData.forEach(singleData => {
// Object.keys(singleData).forEach(singleQuestion => {
// console.log(singleQuestion);
// });
// });
 
// Object.keys(alleData[0]).forEach(singleQuestion => {
// console.log(singleQuestion);
// console.log(alleData[0][singleQuestion])
// });
 
// Loop over alle data en pak ieder individueel object.
data.forEach(singleData => {
    // console.log(`

    // NIEUW OBJECT!!!
    
    // `);

    // console.log(Object.keys(singleData));

    // Definieer de nieuwe key, maar geef er nog geen variable aan
    let new_key;
    
    // Voor iedere key in het object, loop als een array
    Object.keys(singleData).forEach(singleQuestion => {

        // singleQuestion is een array met alle object "keys"

        // Afhankelijk van de key (singleQuestion, doe iets per verschillende vraag)
        switch(singleQuestion) {
            case "Wat is je oogkleur?":
                new_key = "oogkleur";
                break;
            case "Wat is je favoriete soort huisdier?":
                new_key = "huisdier";
                break;
            case "Wat is je favoriete windrichting?":
                new_key = "windrichting";
                break;
            default:
                // Als ie niet bestaat, maak 'm dan undefined
                new_key = undefined;
                break;
        }

        // Als de vraag zelf een nieuwe key heeft, voer dan de volgende code uit.
        if(new_key) {
            // Definieer een nieuwe property (key met value) voor singleData, met als key "new_key"
            Object.defineProperty(singleData, new_key,
                // Kopieer de VALUE (singleQuestion) van de OORSPRONKELIJKE KEY (singleQuestion) en voeg die toe aan het object (singleData)
                Object.getOwnPropertyDescriptor(singleData, singleQuestion));
                // Verwijder de oude "key" nu we de nieuwe al hebben gedefinieerd
            delete singleData[singleQuestion];

            // Log het hele object
            console.log(singleData);
        }
    });
});


// console.log(toLowerCase);