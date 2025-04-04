"use client";

import Header from "../components/Header";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";
import DailyForecastCard from "../components/DailyForecastCard";
import FinancialMarket from "../components/FinancialMarket";
import Events from "@/components/Events";
import { useState } from "react";

export default function Home() {

  const [selectedHotel, setSelectedHotel] = useState({
    name: "Castelo de Itaipava",
    city: "Petrópolis",
    state: "RJ",
  });

  const hotels = [
    { name: "Castelo de Itaipava", city: "Petrópolis", state: "RJ" },
    { name: "Hotel Fasano", city: "Rio de Janeiro", state: "RJ" },
    { name: "Copacabana Palace", city: "Rio de Janeiro", state: "RJ" },
    { name: "Hotel Unique", city: "São Paulo", state: "SP" },
    { name: "Belmond Hotel das Cataratas", city: "Foz do Iguaçu", state: "PR" },
    // Adicione mais hotéis aqui
  ];

  const handleHotelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = hotels.find((hotel) => hotel.name === event.target.value);
    if (selected) {
      setSelectedHotel(selected);
    }
  };

  return (
    <div className="bg-gray-100 max-h-[90rem]">
      <Header >
      <select
          className="p-2 border rounded text-white"
          value={selectedHotel.name}
          onChange={handleHotelChange}
        >
          {hotels.map((hotel) => (
            <option key={hotel.name} className="text-black" value={hotel.name}>
              {hotel.name}
            </option>
          ))}
        </select>
      </Header>
      <main className="p-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 xl:grid-rows-1 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md col-span-1 xl:col-span-2">
          <h2 className="text-lg font-semibold">Demanda Aérea</h2>
          <LineChart hotel={selectedHotel} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Top Origens</h2>
          <PieChart hotel={selectedHotel} />
        </div>
        <div className="bg-white p-6 h-full rounded-lg shadow-md xl:row-span-2 xl:col-span-1">
          <h2 className="text-lg font-semibold">Próximos Eventos</h2>
          <Events hotel={selectedHotel} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md xl:col-span-2">
          <h2 className="text-lg font-semibold">Previsão Diária</h2>
          <DailyForecastCard hotel={selectedHotel} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Mercado Financeiro</h2>
          <FinancialMarket hotel={selectedHotel} />
        </div>
      </main>
    </div>
 
  );
}
