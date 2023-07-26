import React, {useEffect, useState} from 'react';

function SalespersonHistory(){
    const [salespeople, setSalespeople] = useState([]);
    const [sales, setSales] = useState([]);
    const [salesperson, setSalesperson] = useState('')

    const fetchSalespeople = async () => {
      const url = 'http://localhost:8090/api/salespeople/'
      const response = await fetch(url)

      if (response.ok) {
        const data = await response.json()
        setSalespeople(data.salespeople)
      }
      else {
        console.error(response);
      }
    }

    const fetchSales = async () => {
      const url = 'http://localhost:8090/api/sales/'
      const response = await fetch(url)

      if (response.ok) {
        const data = await response.json()
        setSales(data.sales)
      }
      else {
        console.error(response);
      }
    }

    const handleSalespersonChange = (event) => {
      const value = event.target.value;
      setSalesperson(value);
    }

    useEffect(() => {
    fetchSales();
    fetchSalespeople();
}, []);

  return (
    <>
    <h1>Salesperson History</h1>
    <select onChange={handleSalespersonChange} value={salesperson} required name="salesperson" id="salesperson" className="form-select">
        <option value="">Choose a salesperson</option>
        {salespeople.map(salesperson => {
            return(
                <option key={salesperson.id} value={salesperson.id}>
                    {salesperson.first_name } {salesperson.last_name }
                </option>
            );
        })}
    </select>


    <table className="table table-striped">
          <thead>
              <tr>
                  <th>Salesperson</th>
                  <th>Customer</th>
                  <th>VIN</th>
                  <th>Price</th>
              </tr>
          </thead>
          <tbody>
              {sales.filter(sale => sale.salesperson.id == salesperson).map(sale => {
                  return (
                      <tr key={sale.id}>
                          <td>{ sale.salesperson.first_name } { sale.salesperson.last_name }</td>
                          <td>{ sale.customer.first_name } { sale.customer.last_name }</td>
                          <td>{ sale.automobile.vin }</td>
                          <td>${ sale.price }</td>
                      </tr>
                  )
              })}
          </tbody>
      </table>
    </>
  )
}

export default SalespersonHistory
