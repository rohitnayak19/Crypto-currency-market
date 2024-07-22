import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

const LineChart = ({ historicalData }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Prices',
        data: [],
        borderColor: 'rgba(0, 128, 0, 1)', // Green line color
        backgroundColor: 'rgba(0, 128, 0, 0.2)', // Green fill color
        fill: true,
        tension: 0.4,
      },
    ],
  });

  const chartOptions = {
    scales: {
      x: {
        ticks: {
          color: '#0000FF', // X-axis labels color (blue)
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)', // X-axis grid lines color (light grey)
        },
      },
      y: {
        ticks: {
          color: '#0000FF', // Y-axis labels color (blue)
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)', // Y-axis grid lines color (light grey)
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#0000FF', // Legend labels color (blue)
        },
      },
      tooltip: {
        backgroundColor: '#FFFFFF', // Tooltip background color (white)
        titleColor: '#0000FF', // Tooltip title color (blue)
        bodyColor: '#0000FF', // Tooltip body color (blue)
      },
    },
    layout: {
      padding: 20,
    },
  };

  useEffect(() => {
    if (historicalData.prices) {
      const labels = historicalData.prices.map(item =>
        new Date(item[0]).toLocaleDateString().slice(0, -5)
      );
      const data = historicalData.prices.map(item => item[1]);

      setChartData({
        labels,
        datasets: [
          {
            label: 'Prices',
            data,
            borderColor: 'rgba(0, 128, 0, 1)', // Green line color
            backgroundColor: 'rgba(0, 128, 0, 0.2)', // Green fill color
            fill: true,
          },
        ],
      });
    }
  }, [historicalData]);

  return (
<<<<<<< HEAD
    <div className="rounded-sm cursor-pointer bg-gray-200 md:w-full"> {/* Container background color (white) */}
      <Line data={chartData} options={chartOptions}/>
=======
    <div className="rounded-sm cursor-pointer bg-gray-200 w-full h-[270px] md:h-[350px] p-4 shadow-lg"> {/* Container background color (white) */}
      <Line data={chartData} options={chartOptions} />
>>>>>>> 80e2e18 (first commit)
    </div>
  );
};

export default LineChart;
