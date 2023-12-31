import { useState, useEffect } from "react";


function CustomerList(props) {
    const [customers, setCustomers] = useState([]);

    async function fetchCustomers() {
      const response = await fetch('http://localhost:8090/api/customers/')
      if (response.ok) {
        const data = await response.json();
        setCustomers(data.customers);
      }
    }

    const deleteCustomer = async (id) => {
      const response = await fetch(`http://localhost:8090/api/customers/${id}`, {
          method: 'DELETE'
      });
      if (response.ok) {
        fetchCustomers();
      }
  }

    useEffect(() => {
      fetchCustomers();
    }, [])

    return (
      <div className="d-flex justify-content-center">
    <div className="col mx-5">
      <div className="shadow-lg p-4 mt-5 bg-light rounded border border-2 border-warning">
      <h1>Customers</h1>
      <table className="table table-striped">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {customers.map(customer => {
                    return (
                        <tr key={customer.id}>
                            <td>{ customer.first_name }</td>
                            <td>{ customer.last_name }</td>
                            <td>{ customer.address }</td>
                            <td>{ customer.phone_number }</td>
                            <td>
                                <button onClick={() => deleteCustomer(customer.id)} className="btn btn-outline-danger btn-sm">Delete Customer</button>
                            </td>
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

export default CustomerList
