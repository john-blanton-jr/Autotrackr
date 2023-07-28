import React, { useState, useEffect } from 'react';



function ServiceHistory() {
  const [appointmentsData, setAppointment] = useState([]);
  const [inputVin, setInputVin] = useState("");
  const [vin, setVin] = useState([]);


  const fetchAppointment = async () => {
    const url = 'http://localhost:8080/api/appointments/';
    const response = await fetch(url)
    const appointmentsJson = await response.json();
    setAppointment(appointmentsJson.appointments);
  }
  useEffect(() => {
    fetchAppointment()
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const searchedVin = appointmentsData.filter(appointment => appointment.vin === inputVin);
    setVin(searchedVin);
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>VIN Search</h1>
      <div className="container">
        <form onSubmit={handleSearch} id="Vin Search">
          <div className="form-floating mb-3 input-group">
            <input onChange={event => setInputVin(event.target.value)} value={inputVin} placeholder="VIN Number" type="text" name="vin" id="vin"
              className="form-control" />
            <span className="input-group-text" id="basic-addon2"><button className="btn btn-success">Search</button></span>
          </div>
        </form>
        <h1 style={{ textAlign: "center" }}>Service History</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>VIN</th>
              <th>Is VIP?</th>
              <th>Customer Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Technician</th>
              <th>Reason</th>
            </tr>
          </thead>

          <tbody>
            {vin.map((appointment) => {
              return (
                <tr key={appointment.id}>
                  <td>{appointment.vin}</td>
                  <td>{appointment.vip ? "Yes" : "No"}</td>
                  <td>{appointment.customer_name}</td>
                  <td>{new Date(appointment.date).toLocaleDateString()}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                  <td>{appointment.reason}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}


export default ServiceHistory;
