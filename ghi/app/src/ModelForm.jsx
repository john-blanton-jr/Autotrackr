import React, {useEffect, useState} from 'react';

function ModelForm() {
  const [manufacturers, setManufacturers] = useState([])
  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')
  const [pictureUrl, setPictureUrl] = useState('')

  const fetchData = async () => {
    const url = 'http://localhost:8100/api/manufacturers/'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      setManufacturers(data.manufacturers)
    }
    else {
      console.error(response);
    }
  }

  const handleManufacturerChange = (event) => {
    const value = event.target.value;
    setManufacturer(value);
  }

  const handleModelChange = (event) => {
    const value = event.target.value;
    setModel(value);
  }

  const handlePictureUrlChange = (event) => {
    const value = event.target.value;
    setPictureUrl(value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = {}
    data.name = model
    data.picture_url = pictureUrl
    data.manufacturer_id = manufacturer

    console.log(JSON.stringify(data))

    const modelUrl = "http://localhost:8100/api/models/";
    const fetchConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }

    }
    const modelResponse = await fetch(modelUrl, fetchConfig);
    if (modelResponse.ok) {
      const response = await modelResponse.json()
      console.log(response)

      setManufacturer("")
      setPictureUrl("")
      setModel("")
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="row">
    <div className="offset-3 col-6">
      <div className="shadow p-4 mt-4">
        <h1 className="text-center">Create a vehicle model</h1>
        <form onSubmit={handleSubmit} id="create-presentation-form">
          <div className="form-floating mb-3">
            <input
              placeholder="Model Name"
              onChange={handleModelChange}
              value={model}
              required
              type="text"
              name="model"
              id="model"
              className="form-control"
            />
            <label htmlFor="model">Model name...</label>
          </div>
          <div className="form-floating mb-3">
            <input
              placeholder="picture_url"
              onChange={handlePictureUrlChange}
              value={pictureUrl}
              required
              type="url"
              name="picture_url"
              id="picture_url"
              className="form-control"
            />
            <label htmlFor="picture_url">Picture URL...</label>
          </div>
          <div className="mb-3">
                <select
                  onChange={handleManufacturerChange}
                  value={manufacturer}
                  required
                  id="salesperson"
                  name="salesperson"
                  className="form-select"
                >
                  <option value="">Choose a manufacturer...</option>
                  {manufacturers.map(manufacturer => {
                    return (
                      <option key={manufacturer.id} value={manufacturer.id}>
                      {manufacturer.name}
                      </option>
                      );
                    })}
                </select>
              </div>
          <button className="btn btn-primary">Add</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default ModelForm
