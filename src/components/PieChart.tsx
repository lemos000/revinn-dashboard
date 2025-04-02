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
      backgroundColor: ['#4caf50', '#2196f3', '#ff5722'],
    },
  ],
};


export default function PieChart() {
  return <Doughnut data={data}/>;
}