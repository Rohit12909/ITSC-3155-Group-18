 
import React, { Component } from 'react';
import ContactService from './ContactService';
 
class ContactListDash extends Component {
    constructor(props){
        super(props)
 
        this.state = {
            contacts: []
        }
 
        this.addContact = this.addContact.bind(this);
        this.updateContact = this.updateContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
        this.logout = this.logout.bind(this);
    }
 
    componentDidMount(){
        ContactService.getContacts().then((response) => {
            this.setState({ contacts: response.data});
        });
    }
 
    addContact(){
        this.props.history.push('/add-contact');
    }
 
    updateContact(id){
        this.props.history.push(`/update-contact/${id}`);
    }

    deleteContact(id){
        ContactService.deleteContact(id).then(response => {
            this.setState({contacts: this.state.contacts.filter(contact => contact.id !== id)})
        });
    }

    logout(){
        this.props.history.push('/login');
    }
 
    render() {
        return (
           <div style={{marginTop: "100px"}}>
               <div style={{float: "right"}}>
               <button className="btn btn-primary" onClick={this.logout}>Logout</button>
               </div>
               <h2 className="text-center">Contact List</h2>
 
               <div className = "row" style={{marginBottom: "25px"}}>
                   <button className="btn btn-primary" onClick={this.addContact}>Add Contact</button>
               </div>
 
               <div className="row">
                   <table className = "table table-striped table bordered">
                       <thead>
                           <tr>
                                <th>Contact ID</th>
                                <th>Contact Name</th>
                                <th>Phone Number</th>
                                <th>Email Address</th>
                                <th>Actions</th>
                           </tr>
                       </thead>
 
                       <tbody>
                           {
                               this.state.contacts.map(
                                   contact =>
                                   <tr key = {contact.id}>
                                       <td>{contact.id}</td>
                                       <td>{contact.name}</td>
                                       <td>{contact.phoneNumber}</td>
                                       <td>{contact.email}</td>
                                       <td>
                                           <button onClick={() => this.updateContact(contact.id)} className="btn btn-info" style={{marginLeft: "15px"}}>
                                               Update
                                           </button>
                                           <button onClick={() => this.deleteContact(contact.id)} className="btn btn-danger" style={{marginLeft: "15px"}}>
                                               Delete
                                           </button>
                                       </td>
                                   </tr>
                               )
                           }
                       </tbody>
                   </table>
               </div> 
            </div>
        )
    }
}
 
export default ContactListDash;