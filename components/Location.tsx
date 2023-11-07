import { useEffect, useState } from 'react';
import { geocode } from 'opencage-api-client';

function LocationDetection() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [region, setRegion] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);

          try {
            const { results } = await geocode({
              q: `${position.coords.latitude}, ${position.coords.longitude}`,
              key: '622c7d0fc0e0488db607c9f8e0b4d280', // Replace with your OpenCage API key
            });

            if (results.length > 0) {
              setRegion(results[0].components.city || results[0].components.state || results[0].components.country);
            }
          } catch (err) {
            alert("Error fetching location data.");
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

  return (
    <div className="p-4 max-w-md mx-auto border rounded-lg shadow-lg">
  {region && (
    <p className="text-center text-lg text-green-600 font-semibold">
      Your region: {region}
    </p>
  )}
  {error && (
    <p className="text-center text-lg text-red-600 font-semibold">
      Error: {error}
    </p>
  )}
</div>

  );
}

export default LocationDetection;
