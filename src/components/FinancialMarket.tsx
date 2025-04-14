
import React from "react";

interface MarketProps {
  name: string;
  value: string;
  change: string;
  color: "green" | "red";
}

const marketData: MarketProps[] = [
  { name: "Dólar (USD)", value: "R$ 5,85", change: "-0,02", color: "red" },
  { name: "Euro (EUR)", value: "R$ 6,01", change: "+0,03", color: "green" },
  { name: "Bitcoin (BTC)", value: "R$ 498.695,01", change: "+431", color: "green" },
];

const colorClass: Record<"green" | "red", string> = {
  green: "text-green-500",
  red: "text-red-500",
};

export default function FinancialMarket() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {marketData.map((market, index) => (
        <div
          key={index}
          className="bg-white shadow-md p-6 h-32 rounded-xl flex justify-between items-center"
        >
          {market.name.includes("Bitcoin") ? (
            <div className="flex items-center gap-3">
              <div>
                <p className="text-sm text-gray-600">{market.name}</p>
                <p className="text-lg font-bold">{market.value}</p>
                <span className={`text-sm font-semibold ${colorClass[market.color]}`}>
                  {market.change}
                </span>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-sm text-gray-600">{market.name}</p>
              <div className="flex items-center gap-2">
                <p className="text-xl font-bold">{market.value}</p> {/* AUMENTADO AQUI */}
               
                <span className={`text-sm font-semibold ${colorClass[market.color]}`}>
                  {market.change}
                </span>
              </div>
            </div>
          )}

          {market.name.includes("Bitcoin") }
        </div>
      ))}
    </div>
  );
}
