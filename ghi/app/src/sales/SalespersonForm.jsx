import React, {useState} from 'react';


function SalespersonForm(){
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [employeeId, setEmployeeId] = useState('')

  const HandleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirstName(value);
  }

  const HandleLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);
  }

  const HandleEmployeeIdChange = (event) => {
    const value = event.target.value;
    setEmployeeId(value);
  }

  const HandleSubmit= async (event) => {
    event.preventDefault()

    const data = {}
    data.first_name = firstName
    data.last_name = lastName
    data.employee_id = employeeId

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
      setFirstName("");
      setLastName("");
      setEmployeeId("");
    }
  };

  return (
    <div className="row">
    <div className="offset-3 col-6">
      <div className="shadow p-4 mt-4">
        <h1 className="text-center">Add a Salesperson</h1>
        <form onSubmit={HandleSubmit} id="create-presentation-form">
          <div className="form-floating mb-3">
            <input
              placeholder="First Name"
              onChange={HandleFirstNameChange}
              value={firstName}
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
              onChange={HandleLastNameChange}
              value={lastName}
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
              value={employeeId}
              onChange={HandleEmployeeIdChange}
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
