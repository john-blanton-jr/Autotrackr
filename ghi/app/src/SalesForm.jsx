import React, {useEffect, useState} from 'react';


function SalesForm(props){
  const [vins, setVins] = useState([])
  const [vin, setVin] = useState('')
  const [salespeople, setSalespeople] = useState([])
  const [salesperson, setSalesperson] = useState('')
  const [customers, setCustomers] = useState([])
  const [customer, setCustomer] = useState('')
  const [price, setPrice] = useState('')

  const fetchVin = async () => {
    const url = 'http://localhost:8100/api/automobiles/'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      setVins(data.autos)
    }
    else {
      console.error(response);
    }
  }


  const fetchSalesPeople = async () => {
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

  const fetchCustomers = async () => {
    const url = 'http://localhost:8090/api/customers/'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      setCustomers(data.customers)
    }
    else {
      console.error(response);
    }
  }


  const handlePriceChange = (event) => {
    const value = event.target.value;
    setPrice(value);
  }

  const handleVinChange = (event) => {
    const value = event.target.value;
    setVin(value);
  }

  const handleSalespersonChange = (event) => {
    const value = event.target.value;
    setSalesperson(value);
  }

  const handleCustomerChange = (event) => {
    const value = event.target.value;
    setCustomer(value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = {}
    data.vin = vin
    data.salesperson = salesperson
    data.customer = customer
    data.price = price

    const saleUrl = 'http://localhost:8090/api/sales/'
    const fetchConfig = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "content-Type": "application/json",
      }
    }

    const saleResponse = await fetch(saleUrl, fetchConfig)
    if (saleResponse.ok) {
      const response = await saleResponse.json()
      console.log(response);
    }
  }

  useEffect(() => {
    fetchVin()
    fetchSalesPeople()
    fetchCustomers()
  }, [])

  return (
    <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Record a new sale</h1>
            <form onSubmit={handleSubmit} id="create-conference-form">

              <div className="mb-3">
                <select
                  onChange={handleVinChange}
                  // value={location}
                  required
                  id="vin"
                  name="vin"
                  className="form-select"
                >
                  <option value="">Automobile VIN</option>
                  {vins.map(vin => {
                    return (
                      <option key={vin.id} value={vin.vin}>
                      {vin.vin} / {vin.model.manufacturer.name} {vin.model.name} / {vin.year} / {vin.color}
                      </option>
                      );
                    })}
                </select>
              </div>
              <div className="mb-3">
                <select
                  onChange={handleSalespersonChange}
                  // value={location}
                  required
                  id="salesperson"
                  name="salesperson"
                  className="form-select"
                >
                  <option value="">Salesperson</option>
                  {salespeople.map(salesperson => {
                    return (
                      <option key={salesperson.id} value={salesperson.id}>
                      {salesperson.first_name} {salesperson.last_name} {salesperson.employee_id}
                      </option>
                      );
                    })}
                </select>
              </div>
              <div className="mb-3">
                <select
                  onChange={handleCustomerChange}
                  // value={location}
                  required
                  id="customer"
                  name="customer"
                  className="form-select"
                >
                  <option value="">Customer</option>
                  {customers.map(customer => {
                    return (
                      <option key={customer.id} value={customer.id}>
                      {customer.first_name} {customer.last_name}
                      </option>
                      );
                    })}
                </select>
              </div>
                    <div className="form-floating mb-3">
                      <input
                        onChange={handlePriceChange}
                        // value={maxAttendees}
                        placeholder="Price"
                        required
                        type="number"
                        id="price"
                        name="price"
                        className="form-control"
                      />
                      <label htmlFor="price">Price</label>
                    </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default SalesForm
