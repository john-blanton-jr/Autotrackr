import React from 'react';

class TechForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      employee_id: '',
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const data = { ...this.state };
    console.log(data)
    const technicianUrl = 'http://localhost:8080/api/technicians/';
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    }
    const response = await fetch(technicianUrl, fetchConfig);

    if (response.ok) {
      const newTechnician = await response.json();
      const cleared = {
        first_name: '',
        last_name: '',
        employee_id: '',
      }
      this.setState(cleared);
    }
  }

  handleFirstNameChange = (e) => {
    const value = e.target.value;
    this.setState({ first_name: value })
  }

  handleLastNameChange = (e) => {
    const value = e.target.value;
    this.setState({ last_name: value })
  }

  handleEmployeeNumChange = (e) => {
    const value = e.target.value;
    this.setState({ employee_id: value })
  }


  render() {
    return (
      <>
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1 style={{ textAlign: "center" }}>Add a Technician</h1>
              <form onSubmit={this.handleSubmit} id="create-technician-form">
                <div className="form-floating mb-3">
                  <input 
                  onChange={this.handleFirstNameChange} 
                  value={this.state.first_name} 
                  placeholder="First Name" 
                  required 
                  type="text" 
                  name="first_name" 
                  id="first_name"
                    className="form-control" />
                  <label htmlFor="name">First Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input 
                  onChange={this.handleLastNameChange} 
                  value={this.state.last_name} 
                  placeholder="Last Name" 
                  required 
                  type="text" 
                  name="last_name" 
                  id="last_name"
                    className="form-control" />
                  <label htmlFor="name">Last Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input 
                  onChange={this.handleEmployeeNumChange} 
                  value={this.state.employee_id} 
                  placeholder="Employee ID" 
                  required 
                  type="text" 
                  name="employee_id" 
                  id="employee_id"
                    className="form-control" />
                  <label htmlFor="name">Employee ID</label>
                </div>
                <button className="btn btn-success">Create</button>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default TechForm
