import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddStudent.css";

const AddStudent = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    name: "",
    phone: "",
    address: "",
    percentage: "",
    class: "",
    fees: "",
    feeMethod: [],
    feeStatus: [],
    schoolOrCollegeName: "",
    parentsName: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setStudent((prev) => ({
        ...prev,
        [name]: checked ? [...prev[name], value] : prev[name].filter((item) => item !== value),
      }));
    } else {
      setStudent((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add student logic here (e.g., sending data to server)
    console.log(student);
    navigate("/dashboard"); // Redirect to the dashboard after adding a student
  };

  return (
    <div className="add-student">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Name:
            <input type="text" name="name" value={student.name} onChange={handleChange} required />
          </label>
          <label>
            Phone Number:
            <input type="text" name="phone" value={student.phone} onChange={handleChange} required />
          </label>
        </div>
        <div className="form-row">
          <label>
            School or College Name:
            <input type="text" name="schoolOrCollegeName" value={student.schoolOrCollegeName} onChange={handleChange} required />
          </label>
          <label>
            Parents Name:
            <input type="text" name="parentsName" value={student.parentsName} onChange={handleChange} required />
          </label>
        </div>
        <div className="form-row">
          <label>
            Address:
            <input type="text" name="address" value={student.address} onChange={handleChange} required />
          </label>
          <label>
            Percentage:
            <input type="text" name="percentage" value={student.percentage} onChange={handleChange} required />
          </label>
        </div>
        <div className="form-row">
          <label>
            Class:
            <input type="text" name="class" value={student.class} onChange={handleChange} required />
          </label>
          <label>
            Fees:
            <input type="text" name="fees" value={student.fees} onChange={handleChange} required />
          </label>
        </div>
        <div className="form-row">
          <label>
            Fee Method:
            <label>
              <input type="checkbox" name="feeMethod" value="Credit Card" onChange={handleChange} />
              Credit Card
            </label>
            <label>
              <input type="checkbox" name="feeMethod" value="Cash" onChange={handleChange} />
              Cash
            </label>
            <label>
              <input type="checkbox" name="feeMethod" value="Bank Transfer" onChange={handleChange} />
              Bank Transfer
            </label>
          </label>
        </div>
        <div className="form-row">
          <label>
            Fee Status:
            <label>
              <input type="checkbox" name="feeStatus" value="Paid" onChange={handleChange} />
              Paid
            </label>
            <label>
              <input type="checkbox" name="feeStatus" value="Pending" onChange={handleChange} />
              Pending
            </label>
          </label>
        </div>
        
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
