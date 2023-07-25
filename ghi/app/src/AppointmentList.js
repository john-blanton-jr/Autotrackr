import React, { useEffect, useState } from 'react';

function AppointmentList() {
    const [appointments, setAppointments] = useState([])

    const getData = async () => {
        const response = await fetch('http://localhost:8080/api/appointments/');
        const data = await response.json();
        setAppointments(data.appointments)
    }

    useEffect(() => {
        getData()
    }, [])

    const completeAppointment = (id) => {
        const updatedAppointments = appointments.filter(appointment => appointment.id !== id);
        setAppointments(updatedAppointments);
    }


    const cancelAppointment = async (id) => {
        await fetch(`http://localhost:8080/api/appointments/${id}`, {
            method: 'DELETE'
        });
        const updatedAppointments = appointments.filter(appointment => appointment.id !== id);
        setAppointments(updatedAppointments);
    }


    return (
        <div>
            <h1>Appointments</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Is VIP?</th>
                        <th>VIN</th>
                        <th>Customer Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Technician ID</th>
                        <th>Technician Name</th>
                        <th>Reason</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointments => {
                        return (
                            <tr key={appointments.id}>
                                <td>{appointments.vip ? "Yes" : "No"}</td>
                                <td>{appointments.vin}</td>
                                <td>{appointments.customer_name}</td>
                                <td>{appointments.date}</td>
                                <td>{appointments.time}</td>
                                <td>{appointments.technician.employee_id}</td>
                                <td>{appointments.technician.first_name} {appointments.technician.last_name}</td>
                                <td>{appointments.reason}</td>
                                <td>
                                    <button className="btn btn-success" onClick={() => completeAppointment(appointments.id)}>Complete</button>
                                    <button className="btn btn-danger" onClick={() => cancelAppointment(appointments.id)}>Cancel </button>
                                </td>
                            </tr>
                );
                
                    })}
            </tbody>
        </table>
        </div >
    );
}

export default AppointmentList;
