// fetch('tech-track-dataset.json').then(response => {

// return response.json();


// }).then(data => {

//     console.log(data);
//     // console.log(data);

// }).catch(err => {});

const data = require('./tech-track-dataset.json');

// Loop over alle data en pak ieder individueel object.
data.map(singleData => {
    // Definieer de nieuwe key, maar geef er nog geen variable aan
    let new_key;
    
    // Voor iedere key in het object, loop als een array
    Object.keys(singleData).map(singleQuestion => {

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
            case "Op een schaal van 1 tot 10, hoeveel zin heb je in de Tech Track?":
                new_key = "zinInTechTrack";
                break;
            case "Kies zelf of je deze vraag beantwoord.":
                new_key = "kiesAntwoord";
                break;
            case "Wat is je favoriete datum?":
                new_key = "datum"
                break;
            case "Wat is je favoriete datum, maar nu in tekst!":
                new_key = "datumTekst";
                break;
            case "Wat is je favoriete zuivelproduct?":
                new_key = "zuivelproduct";
                break;
            case "Welke kleur kledingstukken heb je aan vandaag? (Meerdere antwoorden mogelijk natuurlijk...)":
                new_key = "kleurKledingstukken";
                break;
            case "Op welke verdieping van het TTH studeer je het liefst?":
                new_key = "verdieping";
                break;
            case "Wat wil je worden als je groot bent?":
                new_key = "laterGroot";
                break;
            case "Wat wilde je later worden als je groot bent, maar nu toen je zelf 8 jaar was.":
                new_key = "laterGroot8";
                break;
            case "Kaas is ook een zoogdier?":
                new_key = "kaasZoogdier";
                break;
            case "Als je later een auto zou kopen, van welk merk zou deze dan zijn?":
                new_key = "automerk";
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
            
        }
        
        
        
    });
    
});


// let answers = data.map(answer => {
//         const searchAnswers = answer.laterGroot
//         return searchAnswers.charAt(0).toUpperCase() + searchAnswers.slice(1);
// })

let datas = data.map(data => {
    return data.laterGroot;
})

let cleanedLaterGroot = datas.map((data) => {
    if(typeof data === 'string' && data.length > 1) {
    data =  data.toLowerCase() 
            .substring()
            .replace(/[^\w\s]/gi,'')
            .replaceAll('frontend', 'front-end')
            .replaceAll(
                /code designer|front-ender|webdeveloper  webdesigner/gi, 
                'front-end developer'
                )
            .replaceAll(
                /rijk|succesvol|multimiljonair/gi,
                'welvarend'
            )
            .replace(
                /lead bij een design agency of zelfstandig ondernemer/gi, 
                'ondernemer'
            )
            .replace(
                /geen idee we zien wel hoe het loopt/gi, 
                'geen idee'
            )
            .replace(
                /full time kunnen reizen/gi,
                'reizen'
            )
    return data.charAt(0).toUpperCase() + data.slice(1);
       
    } else {
        return data = 'Geen antwoord'
    } 
      
});

// const frontEndArr = []

// const hoeveelAntwoord = cleanedLaterGroot.map((data) => {    

    
// switch(data) {
//     case "Front-end developer":
//     frontEndArr.push('Front-end developer')
//     break;
// }
// })

// console.log(frontEndArr.length);

const counts = {};

for (const num of cleanedLaterGroot) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

const occurrences = cleanedLaterGroot.reduce((acc, curr) => {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  }, {});

const occurencesSortValues = Object.values(occurrences).sort((a,b) => b[1]-a[1])

console.log(occurencesSortValues);

// let frontEndFilter =  cleanedLaterGroot.filter(n => n == 'Front-end developer');
// let welvarendFilter = cleanedLaterGroot.filter(n => n == 'Welvarend');

// console.log(frontEndFilter.length, welvarendFilter.length);


// console.log(showData);

console.log(cleanedLaterGroot);