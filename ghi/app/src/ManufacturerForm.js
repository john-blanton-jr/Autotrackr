import React from 'react';

class NewManufacturer extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          name: '',
    };
  }
  handleChange = event => {
      const {name, value} = event.target;
      this.setState({
          [name]: value
    });
    }
  handleSubmit = async event => {
      event.preventDefault();
      const data = {...this.state};
      const manufacturerUrl = 'http://localhost:8100/api/manufacturers/';
      const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
              'Content-Type': 'application/json'
      }
    };
      const manufacturerResponse = await fetch(manufacturerUrl, fetchConfig);
        if (manufacturerResponse.ok) {
          this.setState({
            name: '',
        });
      }
  }
  render () {
    return (
      <>
      <div className="row">
      <div className="offset-3 col-6">
      <div className="shadow p-4 mt-4">
        <h1 style={{ textAlign: "center" }}>Add a Manufacturer</h1>
          <form onSubmit={this.handleSubmit} id="create-manufacturer-form">
            <div className="form-floating mb-3">
              <input onChange={this.handleChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" value={this.state.name}/>
              <label htmlFor="name">Manufacturer Name</label>
            </div>
            <button style={{ textAlign: "center" }} className="btn btn-success" >Create Manufacturer</button>
          </form>
      </div>
      </div>
      </div>
      </>
        );
    }
}

export default NewManufacturer;
