import React, {useState} from 'react';

function CustomerForm(){

  const defaultObj = {
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: ""
  }

  const [state, setState] = useState(defaultObj)

  const handleChange = evt => {
    const value = evt.target.value
    setState({
      ...state,
      [evt.target.name]: value,
    })
  }


  const HandleSubmit= async (event) => {
    event.preventDefault()

    const data = {}
    data.first_name = state.firstName
    data.last_name = state.lastName
    data.address = state.address
    data.phone_number = state.phoneNumber

    const hatUrl = "http://localhost:8090/api/customers/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(hatUrl, fetchConfig);
    if (response.ok) {
      setState(defaultObj)
    }
  };

  return (
    <div className="row">
    <div className="offset-3 col-6">
      <div className="shadow p-4 mt-4">
        <h1 className="text-center">Add a Customer</h1>
        <form onSubmit={HandleSubmit} id="create-presentation-form">
          <div className="form-floating mb-3">
            <input
              placeholder="First Name"
              onChange={handleChange}
              value={state.firstName}
              required
              type="text"
              name="firstName"
              id="firstName"
              className="form-control"
            />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              placeholder="Last Name"
              onChange={handleChange}
              value={state.lastName}
              required
              type="text"
              name="lastName"
              id="lastName"
              className="form-control"
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              placeholder="Address"
              value={state.address}
              onChange={handleChange}
              required
              type="text"
              className="form-control"
              id="address"
              name="address"
            />
            <label htmlFor="address">Address</label>
            </div>
          <div className="form-floating mb-3">
            <input
              placeholder="Phone Number"
              value={state.phoneNumber}
              onChange={handleChange}
              required
              type="text"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
            />
            <label htmlFor="phoneNumber">Phone Number</label>
            </div>
          <button className="btn btn-primary">Add</button>
        </form>
      </div>
    </div>
  </div>
  )

}

export default CustomerForm
