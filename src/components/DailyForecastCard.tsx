import { useEffect, useState } from "react";

interface ForecastProps {
  date: string;
  temp: string;
  icon: string;
  chance: string;
}

export default function DailyForecastCard() {
  const [forecastData, setForecastData] = useState<ForecastProps[]>([]);
  const API_KEY = "API_KEY"; // Substitua por sua chave da API da OpenWeather
  const CITY = "São Paulo"; // Substitua pela cidade desejada

  useEffect(() => {
    async function fetchForecast() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&units=metric&appid=${API_KEY}`
        );
        const data = await response.json();

        const dailyData = data.list.filter((_: any, index: number) => index % 8 === 0); // Filtra previsões diárias
        const formattedData = dailyData.map((item: any) => ({
          date: new Date(item.dt * 1000).toLocaleDateString("pt-BR"),
          temp: `${Math.round(item.main.temp_max)}°/${Math.round(item.main.temp_min)}°`,
          icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
          chance: `${item.pop * 100}%`,
        }));

        setForecastData(formattedData);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    }

    fetchForecast();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {forecastData.map((forecast, index) => (
        <div
          key={index}
          className="bg-gray-50 p-4 rounded-lg shadow-sm text-center"
        >
          <p>{forecast.date}</p>
          <img
            src={forecast.icon}
            alt="Weather Icon"
            className="mx-auto w-12 h-12"
          />
          <p>{forecast.temp}</p>
          <p className="text-gray-500">{forecast.chance}</p>
        </div>
      ))}
    </div>
  );
}