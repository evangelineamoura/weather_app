import React from "react";
import { useState, useEffect } from "react";
import WeatherDisplay from "./WeatherDisplay";
import LocationInput from "./LocationInput";

/*
MAKE THE WEATHER PORTION WORK
-SIGN UP TO WEATHER API AND CHECK WE CAN FETCH THE JSON

MAKE AN INPUT COMPONENT WITH A FORM THAT WILL CHANGE THE LOCATION STATE
-Create a useState that is updated with the values in the inputfield
-To do this, we need to create an onClick function


-WILL THEN GIVE DROPDOWN OPTIONS OF ALL CITIES THAT MATCH THE INPUT
-USER THEN CLICKS THE INTENDED CITY
-THE USESTATE OF GEOLOCATION WILL UPDATE

*/

type LocationInputProps = {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// We can export this type and import it in WeatherDisplay.tsx
// This is a good way to keep our code DRY
export type WeatherDataProps = {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  name: string;
  sys: {
    country: string;
  };
};

export default function Weather() {
  const [location, setLocation] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);

  const handleInputChange: LocationInputProps["handleInputChange"] = (e) => {
    console.log(location);
    setLocation(e.target.value);
  };

  useEffect(() => {
    async function grabWeather() {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${process.env.REACT_APP_WEATHER_KEY_API}`
      );
      console.log(response);
      const data = await response.json();
      console.log(data);
      setWeatherData(data);
    }
    grabWeather();
  }, [location]);

  return (
    <section>
      <LocationInput input={location} handleInputChange={handleInputChange} />
      <WeatherDisplay weatherData={weatherData} />
    </section>
  );
}
