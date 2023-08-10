import React from 'react';

class ModelsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        models: []
    };
  }
  async componentDidMount() {
    const url = 'http://localhost:8100/api/models/';
    const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        this.setState({models: data.models});
      }
  }

  render() {
    return (
      <div className="d-flex justify-content-center">
    <div className="col mx-5">
      <div className="shadow-lg p-4 mt-5 bg-light rounded border border-2 border-warning">
        <h1 style={{ textAlign: "center" }}>Model List</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Manufacturer</th>
              <th>Name</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            {this.state.models.map(model => {
              return (
                <tr key={model.id}>
                  <td>{model.manufacturer.name}</td>
                  <td>{model.name}</td>
                  <td><img src={model.picture_url} alt="null" className='img-thumbnail' width="70px" height="70px" /></td>
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

export default ModelsList;
