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

    const deleteSale = async (id) => {
      const response = await fetch(`http://localhost:8090/api/sales/${id}`, {
          method: 'DELETE'
      });
      if (response.ok) {
        fetchData();
      }
  }

    useEffect(() => {
      fetchData();
    }, [])
  return (
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
                          <td>
                              <button onClick={() => deleteSale(sale.id)} className="btn btn-outline-danger btn-sm">Delete Sale</button>
                          </td>
                      </tr>
                  )
              })}
          </tbody>
      </table>
  )
}

export default SalesList
