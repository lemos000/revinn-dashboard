import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Legend,
  Tooltip,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Nova York', 'São Paulo', 'Rio de Janeiro'],
  datasets: [
    {
      label: 'Top Origens',
      data: [1253, 800, 600],
      backgroundColor: ['#0d9488', '#2dd4bf', '#115e59'], // paleta verde personalizada
      borderColor: '#ffffff',
      borderWidth: 2,
    },
  ],
};

export default function PieChart() {
  return <Doughnut data={data} />;
}
