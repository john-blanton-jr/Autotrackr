import React, { useEffect, useState } from 'react';

function TechList() {
    const [techs, setTechs] = useState([])

    const getData = async () => {
        const response = await fetch('http://localhost:8080/api/technicians/');
        const data = await response.json();
        setTechs(data.techs)

    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <h1>Technicians</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Employee ID</th>
                    </tr>
                </thead>
                <tbody>
                    {techs.map(tech => {
                        return (
                            <tr key={tech.id}>
                                <td>{tech.first_name}</td>
                                <td>{tech.last_name}</td>
                                <td>{tech.employee_id}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default TechList;
