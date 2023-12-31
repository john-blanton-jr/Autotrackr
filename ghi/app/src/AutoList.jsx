import { useState, useEffect } from "react";


function AutoList(){
    const [autos, setAutos] = useState([])

    async function fetchData() {
      const response = await fetch('http://localhost:8100/api/automobiles/')
      if (response.ok) {
        const data = await response.json()
        setAutos(data.autos)
      }
    }

    const handleBool = (bool) => {
        if (bool === true) return "Yes";
        return "No";
      }

    useEffect(() => {
      fetchData();
    }, [])
  return(
    <div className="d-flex justify-content-center">
    <div className="col mx-5">
      <div className="shadow-lg p-4 mt-5 bg-light rounded border border-2 border-warning">
    <h1>Automobiles</h1>
      <table className="table table-striped">
          <thead>
              <tr>
                  <th>VIN</th>
                  <th>Color</th>
                  <th>Year</th>
                  <th>Model</th>
                  <th>Manufacturer</th>
                  <th>Sold</th>
              </tr>
          </thead>
          <tbody>
              {autos.map(auto => {
                  return (
                      <tr key={auto.id}>
                          <td>{ auto.vin }</td>
                          <td>{ auto.color }</td>
                          <td>{ auto.year }</td>
                          <td>{ auto.model.name}</td>
                          <td>{ auto.model.manufacturer.name}</td>
                          <td>{handleBool(auto.sold)}</td>
                      </tr>
                  )
              })}
          </tbody>
      </table>
      </div>
        </div>
      </div>
  )
}

export default AutoList
