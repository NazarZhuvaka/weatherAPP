const btn = document.querySelector('.btn')

btn.addEventListener('click', selectHandler)

window.addEventListener('load', selectHandler)

function selectHandler() {
    const cityName = document.querySelector('select').value
    requestAPI(cityName)
    requestForecastAPI(cityName)
}

function displayWeather(weatherObj) {
    const {name, main: {temp}, weather: [{main}], coord: {lat, lon}} = weatherObj

    const p = document.querySelector('.city-name')
    p.textContent = name

    const h2 = document.querySelector('.city-temp')
    h2.textContent = temp

    const p1 = document.querySelector('.city-main')
    p1.textContent = main

    const cityGeoH = document.querySelector('.city-geo-h')
    cityGeoH.textContent = `H: ${lon.toFixed(2)}`

    const cityGeoL = document.querySelector('.city-geo-l')
    cityGeoL.textContent = `L: ${lat.toFixed(2)}`

}
