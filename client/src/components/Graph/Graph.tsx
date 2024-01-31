import React from 'react';
import { Line } from 'react-chartjs-2';

export const Graph = ({ data }) => {
  // Extract data from the API response
  const timestamps = data.map(entry => entry.Timestamp);
  const profitPercentages = data.map(entry => entry['Profit Percentage']);

  // Chart data
  const chartData = {
    labels: timestamps,
    datasets: [
      {
        label: 'Profit Percentage',
        data: profitPercentages,
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        lineTension: 0.1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    // scales: {
    //   xAxes: [
    //     {
    //       type: 'time',
    //       time: {
    //         unit: 'hour', // Adjust based on your data frequency
    //         displayFormats: {
    //           hour: 'HH:mm',
    //         },
    //       },
    //       scaleLabel: {
    //         display: true,
    //         labelString: 'Timestamp',
    //       },
    //     },
    //   ],
    //   yAxes: [
    //     {
    //       scaleLabel: {
    //         display: true,
    //         labelString: 'Profit Percentage',
    //       },
    //     },
    //   ],
    // },
  };

  return (
    <div>
      <h2>Area Graph: Profit Percentage over Time</h2>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

// export default Graph;
