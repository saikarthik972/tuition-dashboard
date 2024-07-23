import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const BarChart = ({ studentData }) => {
  // Prepare data for the bar chart
  const labels = studentData.map(student => student.name);
  const dataValues = studentData.map(student => parseInt(student.percentage));

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Student Percentage',
        data: dataValues,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `${value}%`;
          },
        },
      },
    },
  };

  return (
    <div>
      <h3>Bar Chart</h3>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
