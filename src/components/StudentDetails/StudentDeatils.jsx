import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import dummyImage from "../../Assets/images/profile.png";
import "../StudentDetails/StudentDeatils.css";

const StudentDetail = () => {
  const { name } = useParams();
  const [students, setStudents] = useState([
    {
      name: "John Doe",
      phone: "123-456-7890",
      address: "123 Main St",
      percentage: "85%",
      class: "10th",
      fees: "$500",
      feeMethod: ["Credit Card"],
      feeStatus: "Unpaid",
      schoolOrCollegeName: "ABC High School",
      parentsName: "Mr. and Mrs. Doe",
    },
    {
      name: "Jane Smith",
      phone: "987-654-3210",
      address: "456 Elm St",
      percentage: "90%",
      class: "11th",
      fees: "$600",
      feeMethod: ["Cash"],
      feeStatus: "Unpaid",
      schoolOrCollegeName: "XYZ High School",
      parentsName: "Mr. and Mrs. Smith",
    },
    {
      name: "Emily Johnson",
      phone: "555-123-4567",
      address: "789 Oak St",
      percentage: "75%",
      class: "10th",
      fees: "$550",
      feeMethod: ["Credit Card"],
      feeStatus: "Unpaid",
      schoolOrCollegeName: "LMN High School",
      parentsName: "Mr. and Mrs. Johnson",
    },
    {
      name: "Michael Brown",
      phone: "111-222-3333",
      address: "101 Pine St",
      percentage: "88%",
      class: "12th",
      fees: "$650",
      feeMethod: ["Bank Transfer"],
      feeStatus: "Unpaid",
      schoolOrCollegeName: "OPQ High School",
      parentsName: "Mr. and Mrs. Brown",
    },
    {
      name: "Sarah Davis",
      phone: "222-333-4444",
      address: "202 Maple St",
      percentage: "92%",
      class: "11th",
      fees: "$620",
      feeMethod: ["Cash"],
      feeStatus: "Unpaid",
      schoolOrCollegeName: "RST High School",
      parentsName: "Mr. and Mrs. Davis",
    },
  ]);

  const student = students.find((student) => student.name === name);

  const handleStatusChange = (index) => {
    const updatedStudents = students.map((student, i) => {
      if (i === index) {
        return {
          ...student,
          feeStatus: student.feeStatus === "Paid" ? "Unpaid" : "Paid",
        };
      }
      return student;
    });
    setStudents(updatedStudents);
  };

  if (!student) {
    return <div>Student not found</div>;
  }

  return (
    <div className="student-detail">
      <div className="student-profile">
        <img src={dummyImage} alt="Student" className="student-image" />
        <h2 style={{ textAlign: "left" }}>Student Detail</h2>
        <p>
          <strong>Name:</strong> {student.name}
        </p>
        <p>
          <strong>Class:</strong> {student.class}
        </p>
        <p>
          <strong>Phone:</strong> {student.phone}
        </p>
        <p>
          <strong>Fees:</strong> {student.fees}
        </p>
        <p>
          <strong>Address:</strong> {student.address}
        </p>
        <Link to="/dashboard">Back to Dashboard</Link>
      </div>
      <div className="student-fee-table">
        <h2>Fee Details</h2>
        <table>
          <thead>
            <tr>
              <th>S/No</th>
              <th>Fee</th>
              <th>Payment Status</th>
              <th>Mode of Payment</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.name}>
                <td>{index + 1}</td>
                <td>{student.fees}</td>
                <td>
                  <label className="label-container">
                  {student.feeStatus}
                    <input
                      type="checkbox"
                      checked={student.feeStatus === "Paid"}
                      onChange={() => handleStatusChange(index)}
                    />
                    
                  </label>
                </td>
                <td>{student.feeMethod.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentDetail;
