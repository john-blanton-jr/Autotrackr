import { useState, useEffect } from "react";


function SalespeopleList(props) {
    const [salespeople, setSalespeople] = useState([]);

    async function fetchSalespeople() {
      const response = await fetch('http://localhost:8090/api/salespeople/')
      if (response.ok) {
        const data = await response.json();
        setSalespeople(data.salespeople);
      }
    }

    useEffect(() => {
      fetchSalespeople();
    }, [])
    const deleteSalesperson = async (id) => {
      const response = await fetch(`http://localhost:8090/api/salespeople/${id}`, {
          method: 'DELETE'
      });
      if (response.ok) {
        fetchSalespeople();
      }
  }

    return (
      <>
      <h1>Salespeople</h1>
      <table className="table table-striped">
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Style Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                {salespeople.map(salesperson => {
                    return (
                        <tr key={salesperson.id}>
                            <td>{ salesperson.employee_id }</td>
                            <td>{ salesperson.first_name }</td>
                            <td>{ salesperson.last_name }</td>
                            <td>
                                <button onClick={() => deleteSalesperson(salesperson.id)} className="btn btn-outline-danger btn-sm">Delete Salesperson</button>
                            </td>
                        </tr>
                    )
                  })}
            </tbody>
        </table>
      </>
    )
}


export default SalespeopleList
