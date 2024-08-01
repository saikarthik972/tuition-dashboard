import React, { useState } from "react";
import Calendar from 'react-calendar';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import 'react-calendar/dist/Calendar.css'; // Import the calendar styles
import "./User.css";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const UserPage = () => {
  // Sample data for demonstration
  const [tasks, setTasks] = useState([
    { id: 1, title: "Math Assignment Due", date: "2024-07-28" },
    { id: 2, title: "Physics Exam", date: "2024-08-02" },
  ]);

  const [goals, setGoals] = useState([
    { id: 1, goal: "Improve Math grade", progress: "60%" },
    { id: 2, goal: "Complete Science project", progress: "40%" },
  ]);

  const [classSchedule, setClassSchedule] = useState([
    { day: "Monday", time: "9:00 AM - 10:00 AM", subject: "Math" },
    { day: "Tuesday", time: "10:00 AM - 11:00 AM", subject: "Physics" },
  ]);

  const [financials, setFinancials] = useState({
    feeStatus: "Paid",
    outstandingBalance: "$0",
    scholarships: "None",
  });

  const [newTask, setNewTask] = useState("");
  const [newTaskDate, setNewTaskDate] = useState("");
  const [newFeeStatus, setNewFeeStatus] = useState(financials.feeStatus);
  const [newOutstandingBalance, setNewOutstandingBalance] = useState(financials.outstandingBalance);
  const [newScholarships, setNewScholarships] = useState(financials.scholarships);
  const [newGoal, setNewGoal] = useState("");
  const [goalEditId, setGoalEditId] = useState(null);
  const [goalEditText, setGoalEditText] = useState("");

  const handleAddTask = () => {
    if (newTask && newTaskDate) {
      setTasks([...tasks, { id: tasks.length + 1, title: newTask, date: newTaskDate }]);
      setNewTask("");
      setNewTaskDate("");
    }
  };

  const handleUpdateFinancials = () => {
    setFinancials({
      feeStatus: newFeeStatus,
      outstandingBalance: newOutstandingBalance,
      scholarships: newScholarships,
    });
    setNewFeeStatus("");
    setNewOutstandingBalance("");
    setNewScholarships("");
  };

  const handleAddGoal = () => {
    if (newGoal) {
      setGoals([...goals, { id: goals.length + 1, goal: newGoal, progress: "0%" }]);
      setNewGoal("");
    }
  };

  const handleEditGoal = (id) => {
    setGoalEditId(id);
    const goalToEdit = goals.find((goal) => goal.id === id);
    setGoalEditText(goalToEdit.goal);
  };

  const handleSaveGoalEdit = () => {
    setGoals(goals.map((goal) =>
      goal.id === goalEditId ? { ...goal, goal: goalEditText } : goal
    ));
    setGoalEditId(null);
    setGoalEditText("");
  };

  // Sample data for the chart
  const financialData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Monthly Fees',
        data: [400, 450, 500, 550, 600],
        borderColor: '#4caf50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="user-page">
      <div className="calendar">
        <h2>Class Schedule</h2>
        <Calendar />
      </div>

      <div className="to-do-list">
        <h2>To-Do List</h2>
        <div className="upcoming-tasks">
          <h3>Upcoming Tasks</h3>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <span>{task.title}</span> - <span>{task.date}</span>
              </li>
            ))}
          </ul>
          <div className="add-task">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="New Task"
            />
            <input
              type="date"
              value={newTaskDate}
              onChange={(e) => setNewTaskDate(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
          </div>
        </div>
        <div className="personal-goals">
          <h3>Personal Goals</h3>
          <ul>
            {goals.map((goal) => (
              <li key={goal.id}>
                <span>{goal.goal}</span> -{" "}
                <span>Progress: {goal.progress}</span>
                <button onClick={() => handleEditGoal(goal.id)}>Edit</button>
              </li>
            ))}
          </ul>
          <div className="add-goal">
            <input
              type="text"
              value={newGoal}
              onChange={(e) => setNewGoal(e.target.value)}
              placeholder="New Goal"
            />
            <button onClick={handleAddGoal}>Add Goal</button>
          </div>
          {goalEditId && (
            <div className="edit-goal">
              <input
                type="text"
                value={goalEditText}
                onChange={(e) => setGoalEditText(e.target.value)}
                placeholder="Edit Goal"
              />
              <button onClick={handleSaveGoalEdit}>Save</button>
            </div>
          )}
        </div>
      </div>

      <div className="financial-overview">
        <h2>Financial Overview</h2>
        <p>
          <strong>Fee Status:</strong> {financials.feeStatus}
        </p>
        <p>
          <strong>Outstanding Balance:</strong> {financials.outstandingBalance}
        </p>
        <p>
          <strong>Scholarships:</strong> {financials.scholarships}
        </p>
        <div className="update-financials">
          <input
            type="text"
            value={newFeeStatus}
            onChange={(e) => setNewFeeStatus(e.target.value)}
            placeholder="Update Fee Status"
          />
          <input
            type="text"
            value={newOutstandingBalance}
            onChange={(e) => setNewOutstandingBalance(e.target.value)}
            placeholder="Update Outstanding Balance"
          />
          <input
            type="text"
            value={newScholarships}
            onChange={(e) => setNewScholarships(e.target.value)}
            placeholder="Update Scholarships"
          />
          <button onClick={handleUpdateFinancials}>Update Financials</button>
        </div>
        <div className="financial-chart">
          <h3>Financial Trends</h3>
          <Line data={financialData} />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
