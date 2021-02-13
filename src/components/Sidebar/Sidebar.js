
import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@react-fontawesome'
import PersonIcon from '@material-ui/icons/Person';
import { HiMenu } from "react-icons/hi";
import { MdAccountBalanceWallet, MdAnnouncement } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import PeopleIcon from '@material-ui/icons/People';

const SideMenu = () => {
    const [step, setStep] = useState();
    return (
        <div>
            <div className="sidenav">
                <div className='menu'>
                    <Link to='/allVolunteer' className="menu-link " onClick={() => setStep(1)}>
                        <PersonIcon id='person' style={step === 1 ? { color: 'green' } : { color: 'gray' }} id='dashboard' />
                        <h5 className='dash '>Teacher</h5>

                    </Link>

                    <Link to='/register' className="menu-link" onClick={() => setStep(2)} id='dashboard'>

                        <PeopleIcon style={step === 2 ? { color: 'green' } : { color: 'gray' }} id='dashboard' />

                        <h3 className='dash '>Student</h3>

                    </Link>




                </div>
            </div>
        </div>
    );
};

export default SideMenu;