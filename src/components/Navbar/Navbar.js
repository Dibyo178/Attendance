import React from 'react';
import './Navbar.css';
// import { Nav, Navbar } from 'react-bootstrap';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
 import SearchIcon from '@material-ui/icons/Search';
 import VisibilityIcon from '@material-ui/icons/Visibility';
 import EventIcon from '@material-ui/icons/Event';
 

import { Nav, Navbar} from "react-bootstrap";





const NavigationBar = () => (
  <Navbar className='Navbar' collapseOnSelect expand="lg" >
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        {/* <div className='from-center d-flex'> */}
        <Nav.Link href="#features"> <h3 >Student Attendance</h3></Nav.Link>
       <Nav  >
                          

        {/* <FormControl  >
          <InputLabel htmlFor="filled-age-native-simple" >Total</InputLabel>
          <Select
            native
            value={1}
            onChange={1}
            inputProps={{
              name: 'age',
              id: 'filled-age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl> */}
        </Nav>
        {/* </div> */}
        {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}

      </Nav>
      <Nav className="ml-auto">
      
      <Nav.Link href="#deets">< EventIcon/></Nav.Link>
      <Nav.Link href="#deets"><VisibilityIcon/></Nav.Link>
        <Nav.Link href="#deets"><SearchIcon/></Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
        <button className='button'> courses</button>
      </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

 

);
export default NavigationBar;

