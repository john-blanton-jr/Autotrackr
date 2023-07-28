import React, { useEffect, useState } from 'react';

class AppointmentList extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        appointments: [],
      };
    }
  
    async componentDidMount() {
      const appointmentsUrl = 'http://localhost:8080/api/appointments/';
      const response = await fetch(appointmentsUrl);
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        this.setState({ appointments: data.appointments })
      }
    }
  
    handleCancel = async (event) => {
      const id = event.target.value;
      const appointmentUrl = `http://localhost:8080/api/appointments/${id}/`;
      const fetchConfig = {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const response = await fetch(appointmentUrl, fetchConfig);
      console.log(response)
      if (response.ok) {
        this.setState({
          appointments: this.state.appointments.filter(appointment => appointment.id === id)
        })
      }
    }
  
    handleFinish = async (event) => {
      event.preventDefault();
      const data = { ...this.state };
      delete data.appointments;
  
      const id = event.target.value;
      const appointmentUrl = `http://localhost:8080/api/appointments/${id}/`;
      const fetchConfig = {
        method: "PUT",
        body: JSON.stringify({ finish: true }),
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const response = await fetch(appointmentUrl, fetchConfig);
  
      if (response.ok) {
        this.setState({
          appointments: this.state.appointments.filter(appointment => appointment.id === id)
        })
      }
  
    }
  
    render() {

        return (
            
            <div>
                <h1 style={{ textAlign: "center" }}>Appointments</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Is VIP?</th>
                            <th>VIN</th>
                            <th>Customer Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Technician Name</th>
                            <th>Reason</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.appointments.map(appointment => {
                            return !appointment.finished && (
                                <tr key={appointment.id}>
                                    <td>{appointment.vip ? "Yes" : "No"}</td>
                                    <td>{appointment.vin}</td>
                                    <td>{appointment.customer_name}</td>
                                    <td>{new Date(appointment.date).toLocaleDateString()}</td>
                                    <td>{appointment.time}</td>
                                    <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                                    <td>{appointment.reason}</td>
                                    <td>
                                        <button onClick={this.handleFinish} value={appointment.id} className="btn btn-success btn-sm">FINISH</button>
                                        <button onClick={this.handleCancel} value={appointment.id} className="btn btn-danger btn-sm">CANCEL</button>
                                    </td>
                                </tr>
                    );

                        })}
                </tbody>
            </table>
            </div >

        );
    }
};

export default AppointmentList;
