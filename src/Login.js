import React, { Component } from 'react';
import UserService from './UserService';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

 
class Login extends Component {
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
        this.signupHandler = this.signupHandler.bind(this);
    }

    handleSubmit(){
        let user = {username: this.state.username, password: this.state.password};
        console.log(user);

        if(user.username === '' && user.password === ''){
            alert("Please Fill All Fields!");
          } else {
          for(var i = 0; i < this.state.users.length; i++){
            if(this.state.users[i].name == user.name && this.state.users[i].password == user.password){
         
              this.props.history.push('/contacts')
         
              break;
            } else {
              alert("Please Check Username and Password!");
              break;
            }
          }
        } 
    }

    componentDidMount(){
        UserService.getUsers().then(response => {
            this.setState({users: response.data})
        })
    }

    changeUsernameHandler= (event) => {
        this.setState({username: event.target.value});
    }
    
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    signupHandler(){
        this.props.history.push('./signup')
    }

 
    render() {
        return (
            
            <div style={{marginTop: "100px"}}>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className = "text-center">Login</h3>
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
                                <Button variant="primary" type="submit">
                                    Login
                                </Button>

                                
                                </div>
                            </Form>
                            <div style={{marginTop: "25px"}}>
                                <h5 style={{textAlign: "center"}}>Dont Have An Accout</h5>
                                <div style={{textAlign: "center"}} >
                            <Button variant="primary" type="submit" onClick={this.signupHandler} style={{textAlign: "center"}}>
                                    Signup
                                </Button>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        )
    }
}
 
export default Login;