import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import './AllRegister.css';

const AllRegVolunteer = () => {
    const [register, setRegister] = useState([])

    useEffect(() => {

        fetch('https://enigmatic-everglades-62046.herokuapp.com/allVolunteer')
            .then(response => response.json())
            .then(data => setRegister(data))
    }, [register])


    const markEvent = (id) => {
        fetch(`https://enigmatic-everglades-62046.herokuapp.com/mark/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(result => {
                if (result) {
                    console.log(result)
                }
            })
    }
    return (
        <div className="container my-3 dashboard">
            <h2>Student register list</h2>
            <div className="container">
                <Table>
                    <thead>
                        <tr className="text-center">
                            <th>Name</th>
                            <th></th>
                            <th>Email ID</th>
                            <th></th>
                            <th>Registration Date</th>
                            
                            <th>Mark</th>
                        </tr>
                    </thead>
                </Table>
            </div>
            {
                register.map(reg =>
                    <div className="container" key={reg._id}>
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                    <td> {reg.name}</td>
                                    <td>{reg.email}</td>
                                    <td>{reg.registrationDate}</td>
                                    {/* <td>{reg.volunteerEvent}</td> */}
                                    <td> < DoneOutlineIcon onClick={() => markEvent(reg._id)} style={{ backgroundColor: 'green', height: '25px' }}  /></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                )
            }
        </div>
    );
};

export default AllRegVolunteer;