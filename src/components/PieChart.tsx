import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { useRef } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

const chartColors = ['#0d9488', '#2dd4bf', '#115e59'];
const chartLabels = ['Nova York', 'São Paulo', 'Rio de Janeiro'];
const chartData = [1253, 800, 600];

const data = {
  labels: chartLabels,
  datasets: [
    {
      label: 'Top Origens',
      data: chartData,
      backgroundColor: chartColors,
      borderColor: '#ffffff',
      borderWidth: 2,
    },
  ],
};

export default function PieChart() {
  const chartRef = useRef(null);

  return (
    <div className="flex flex-col items-center pt-9">
      <div className="w-56 h-56">
        <Doughnut ref={chartRef} data={data} options={{ plugins: { legend: { display: false } } }} />
      </div>

      <div className="mt-4 space-y-2 w-full max-w-xs">
        {chartLabels.map((label, index) => (
          <div
            key={index}
            className="flex items-center justify-between text-sm font-medium"
          >
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: chartColors[index] }}
              ></span>
              <span>{label}</span>
            </div>
            <span
              className="font-bold"
              style={{ color: chartColors[index] }}
            >
              {chartData[index]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
