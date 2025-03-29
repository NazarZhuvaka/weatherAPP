function refactorWeatherArray(weatherObj) {
  const map = new Map();

  const weatherArray = [...weatherObj.list];
  const arr = weatherArray.map((item) => {
    return {
      date: item.dt_txt,
      temp: item.main.temp,
    };
  });

  for (let item of arr) {
    const day = item.date.split(" ")[0];
    if (!map.has(day)) {
      const newDay = changeDate(day)
      map.set(day, { newDay, temp: item.temp });
    }
  }
  return Array.from(map.values());
}

function changeDate(date) {
  const parts = date.split("-").reverse();

  const firstElement = parts.shift()
  const lastElement = parts.pop()

  parts.push(firstElement, lastElement)
  return parts.join('.')
}


function appendToRoot(weatherList) {
  const newDates = refactorWeatherArray(weatherList);

  const cardArray = newDates.map((user) => createWeatherCard(user));

  const root = document.querySelector(".weathers-list");

  root.append(...cardArray);
  return newDates;
}

function createWeatherCard(data) {
  const article = document.querySelector(".card-wrapper");

  if (article) article.remove();

  const h2 = createElement("h2", { classNames: ["list-day"] }, data.newDay);
  const p = createElement("p", { classNames: ["list-temp"] }, data.temp);
  p.append('°')
  return createElement("article", { classNames: ["card-wrapper"] }, h2, p);
}

function createElement(type, { classNames }, ...childNodes) {
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.append(...childNodes);

  return elem;
}
