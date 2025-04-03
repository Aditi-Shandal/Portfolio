
import React, { useState, useEffect } from 'react';
import { Cloud, MapPin, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface WeatherData {
  location: string;
  temperature: number;
  description: string;
  icon: string;
}

export const Weather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        // Using OpenWeatherMap API with a city default to New York
        // Replace YOUR_API_KEY with an actual API key when integrating
        const response = await fetch(
          'https://api.openweathermap.org/data/2.5/weather?q=New York&units=metric&appid=b1b15e88fa797225412429c1c50c122a'
        );
        
        if (!response.ok) {
          throw new Error('Weather data not available');
        }
        
        const data = await response.json();
        
        setWeather({
          location: data.name,
          temperature: Math.round(data.main.temp),
          description: data.weather[0].description,
          icon: data.weather[0].icon
        });
        
        setError(null);
      } catch (err) {
        console.error('Failed to fetch weather:', err);
        setError('Could not load weather data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <Card className="shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <Cloud className="h-5 w-5" />
          <span>Current Weather</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center py-4">
            <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
          </div>
        ) : error ? (
          <div className="text-center text-gray-500 py-4">{error}</div>
        ) : weather ? (
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span className="font-medium">{weather.location}</span>
            </div>
            <div className="flex items-center">
              {weather.icon && (
                <img 
                  src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} 
                  alt={weather.description}
                  width={50}
                  height={50}
                />
              )}
              <span className="text-2xl font-bold">{weather.temperature}°C</span>
            </div>
            <p className="text-gray-600 capitalize">{weather.description}</p>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
};
