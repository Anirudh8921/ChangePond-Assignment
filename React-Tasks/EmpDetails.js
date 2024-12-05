import React, { Component } from 'react';
class EmpDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [
                { empid: 1, empname: 'Anirudh', emppost: 'Developer', empsal: 60000, empcontact: '9390742742', empaddress: 'Nellore' },
                { empid: 2, empname: 'Puni', emppost: 'Manager', empsal:50000, empcontact: '9390742745', empaddress: 'Bangalore' },
                { empid: 3, empname: 'Tom', emppost: 'Designer', empsal: 40000, empcontact: '9490834835', empaddress: 'Chennai' },
                { empid: 4, empname: 'Divakar', emppost: 'Developer', empsal: 45000, empcontact: '9490834836', empaddress: 'Hyderabad' },
                { empid: 5, empname: 'Ram', emppost: 'Manager', empsal: 33000, empcontact: '9490834837', empaddress: 'Guntur' },
                { empid: 6, empname: 'Madhav', emppost: 'HR', empsal: 29000, empcontact: '9490834838', empaddress: 'Noida' },
                { empid: 7, empname: 'Saran', emppost: 'Manager', empsal: 50000, empcontact: '9490834839', empaddress: 'Delhi' },
                { empid: 8, empname: 'Rupesh', emppost: 'QR', empsal: 43000, empcontact: '9490930835', empaddress: 'Kerala' },
                { empid: 9, empname: 'Puran', emppost: 'Manager', empsal: 55000, empcontact: '9490834843', empaddress: 'Goa' },
                { empid: 10, empname: 'Haraha', emppost: 'HR', empsal: 46000, empcontact: '9490742766', empaddress: 'Telangana' }
            ]
        };
    }
    render() {
        return (
            <div>
                <h2>Employee Details</h2>
                <table border="1" style={{ width: '100%', marginTop: '20px', textAlign: 'left' }}>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Employee Name</th>
                            <th>Post</th>
                            <th>Salary</th>
                            <th>Contact</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map((employee) => (
                            <tr key={employee.empid}>
                                <td>{employee.empid}</td>
                                <td>{employee.empname}</td>
                                <td>{employee.emppost}</td>
                                <td>{employee.empsal}</td>
                                <td>{employee.empcontact}</td>
                                <td>{employee.empaddress}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default EmpDetails;