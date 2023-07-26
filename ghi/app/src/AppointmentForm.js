import { useEffect, useState, React } from "react";

const AppointmentForm = () => {

    const [techs, setTechs] = useState([])
    const [formData, setFormData] = useState({
        vin: '',
        customer_name: '',
        date: '',
        time: '',
        technician: '',
        reason: '',
    })


	useEffect(() => {
		const fetchTechnicians = async () => {
			const url = "http://localhost:8080/api/technicians/";
			const response = await fetch(url);

			if (response.ok) {
				const data = await response.json();
				setTechs(data.techs);
			}
		};
		fetchTechnicians();
	}, []);


    const handleSubmit = async (event) => {
        event.preventDefault();

        const autoUrl = 'http://localhost:8080/api/appointments/';

        const fetchConfig = {
            method: "post",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(autoUrl, fetchConfig);

        if (response.ok) {
            setFormData({
                vin: '',
                customer_name: '',
                date: '',
                time: '',
                technician: '',
                reason: '',
            });
        }
    }

	const handleFormChange = (e) => {
        const value = e.target.value;
        const inputName = e.target.name;
        setFormData({
            ...formData,
            [inputName]: value
        });
    }


	return (
		<div className="row">
			<div className="offset-3 col-6">
				<div className="shadow p-4 mt-4">
					<h1 className="text-center">Create a New Appointment</h1>
					<form id="create-appointment-form" onSubmit={handleSubmit}>
						<div className="form-floating mb-3">
							<input
								onChange={handleFormChange}
								value={formData.vin}
								placeholder="Vin"
								required
								type="text"
								name="vin"
								id="vin"
								className="form-control"
							/>
							<label htmlFor="vin">Vin Number</label>
						</div>

                        <div className="form-floating mb-3">
                            <input 
								onChange={handleFormChange}
                                value={formData.customer_name}
                                placeholder="Customer Name"
                                required
								type="text"
                                name="customer_name" id="customer_name"
                                className="form-control" />
                            <label htmlFor="customer_name">Customer Name</label>
                        </div>

						<div className="form-floating mb-3">
							<input
								onChange={handleFormChange}
								value={formData.date}
								placeholder="Date"
								type="date"
								name="date"
								id="date"
								className="form-control"
							/>
							<label htmlFor="Date Time">Date</label>
						</div>
						<div className="form-floating mb-3">
							<input
								onChange={handleFormChange}
								value={formData.time}
								placeholder="Time"
								type="time"
								name="time"
								id="time"
								className="form-control"
							/>
							<label htmlFor="Date Time">Time</label>
						</div>
						<div className=" mb-3">
							<select
								onChange={handleFormChange}
								value={formData.technician}
								required
								name="technician"
								id="technician"
								className="form-select">
								<option value="">Select a Technician</option>
								{techs.map((technician) => {
									return (
										<option key={technician.id} value={technician.id}>
											{technician.first_name}
										</option>
									);
								})}
							</select>
						</div>
						<div className="mb-3">
							<label htmlFor="reason">Reason</label>
							<textarea
								onChange={handleFormChange}
								value={formData.reason}
								id="reason"
								rows="1"
								name="reason"
								className="form-control"></textarea>
						</div>
						<div className="col text-center">
							<button className="btn btn-success">Create an appointment</button>
						</div>
					</form>

				</div>
			</div>
		</div>
	);
};
export default AppointmentForm;
