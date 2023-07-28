import React, {useEffect, useState} from 'react';

function AutoForm(){
  const [models, setModels] = useState([])
  const [model, setModel] = useState('')
  const [color, setColor] = useState('')
  const [year, setYear] = useState('')
  const [vin, setVin] = useState('')

  const fetchData = async () => {
    const url = 'http://localhost:8100/api/models/'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      setModels(data.models)
    }
    else {
      console.error(response);
    }
  }

  const handleModelChange = (event) => {
    const value = event.target.value;
    setModel(value);
  }

  const handleColorChange = (event) => {
    const value = event.target.value;
    setColor(value);
  }

  const handleYearChange = (event) => {
    const value = event.target.value;
    setYear(value);
  }

  const handleVinChange = (event) => {
    const value = event.target.value;
    setVin(value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = {}
    data.color = color
    data.year = year
    data.vin = vin
    data.model_id = model

    console.log(JSON.stringify(data))

    const autoUrl = "http://localhost:8100/api/automobiles/";
    const fetchConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }

    }
    const autoResponse = await fetch(autoUrl, fetchConfig);
    if (autoResponse.ok) {
      setColor("")
      setYear("")
      setVin("")
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
        <h1 className="text-center">Add an automobile to inventory</h1>
        <form onSubmit={handleSubmit} id="create-presentation-form">
          <div className="form-floating mb-3">
            <input
              placeholder="Color"
              onChange={handleColorChange}
              value={color}
              required
              type="text"
              name="color"
              id="color"
              className="form-control"
            />
            <label htmlFor="color">Color...</label>
          </div>
          <div className="form-floating mb-3">
            <input
              placeholder="Year"
              onChange={handleYearChange}
              value={year}
              required
              type="number"
              name="Year"
              id="Year"
              className="form-control"
            />
            <label htmlFor="Year">Year...</label>
          </div>
          <div className="form-floating mb-3">
            <input
              placeholder="VIN"
              onChange={handleVinChange}
              value={vin}
              required
              type="text"
              name="vin"
              id="vin"
              className="form-control"
            />
            <label htmlFor="vin">VIN...</label>
          </div>
          <div className="mb-3">
                <select
                  onChange={handleModelChange}
                  value={model}
                  required
                  id="model"
                  name="model"
                  className="form-select"
                >
                  <option value="">Choose a model...</option>
                  {models.map(model => {
                    return (
                      <option key={model.id} value={model.id}>
                      {model.name}
                      </option>
                      );
                    })}
                </select>
              </div>
          <button className="btn btn-primary">Create</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default AutoForm
