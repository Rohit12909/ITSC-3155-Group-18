import React, { Component } from 'react'
import ContactService from './ContactService';
 
class UpdateContact extends Component {
    constructor(props) {
        super(props)
 
        this.state = {
                id: this.props.match.params.id,
                name: '',
                phoneNumber: '',
                email: ''
            
        }
 
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.updateContact = this.updateContact.bind(this);
        this.cancel = this.cancel.bind(this);
        this.logout = this.logout.bind(this);
    }
 
    componentDidMount(){
        ContactService.getContactById(this.state.id).then(response => {
            let contact = response.data;
            this.setState({name: contact.name, phoneNumber: contact.phoneNumber, email: contact.email});
        });
    }
 
    updateContact = (e) => {
        e.preventDefault();
 
        let contact = {name: this.state.name, phoneNumber: this.state.phoneNumber, email: this.state.email};
 
        ContactService.updateContact(this.state.id, contact).then(response =>{
            this.props.history.push('/contacts');
        });
    }
 
    cancel(){
        this.props.history.push('/contacts');
    }
 
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }
 
    changePhoneNumberHandler= (event) => {
        this.setState({phoneNumber: event.target.value});
    }
 
    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    logout(){
        this.props.history.push('/login');
    }
 
    render() {
        return (
            <div style={{marginTop: "100px"}}>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <div style={{marginTop: "25px"}}>
               <button className="btn btn-primary" onClick={this.logout} style={{float: "right"}} >Logout</button>
               </div>
                            <h3 className = "text-center">Update Contact</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label>Name: </label>
                                        <input placeholder="Name" name="name" className="form-control" value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Phone Number: </label>
                                        <input placeholder="Phone Number" name="phoneNumber" className="form-control" value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Email: </label>
                                        <input placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>
 
                                    <button className="btn btn-success" onClick={this.updateContact}>Update</button>
                                    <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default UpdateContact;