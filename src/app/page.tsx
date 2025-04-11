"use client";

import Header from "../components/Header";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";
import DailyForecastCard from "../components/DailyForecastCard";
import FinancialMarket from "../components/FinancialMarket";
import Events from "@/components/Events";
import "../components/fontawesome";
import CustomDropdown from "../components/CustomDropdown";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture, faSun, faDollarSign } from "@fortawesome/free-solid-svg-icons";

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
    { name: "Biruleibe leibe", city: "Foz do Pirocu", state: "PA" },
    { name: "LemosLandia Hotel", city: "ZL do Maranhão", state: "MA" },
  ];

  return (
    <div className="bg-gray-100 max-h-[90rem]">
      <Header>
        <CustomDropdown
          hotels={hotels}
          selectedHotel={selectedHotel}
          onChange={setSelectedHotel}
        />
      </Header>

      <main className="p-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 xl:grid-rows-1 gap-6 -mt-7">
        <div className="bg-white p-6 rounded-2xl shadow-lg col-span-1 xl:col-span-2">
          <h2 className="text-2xl font-bold text-teal-600 flex items-center gap-2 pb-3">
            Demanda Aérea
            <FontAwesomeIcon icon={faPlaneDeparture} className="text-teal-600 text-xl" />
          </h2>
          <LineChart hotel={selectedHotel} />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-teal-600 pb-3">Top Origens</h2>
          <PieChart hotel={selectedHotel} />
        </div>

        <div className="bg-white p-6 h-full rounded-2xl shadow-lg xl:col-span-1">
          <h2 className="text-2xl font-bold text-teal-600 pb-3">Próximos Eventos</h2>
          <Events hotel={selectedHotel} />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg xl:col-span-2">
          <h2 className="text-2xl font-bold text-teal-600 flex items-center gap-2 pb-3">
            Previsão Diária
            <FontAwesomeIcon icon={faSun} className="text-teal-600 text-xl" />
          </h2>
          <DailyForecastCard hotel={selectedHotel} />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg xl:col-span-2">
          <h2 className="text-2xl font-bold text-teal-600 flex items-center gap-2 pb-3">
            Mercado Financeiro
            <FontAwesomeIcon icon={faDollarSign} className="text-teal-600 text-xl" />
          </h2>
          <FinancialMarket hotel={selectedHotel} />
        </div>
      </main>
    </div>
  );
}
