import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Total Win",
      //data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data: [30, 150, 50, 100, 160, 45, 80],
      borderColor: "#583bab",
      lineTension: 0.2,
      backgroundColor: "rgb(88 59 171 / 50%)",
    },
    {
      fill: true,
      label: "Total Loss",
      //data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data: [150, 50, 100, 160, 45, 80, 20],
      borderColor: "rgb(53, 162, 235)",
      lineTension: 0.2,
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function StackChart() {
  return <Line options={options} data={data} />;
}
