import { useState, useEffect } from "react";

function SalesList(props){
    const [sales, setSales] = useState([])

    async function fetchData() {
      const response = await fetch('http://localhost:8090/api/sales/')
      if (response.ok) {
        const data = await response.json()
        setSales(data.sales);
      }
    }

    useEffect(() => {
      fetchData();
    }, [])
  return (
    <div className="d-flex justify-content-center">
    <div className="col mx-5">
      <div className="shadow-lg p-4 mt-5 bg-light rounded border border-2 border-warning">
    <h1>Sales</h1>
    <table className="table table-striped">
          <thead>
              <tr>
                  <th>Salesperson Employee ID</th>
                  <th>Salesperson</th>
                  <th>Customer</th>
                  <th>VIN</th>
                  <th>Price</th>
              </tr>
          </thead>
          <tbody>
              {sales.map(sale => {
                  return (
                      <tr key={sale.id}>
                          <td>{ sale.salesperson.employee_id }</td>
                          <td>{ sale.salesperson.first_name } { sale.salesperson.last_name }</td>
                          <td>{ sale.customer.first_name } { sale.customer.last_name }</td>
                          <td>{ sale.automobile.vin }</td>
                          <td>${ sale.price }</td>
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

export default SalesList
