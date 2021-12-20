import getWeather from './getWeather.js';

const colorPicker = x => {
    switch(true) {
        case x < 0:
            return "whitesmoke";
        case x < 30:
            return "skyblue";
        case x < 50:
            return "turquoise";
        case x < 70:
            return "gold";
        case x < 90:
            return "orange";
        default:
            return "red";
    }
}

export default async function(zipcode) {
    const main = document.createElement('MAIN');
    const data = await getWeather(zipcode);
    main.style.border = "1px solid " + colorPicker(data.main.temp);

    const header = document.createElement('H2');
    header.innerHTML = data.name + ' (' + data.coord.lat + ',' + data.coord.lon + ')';

    const status = document.createElement('P');
    status.innerHTML = data.weather[0].description;
    
    const temp = document.createElement('P');
    temp.innerHTML = data.main.temp + ' degrees F (feels like ' + data.main.feels_like + ' degrees F)';

    const humidity = document.createElement('P');
    humidity.innerHTML = data.main.humidity + '% humidity';
    
    const wind = document.createElement('P');
    wind.innerHTML = 'wind speeds of ' + data.wind.speed + ' mph with gusts up to ' + data.wind.gust + ' mph';
    
    const clouds = document.createElement('P');
    clouds.innerHTML = data.clouds.all + '% cloud cover';

    main.appendChild(header);
    main.appendChild(status);
    main.appendChild(temp);
    main.appendChild(humidity);
    main.appendChild(wind);
    main.appendChild(clouds);

    document.body.appendChild(main);
}
