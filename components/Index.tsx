import { useEffect, useState } from 'react';
import axios from 'axios';

function LocationDetection() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [region, setRegion] = useState<string | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);

          try {
            // Fetch the user's region from coordinates (reverse geocoding)
            const regionResponse = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`);
            const userRegion = regionResponse.data.display_name;
            setRegion(userRegion);

            // Fetch weather information from OpenWeatherMap
            const openWeatherAPIKey = 'c334fdca97ce48c1acb112745232410';
            const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${openWeatherAPIKey}`);
            const weatherData = weatherResponse.data;
            setWeather(weatherData);
          } catch (err) {
            alert("Error fetching location or weather data.");
          }
        },
        (err) => {
          alert(err.message);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  }, []);

  function recommendCrops(region: string) {
    const regionLowerCase = region.toLowerCase();

    if (regionLowerCase.includes('california')) {
      return ['Almonds', 'Grapes', 'Strawberries'];
    } else if (regionLowerCase.includes('iowa')) {
      return ['Corn', 'Soybeans', 'Wheat'];
    } else {
      return ['Tomatoes', 'Potatoes', 'Cabbage'];
    }
  }

  return (
    <div className="p-4 max-w-md mx-auto border rounded-lg shadow-lg">
    {latitude && longitude && (
      <p className="text-center">
        Your location: Latitude {latitude}, Longitude {longitude}
      </p>
    )}
    {region && (
      <p className="text-center">
        Your region: {region}
      </p>
    )}
    {weather && (
      <p className="text-center">
        Weather: {(weather as any).weather[0].description}
      </p>
    )}
    {region && (
      <p className="text-center">
        Recommended crops for your region: {recommendCrops(region).join(', ')}
      </p>
    )}
    {error && (
      <p className="text-center text-red-600">
        Error: {error}
      </p>
    )}
  </div>
  );
}

export default LocationDetection;
