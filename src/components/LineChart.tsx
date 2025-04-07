import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


const data = {
  labels: Array.from({ length: 31 }, (_, i) => `${String(i + 1).padStart(2, '0')}/12`),
  datasets: [
    {
      label: 'Demanda Aérea',
      data: Array.from({ length: 31 }, (_, i) => 
        Math.floor(5000 + 1000 * Math.sin(i / 2) + Math.random() * 500)
      ),
      borderColor: '#0d9488',
      fill: false,
    },
  ],
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
};

export default function LineChart() {
  return <Line data={data} options={options} />
  
}