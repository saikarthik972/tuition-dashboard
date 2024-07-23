import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PieChart = ({ studentData }) => {
  // Generate data for the pie chart based on the student data
  const labels = studentData.map(student => student.class);
  const dataValues = studentData.map(student => parseInt(student.percentage));

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Student Percentage by Class',
        data: dataValues,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows chart to scale with container
  };

  return (
    <div>
      <h3>Pie Chart</h3>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChart;
