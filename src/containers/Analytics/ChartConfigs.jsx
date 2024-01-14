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
  BarElement,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  BarElement
);

import { faker } from "@faker-js/faker";

export const mainChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      position: "right",
      ticks: {
        maxTicksLimit: 6,
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        maxTicksLimit: 3,
        align: "inner",
      },
    },
  },
  point: false,
  elements: {
    point: {
      pointStyle: false,
    },
    line: {
      borderColor: "rgb(95, 158,199)",
      fill: true,
      borderWidth: 1.5,
    },
  },
};

const days = [
  "Jan 13, 2024",
  "Jan 14, 2024",
  "Jan 15, 2024",
  "Jan 16, 2024",
  "Jan 17, 2024",
  "Feb 01, 2024",
  "Feb 02, 2024",
  "Feb 03, 2024",
  "Feb 04, 2024",
  "Feb 05, 2024",
];

export const getMainChartData = () => {
  return {
    labels: days,
    datasets: [
      {
        label: "Value",
        data: days.map(() => faker.datatype.number({ min: 600, max: 1000 })),
        backgroundColor: "rgba(161, 207, 237, 0.5)",
        animation: false,
      },
    ],
  };
};

const realTimeChartLabels = [
  "-48h",
  "-47h",
  "-46h",
  "-45h",
  "-44h",
  "-43h",
  "-42h",
  "-41h",
  "-40h",
  "-39h",
  "-38h",
  "-37h",
  "-36h",
  "-35h",
  "-34h",
  "-33h",
  "-32h",
  "-31h",
  "-30h",
  "-29h",
  "-28h",
  "-27h",
  "-26h",
  "-25h",
  "-24h",
  "-23h",
  "-22h",
  "-21h",
  "-20h",
  "-19h",
  "-18h",
  "-17h",
  "-16h",
  "-15h",
  "-14h",
  "-13h",
  "-12h",
  "-11h",
  "-10h",
  "-9h",
  "-8h",
  "-7h",
  "-6h",
  "-5h",
  "-4h",
  "-3h",
  "-2h",
  "-1h",
  "NOW",
];

export const realTimeChartData = {
  labels: realTimeChartLabels,
  datasets: [
    {
      label: "Views",
      data: realTimeChartLabels.map(() =>
        faker.datatype.number({ min: 30, max: 90 })
      ),
      backgroundColor: "rgb(95, 158,199)",
    },
  ],
};

export const realTimeChartOptions = {
  labels: realTimeChartLabels,
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      display: false,
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        callback: (label, index) =>
          index === 0 || index === 47 ? realTimeChartLabels[index] : null,
        autoSkip: false,
        align: "inner",
      },
    },
  },
};
