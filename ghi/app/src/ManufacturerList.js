import React from 'react';

class ManufacturerList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        manufacturers: []
    };
  }
  async componentDidMount() {
    const url = 'http://localhost:8100/api/manufacturers/';
    const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        this.setState({manufacturers: data.manufacturers});
      }
  }

  render() {
    return (
      <div className="d-flex justify-content-center">
    <div className="col-11 col-sm-8 col-md-6 col-lg-5 col-xl-4">
      <div className="shadow-lg p-4 mt-5 bg-light rounded border border-2 border-warning">
        <h1 style={{ textAlign: "center" }}>Manufacturers</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Manufacturer Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.manufacturers.map(manufacturer => {
              return (
                <tr key={manufacturer.id}>
                  <td>{manufacturer.name}</td>
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
}

export default ManufacturerList;
