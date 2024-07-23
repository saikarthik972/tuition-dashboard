import React from 'react';
import './StudentDetails.css';

const students = [
  {
    name: 'John Doe',
    phone: '123-456-7890',
    address: '123 Main St',
    percentage: '85%',
    class: '10th',
    fees: '$500',
    feeMethod: ['Credit Card'],
    feeStatus: ['Paid'],
    schoolOrCollegeName: 'ABC High School',
    parentsName: 'Mr. and Mrs. Doe'
  },
  {
    name: 'Jane Smith',
    phone: '987-654-3210',
    address: '456 Elm St',
    percentage: '90%',
    class: '11th',
    fees: '$600',
    feeMethod: ['Cash'],
    feeStatus: ['Unpaid'],
    schoolOrCollegeName: 'XYZ High School',
    parentsName: 'Mr. and Mrs. Smith'
  },
  {
    name: 'Emily Johnson',
    phone: '555-123-4567',
    address: '789 Oak St',
    percentage: '75%',
    class: '10th',
    fees: '$550',
    feeMethod: ['Credit Card'],
    feeStatus: ['Paid'],
    schoolOrCollegeName: 'LMN High School',
    parentsName: 'Mr. and Mrs. Johnson'
  },
  {
    name: 'Michael Brown',
    phone: '111-222-3333',
    address: '101 Pine St',
    percentage: '88%',
    class: '12th',
    fees: '$650',
    feeMethod: ['Bank Transfer'],
    feeStatus: ['Paid'],
    schoolOrCollegeName: 'OPQ High School',
    parentsName: 'Mr. and Mrs. Brown'
  },
  {
    name: 'Sarah Davis',
    phone: '222-333-4444',
    address: '202 Maple St',
    percentage: '92%',
    class: '11th',
    fees: '$620',
    feeMethod: ['Cash'],
    feeStatus: ['Unpaid'],
    schoolOrCollegeName: 'RST High School',
    parentsName: 'Mr. and Mrs. Davis'
  }
];

const StudentDetails = () => {
  return (
    <div className="student-details">
      <h2>Student Details</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            
            <th>Percentage</th>
            <th>Class</th>
            <th>Fees</th>
            <th>Fee Method</th>
            <th>Fee Status</th>
            <th>School or College Name</th>
            <th>Parents Name</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.phone}</td>
              
              <td>{student.percentage}</td>
              <td>{student.class}</td>
              <td>{student.fees}</td>
              <td>{student.feeMethod.join(', ')}</td>
              <td>{student.feeStatus.join(', ')}</td>
              <td>{student.schoolOrCollegeName}</td>
              <td>{student.parentsName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDetails;
