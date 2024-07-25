import React from "react";
import { useParams, Link } from "react-router-dom";

const StudentDetail = () => {
  const { name } = useParams();
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

  const student = students.find((student) => student.name === name);

  if (!student) {
    return <div>Student not found</div>;
  }

  return (
    <div className="student-detail">
      <h2>Student Detail</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Phone:</strong> {student.phone}</p>
      <p><strong>Address:</strong> {student.address}</p>
      <p><strong>Percentage:</strong> {student.percentage}</p>
      <p><strong>Class:</strong> {student.class}</p>
      <p><strong>Fees:</strong> {student.fees}</p>
      <p><strong>Fee Method:</strong> {student.feeMethod.join(', ')}</p>
      <p><strong>Fee Status:</strong> {student.feeStatus.join(', ')}</p>
      <p><strong>School or College Name:</strong> {student.schoolOrCollegeName}</p>
      <p><strong>Parents Name:</strong> {student.parentsName}</p>
      <Link to="/dashboard">Back to Dashboard</Link>
    </div>
  );
};

export default StudentDetail;
