import React, { useState, useEffect } from 'react';



function ServiceHistory() {
  const [servicesData, setService] = useState([]);
  const [inputVin, setInputVin] = useState("");
  const [vin, setVin] = useState([]);


  const fetchService = async () => {
    const url = 'http://localhost:8080/api/appointments/';
    const response = await fetch(url)
    const servicesJson = await response.json();
    setService(servicesJson.services)
  }
  useEffect(() => {
    fetchService()
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const searchedVin = servicesData.filter(service => service.vin === inputVin);
    console.log("input ", searchedVin)
    setVin(searchedVin);
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Vin Search</h1>
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
            {vin.map((service) => {
              return (
                <tr key={service.id}>
                  <td>{service.vin}</td>
                  <td>{service.vip}</td>
                  <td>{service.owner_name}</td>
                  <td>{new Date(service.appointment).toLocaleDateString()}</td>
                  <td>{new Date(service.appointment).toLocaleTimeString()}</td>
                  <td>{service.tech_name.tech_name}</td>
                  <td>{service.service_name}</td>
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
