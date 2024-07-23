import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import PieChart from "../../Utlites/Charts/PieChart";
import BarChart from "../../Utlites/Charts/BarChart";

const Dashboard = () => {
  // Sample student data
  const students = [
    { name: 'John Doe', phone: '123-456-7890', address: '123 Main St', percentage: '85%', class: '10th', fees: '$500' },
  { name: 'Jane Smith', phone: '987-654-3210', address: '456 Elm St', percentage: '90%', class: '11th', fees: '$600' },
  { name: 'Emily Johnson', phone: '555-123-4567', address: '789 Oak St', percentage: '75%', class: '10th', fees: '$550' },
  { name: 'Michael Brown', phone: '111-222-3333', address: '101 Pine St', percentage: '88%', class: '12th', fees: '$650' },
  { name: 'Sarah Davis', phone: '222-333-4444', address: '202 Maple St', percentage: '92%', class: '11th', fees: '$620' },
  { name: 'David Wilson', phone: '333-444-5555', address: '303 Birch St', percentage: '80%', class: '10th', fees: '$530' },
  { name: 'Laura Martinez', phone: '444-555-6666', address: '404 Cedar St', percentage: '95%', class: '12th', fees: '$700' },
  { name: 'Daniel Lee', phone: '555-666-7777', address: '505 Spruce St', percentage: '85%', class: '11th', fees: '$600' },
  { name: 'Olivia Clark', phone: '666-777-8888', address: '606 Willow St', percentage: '78%', class: '10th', fees: '$540' },
  { name: 'James Walker', phone: '777-888-9999', address: '707 Fir St', percentage: '90%', class: '11th', fees: '$610' },
  { name: 'Sophia Lewis', phone: '888-999-0000', address: '808 Redwood St', percentage: '87%', class: '12th', fees: '$660' },
  { name: 'Liam Robinson', phone: '999-000-1111', address: '909 Elm St', percentage: '83%', class: '10th', fees: '$500' },
  { name: 'Isabella White', phone: '000-111-2222', address: '1010 Oak St', percentage: '91%', class: '11th', fees: '$620' },
  { name: 'Ethan Harris', phone: '111-222-3334', address: '1111 Maple St', percentage: '89%', class: '12th', fees: '$670' },
  { name: 'Mia Young', phone: '222-333-4445', address: '1212 Pine St', percentage: '76%', class: '10th', fees: '$530' },
  { name: 'Alexander King', phone: '333-444-5556', address: '1313 Birch St', percentage: '82%', class: '11th', fees: '$610' },
  { name: 'Ava Wright', phone: '444-555-6667', address: '1414 Cedar St', percentage: '93%', class: '12th', fees: '$680' },
  { name: 'Benjamin Scott', phone: '555-666-7778', address: '1515 Spruce St', percentage: '80%', class: '10th', fees: '$540' },
  { name: 'Charlotte Green', phone: '666-777-8889', address: '1616 Willow St', percentage: '87%', class: '11th', fees: '$600' },
  { name: 'Henry Adams', phone: '777-888-9990', address: '1717 Fir St', percentage: '92%', class: '12th', fees: '$670' },
  { name: 'Amelia Baker', phone: '888-999-0001', address: '1818 Redwood St', percentage: '79%', class: '10th', fees: '$550' },
  { name: 'Jack Thompson', phone: '999-000-1112', address: '1919 Elm St', percentage: '85%', class: '11th', fees: '$620' },
  { name: 'Harper Collins', phone: '000-111-2223', address: '2020 Oak St', percentage: '90%', class: '12th', fees: '$700' },
  { name: 'Lucas Mitchell', phone: '111-222-3335', address: '2121 Maple St', percentage: '81%', class: '10th', fees: '$500' },
  { name: 'Ella Rodriguez', phone: '222-333-4446', address: '2222 Pine St', percentage: '88%', class: '11th', fees: '$610' },
  { name: 'Noah Perez', phone: '333-444-5557', address: '2323 Birch St', percentage: '94%', class: '12th', fees: '$690' },
];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStudents, setFilteredStudents] = useState(students);

  const handleSearch = () => {
    const term = searchTerm.toLowerCase();
    const results = students.filter(
      (student) =>
        student.name.toLowerCase().includes(term) ||
        student.phone.includes(term)
    );
    setFilteredStudents(results);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-stats">
        <div className="stat-box">
          <h3>714k</h3>
          <p>Total Students</p>
        </div>
        <div className="stat-box">
          <h3>135</h3>
          <p>Primay Students</p>
        </div>
        <div className="stat-box">
          <h3>1.72m</h3>
          <p>High School Students</p>
        </div>
        <div className="stat-box">
          <h3>234</h3>
          <p>College Students</p>
        </div>
      </div>
      <div className="dashboard-charts">
        <div className="chart-box">
          <PieChart studentData={students} /> {/* Pass student data as prop */}
        </div>
        <div className="chart-box">
          <BarChart studentData={students} /> {/* Pass student data as prop */}
        </div>
      </div>
      <div className="dashboard-table">
        <h2>Student List</h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by name or phone number"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
          <Link to="/add-student">
            <button className="new-student-button">Add New Student</button>
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Percentage</th>
              <th>Class</th>
              <th>Fees</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.phone}</td>
                <td>{student.address}</td>
                <td>{student.percentage}</td>
                <td>{student.class}</td>
                <td>{student.fees}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
