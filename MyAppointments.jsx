import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Context } from "../main";
import { Navigate } from "react-router-dom";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/appointment/myappointments",
          { withCredentials: true }
        );
        setAppointments(data.appointments);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAppointments();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="myAppointments">
      <h2>My Appointments</h2>
      <table>
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Department</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.length > 0 ? (
            appointments.map((appt) => (
              <tr key={appt._id}>
                <td>{`${appt.doctor.firstName} ${appt.doctor.lastName}`}</td>
                <td>{appt.department}</td>
                <td>{appt.appointment_date?.substring(0, 10)}</td>
                <td>
                  <span className={`status ${appt.status.toLowerCase()}`}>
                    {appt.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No appointments found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyAppointments;