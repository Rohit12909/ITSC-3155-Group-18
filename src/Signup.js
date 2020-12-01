import React, { Component } from 'react'
import UserService from './UserService';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
 
class Signup extends Component {
    constructor(props) {
        super(props)
 
        this.state = {
            
            username: '',
            password: '',
            users: []
        }
 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    handleSubmit(){
        let user = {username: this.state.username, password: this.state.password};
        console.log(user);

        if(user.username === '' && user.password === ''){
            alert("Please Fill All Fields!");
          } else {
         UserService.addUser(user)
         this.props.history.push('/contacts')
        
          }
        } 
    

    changeUsernameHandler= (event) => {
        this.setState({username: event.target.value});
    }
    
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    cancel(){
        this.props.history.push('/login');
    }

    

 
    render() {
        return (
            <div style={{marginTop: "100px"}}>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className = "text-center">Sign-up</h3>
                            <div className = "card-body">
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Username" value={this.state.username} onChange={this.changeUsernameHandler}/>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.changePasswordHandler}/>
                                </Form.Group>

                                <div style={{textAlign: "center"}}>
                                <Button variant="primary" type="submit" >
                                    Sign-up
                                </Button>
                                <button  className="btn btn-danger" onClick= {this.cancel} style={{marginLeft: "15px"}}>
                                               Cancel
                                           </button>
                                </div>
                            </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Signup;