interface ForecastProps {
    date: string;
    temp: string;
    icon: string;
    chance: string;
  }
  
  const forecastData: ForecastProps[] = [
    { date: '28/03', temp: '27°/14°', icon: '☀️', chance: '44%' },
    { date: '29/03', temp: '29°/17°', icon: '⛅', chance: '24%' },
    { date: '30/03', temp: '30°/19°', icon: '🌧️', chance: '37%' },
    { date: '31/03', temp: '25°/14°', icon: '⛈️', chance: '44%' },
  ];
  
  export default function DailyForecastCard() {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {forecastData.map((forecast, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 rounded-lg shadow-sm text-center"
          >
            <p>{forecast.date}</p>
            <p className="text-md">{forecast.icon}</p>
            <p>{forecast.temp}</p>
            <p className="text-gray-500">{forecast.chance}</p>
          </div>
        ))}
      </div>
    );
  }