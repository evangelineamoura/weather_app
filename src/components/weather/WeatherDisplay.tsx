import { WeatherDataProps } from "./Weather";

type WeatherDisplayProps = {
  weatherData: WeatherDataProps | null;
};

export default function WeatherDisplay({ weatherData }: WeatherDisplayProps) {
  if (!weatherData || !weatherData.main) {
    return (
      <div>
        <h1>No city found!</h1>
      </div>
    );
  }
  return (
    <section>
      <h1>
        {weatherData.name} ({weatherData.sys.country})
      </h1>
      <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Weather Icon"/>
      <h1>{weatherData.weather[0].description}</h1>
      <ul>
        <li>Temperature: {Math.round(weatherData.main.temp)}°</li>
        <li>Feels like: {Math.round(weatherData.main.feels_like)}°</li>
        <li>Min temp: {Math.round(weatherData.main.temp_min)}°</li>
        <li>Max temp: {Math.floor(weatherData.main.temp_max)}°</li>
        <li>Pressure: {weatherData.main.pressure}hpa</li>
        <li>Humidity: {weatherData.main.humidity}%</li>
      </ul>
    </section>
  );
}
/*
 main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  name: string;
};
*/
