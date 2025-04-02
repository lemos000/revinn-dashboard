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
  labels: ['01/12', '05/12', '09/12', '12/12', '15/12', '22/12', '31/12'],
  datasets: [
    {
      label: 'Demanda Aérea',
      data: [200, 450, 300, 500, 800, 600, 1000],
      borderColor: '#4CAF50',
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