import React from 'react';
import './App.css';
import ContactListDash from './ContactListDash';
import Navbar from './Navbar';
import Footer from './Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddContact from './AddContact';
import UpdateContact from './UpdateContact';
import Login from './Login';
import Signup from './Signup';
 
function App() {
  return (
    <div>
      <Router>
        <div className="main">
          <Navbar/>
            <div className="container">
              <Switch>
                <Route path = "/" exact component = {Login}></Route>
                <Route path = "/login" component = {Login}></Route>
                <Route path = "/signup" component = {Signup}></Route>
                <Route path = "/contacts" component = {ContactListDash}></Route>
                <Route path = "/add-contact" component = {AddContact}></Route>
                <Route path = "/update-contact/:id" component = {UpdateContact}></Route>
              </Switch>
            </div>
          <Footer/>
          </div>
      </Router>
    </div>
  );
}
 
export default App;
