import React, { createContext, useState } from 'react';
import Home from './components/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from './components/Register/Register';
import AllRegVolunteer from './components/AllRegVolunteer/AllRegister';



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
     <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
        <PrivateRoute path="/allVolunteer">
            <AllRegVolunteer/>
          </PrivateRoute>
            <PrivateRoute path="/register">
            <Register />
          </PrivateRoute>
            <Route path="/login">
            <Login/>
           
          </Route>
         
            <Route exact path='/'>
            <Home/>
            </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
