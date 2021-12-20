export default async function(zipcode) {
    const path = "https://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ",us&units=imperial&appid=" + process.env.WEATHER_API; 
    try {
        const call = await fetch(path);
        const data = await call.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
