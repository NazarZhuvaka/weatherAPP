function refactorWeatherArray(weatherObj) {
  const map = new Map();

  for (const { dt_txt, main } of weatherObj.list) {
    const day = dt_txt.split(" ")[0];
    if (!map.has(day)) {
      map.set(day, { newDay: changeDate(day), temp: main.temp });
    }
  }

  return [...map.values()];
}

function changeDate(date) {
  const [year, month, day] = date.split("-");
  return `${day}.${month}.${year}`;
}

function appendToRoot(weatherList) {
  const root = document.querySelector(".weathers-list");
  root.innerHTML = "";

  const newDates = refactorWeatherArray(weatherList);
  const cardArray = newDates.map(createWeatherCard);

  root.append(...cardArray);
  return newDates;
}

function createWeatherCard(data) {
  return createElement("article", { classNames: ["card-wrapper"] },
    createElement("h2", { classNames: ["list-day"] }, data.newDay),
    createElement("p", { classNames: ["list-temp"] }, `${data.temp}°`)
  );
}

function createElement(type, { classNames }, ...childNodes) {
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.append(...childNodes);
  return elem;
}
