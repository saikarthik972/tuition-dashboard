// src/components/Home.js
import React from 'react';

const Home = () => {
  // Fetch the number of students and other data from the backend
  const numberOfStudents = 50; // Example data

  return (
    <div className="home-container">
      <h2>Dashboard</h2>
      <p>Number of Students: {numberOfStudents}</p>
      {/* Add more dashboard information here */}
    </div>
  );
};

export default Home;
