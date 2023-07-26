import React, {useState} from 'react';

function CustomerForm(){
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const HandleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirstName(value);
  }

  const HandleLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);
  }

  const HandleAddressChange = (event) => {
    const value = event.target.value;
    setAddress(value);
  }

  const HandlePhoneNumberChange = (event) => {
    const value = event.target.value;
    setPhoneNumber(value);
  }

  const HandleSubmit= async (event) => {
    event.preventDefault()

    const data = {}
    data.first_name = firstName
    data.last_name = lastName
    data.address = address
    data.phone_number = phoneNumber

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
      setFirstName("");
      setLastName("");
      setAddress("");
      setPhoneNumber("");
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
              placeholder="Address"
              value={address}
              onChange={HandleAddressChange}
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
              value={phoneNumber}
              onChange={HandlePhoneNumberChange}
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
