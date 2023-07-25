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
      <>
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
      </>
    )
  }
}

export default ModelsList;
