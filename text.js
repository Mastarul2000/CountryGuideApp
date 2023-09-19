const searchBar = document.getElementById('searchBar'),
btn = document.getElementById('btn'),
searchDetails = document.getElementById('searchDetails'),
images = document.getElementById('images'),
name = document.getElementById('name'),
capital = document.getElementById('capital'),
contient = document.getElementById('contient'),
population = document.getElementById('population'),
currency = document.getElementById('currency'),
currencyShort = document.getElementById('currencyShort'),
language = document.getElementById('language');


btn.addEventListener('click', ()=>{
  let countryName = searchBar.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
  console.log(finalURL)
  fetch(finalURL)
  .then((response)  => response.json())
  .then((data) => {
    searchDetails.style.display = 'block';

    countryData = data[0]
    console.log(countryData)
    images.src = countryData.flags.svg;
    name.innerHTML = countryData.name.common
    capital.innerHTML = countryData.capital
    contient.innerHTML = countryData.continents
    population.innerHTML = countryData.population
    currency.innerHTML = countryData.currencies[Object.keys(countryData.currencies)].name
    currencyShort.innerHTML = Object.keys(countryData.currencies)[0]
    language.innerHTML = Object.values(countryData.languages).toString().split(',').join(',')
  })

})