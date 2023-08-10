import React, {useState} from 'react';


function SalespersonForm(){


  const defaultObj = {
    firstName: '',
    lastName: '',
    employeeId: '',
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
    data.employee_id = state.employeeId

    const hatUrl = "http://localhost:8090/api/salespeople/";
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
    <div className="d-flex justify-content-center">
    <div className="col-11 col-sm-8 col-md-6 col-lg-5 col-xl-4">
      <div className="shadow-lg p-4 mt-5 bg-light rounded border border-2 border-warning">
        <h1 className="text-center">Add a Salesperson</h1>
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
              placeholder="Employee Id"
              value={state.employeeId}
              onChange={handleChange}
              required
              type="text"
              className="form-control"
              id="employeeId"
              name="employeeId"
            />
            <label htmlFor="employeeId">Employee Id</label>
            </div>
          <button className="btn btn-primary">Add</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default SalespersonForm
